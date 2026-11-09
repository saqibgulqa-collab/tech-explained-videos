/**
 * Tech Explained -> Google Drive importer (runs inside your own Google account, free).
 * Reads manifest.json from GitHub and copies every episode folder into Drive:
 *   YouTube Stock / Tech Explained / <episode folder> / (long.mp4, short1-3.mp4, thumbnails, upload.txt)
 * Skips files that are already in Drive with the right size, so it is safe to run again and again.
 */
var MANIFEST_URL = 'https://raw.githubusercontent.com/saqibgulqa-collab/tech-explained-videos/main/manifest.json';
var ROOT_FOLDER_ID = '1wLGiNCZtiGDAuxWZYYY0bcnx3VMh1L1F'; // YouTube Stock / Tech Explained
var CHUNK = 32 * 1024 * 1024;   // 32 MB, a multiple of 256 KB
var TIME_LIMIT_MS = 4.5 * 60 * 1000;

function importStock() {
  var start = Date.now();
  var root = DriveApp.getFolderById(ROOT_FOLDER_ID);
  var manifest = JSON.parse(UrlFetchApp.fetch(MANIFEST_URL + '?t=' + start).getContentText());
  var done = 0, pending = 0;
  for (var i = 0; i < manifest.episodes.length; i++) {
    var ep = manifest.episodes[i];
    var folder = getOrCreateFolder_(root, ep.folder);
    for (var j = 0; j < ep.files.length; j++) {
      var f = ep.files[j];
      if (hasFile_(folder, f.name, f.size)) { done++; continue; }
      if (Date.now() - start > TIME_LIMIT_MS) { pending++; continue; }
      uploadFromUrl_(folder.getId(), f.name, f.url, f.size);
      if (hasFile_(folder, f.name, f.size)) { done++; Logger.log('OK  ' + ep.folder + ' / ' + f.name); }
      else { pending++; Logger.log('RETRY next run: ' + ep.folder + ' / ' + f.name); }
    }
  }
  Logger.log('Done: ' + done + ' files, still pending: ' + pending);
}

function getOrCreateFolder_(parent, name) {
  var it = parent.getFoldersByName(name);
  return it.hasNext() ? it.next() : parent.createFolder(name);
}

function hasFile_(folder, name, size) {
  var it = folder.getFilesByName(name), ok = false;
  while (it.hasNext()) {
    var file = it.next();
    if (file.getSize() === size && !ok) ok = true;
    else file.setTrashed(true);           // remove broken or duplicate copies
  }
  return ok;
}

function uploadFromUrl_(folderId, name, url, size) {
  var token = ScriptApp.getOAuthToken();
  var init = UrlFetchApp.fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable', {
    method: 'post', contentType: 'application/json; charset=UTF-8', muteHttpExceptions: true,
    headers: { Authorization: 'Bearer ' + token, 'X-Upload-Content-Length': String(size) },
    payload: JSON.stringify({ name: name, parents: [folderId] })
  });
  var session = init.getHeaders()['Location'] || init.getHeaders()['location'];
  if (!session) { Logger.log('Could not start upload: ' + init.getContentText()); return; }
  for (var pos = 0; pos < size; pos += CHUNK) {
    var end = Math.min(pos + CHUNK, size) - 1;
    var part = UrlFetchApp.fetch(url, { headers: { Range: 'bytes=' + pos + '-' + end } }).getContent();
    var r = UrlFetchApp.fetch(session, {
      method: 'put', muteHttpExceptions: true, contentType: 'application/octet-stream', payload: part,
      headers: { Authorization: 'Bearer ' + token, 'Content-Range': 'bytes ' + pos + '-' + end + '/' + size }
    });
    var code = r.getResponseCode();
    if (code !== 308 && code !== 200 && code !== 201) { Logger.log('Upload error ' + code + ': ' + r.getContentText()); return; }
  }
}

/** Run once: makes importStock run by itself every 10 minutes. */
function setupTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) { ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('importStock').timeBased().everyMinutes(10).create();
  importStock();
}

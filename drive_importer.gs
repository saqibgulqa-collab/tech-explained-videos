/**
 * Tech Explained -> Google Drive importer v2 (free, runs inside your Google account).
 * Copies every episode from GitHub (manifest.json) into Drive:
 *   YouTube Stock / Tech Explained / <episode folder> / files
 * Big files are sent in 16 MB pieces and the progress is remembered, so a run that
 * hits Google's 6-minute limit simply continues in the next run. Safe to run again and again.
 * Progress report: file "import_log.txt" in the Tech Explained folder.
 */
var MANIFEST_URL = 'https://raw.githubusercontent.com/saqibgulqa-collab/tech-explained-videos/main/manifest.json';
var ROOT_FOLDER_ID = '1wLGiNCZtiGDAuxWZYYY0bcnx3VMh1L1F'; // YouTube Stock / Tech Explained
var CHUNK = 16 * 1024 * 1024;          // multiple of 256 KB
var TIME_LIMIT_MS = 4.5 * 60 * 1000;
var LOG = [];

function importStock() {
  var start = Date.now();
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) { return; }           // another run is still busy
  var props = PropertiesService.getScriptProperties();
  var root = DriveApp.getFolderById(ROOT_FOLDER_ID);
  var manifest = JSON.parse(UrlFetchApp.fetch(MANIFEST_URL + '?t=' + start).getContentText());
  var done = 0, total = 0, stopped = false;
  for (var i = 0; i < manifest.episodes.length && !stopped; i++) {
    var ep = manifest.episodes[i];
    var folder = getOrCreateFolder_(root, ep.folder);
    for (var j = 0; j < ep.files.length; j++) {
      var f = ep.files[j]; total++;
      if (hasFile_(folder, f.name, f.size)) { done++; continue; }
      if (stopped || Date.now() - start > TIME_LIMIT_MS) { stopped = true; continue; }
      try { stopped = !uploadResumable_(props, folder.getId(), ep.folder, f, start); }
      catch (e) { LOG.push('ERROR ' + f.name + ': ' + e); stopped = true; }
      if (hasFile_(folder, f.name, f.size)) { done++; LOG.push('OK ' + ep.folder + ' / ' + f.name); }
    }
  }
  LOG.push(new Date().toISOString() + '  files in Drive: ' + done + ' of ' + total);
  writeLog_(root);
  lock.releaseLock();
}

function uploadResumable_(props, folderId, epName, f, start) {
  var key = 'u:' + epName + '/' + f.name;
  var st = props.getProperty(key); st = st ? JSON.parse(st) : null;
  var token = ScriptApp.getOAuthToken();
  if (!st) {
    var init = UrlFetchApp.fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable', {
      method: 'post', contentType: 'application/json; charset=UTF-8', muteHttpExceptions: true,
      headers: { Authorization: 'Bearer ' + token, 'X-Upload-Content-Length': String(f.size) },
      payload: JSON.stringify({ name: f.name, parents: [folderId] })
    });
    var h = init.getAllHeaders(), loc = h['Location'] || h['location'];
    if (!loc) { LOG.push('Could not start ' + f.name + ': ' + init.getResponseCode() + ' ' + init.getContentText().slice(0, 200)); return false; }
    st = { url: loc, pos: 0 };
  }
  while (st.pos < f.size) {
    if (Date.now() - start > TIME_LIMIT_MS) { props.setProperty(key, JSON.stringify(st)); return false; }
    var end = Math.min(st.pos + CHUNK, f.size) - 1;
    var part = UrlFetchApp.fetch(f.url, { headers: { Range: 'bytes=' + st.pos + '-' + end } }).getContent();
    var r = UrlFetchApp.fetch(st.url, {
      method: 'put', muteHttpExceptions: true, contentType: 'application/octet-stream', payload: part,
      headers: { Authorization: 'Bearer ' + token, 'Content-Range': 'bytes ' + st.pos + '-' + end + '/' + f.size }
    });
    var c = r.getResponseCode();
    if (c !== 308 && c !== 200 && c !== 201) {
      LOG.push('Upload error ' + c + ' on ' + f.name + ': ' + r.getContentText().slice(0, 200));
      props.deleteProperty(key); return false;
    }
    st.pos = end + 1;
  }
  props.deleteProperty(key);
  return true;
}

function getOrCreateFolder_(parent, name) {
  var it = parent.getFoldersByName(name);
  return it.hasNext() ? it.next() : parent.createFolder(name);
}

function hasFile_(folder, name, size) {
  var it = folder.getFilesByName(name), ok = false;
  while (it.hasNext()) { var file = it.next(); if (file.getSize() === size && !ok) ok = true; }
  return ok;
}

function writeLog_(root) {
  var text = LOG.join('\n');
  var it = root.getFilesByName('import_log.txt');
  if (it.hasNext()) it.next().setContent(text); else root.createFile('import_log.txt', text);
}

/** Run once: runs importStock by itself every 10 minutes. */
function setupTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) { ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('importStock').timeBased().everyMinutes(10).create();
  importStock();
}

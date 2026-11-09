# Tech Explained (Channel 03) — automated video production

Owner: Saqib. Reply to him in Roman Urdu. Videos are in English for a global audience (US/UK first).
This channel is fully separate from Future Money Lab: own repo, tracker, Metricool brand. Never mix files or posts.
`FML_REFERENCE_CLAUDE.md` = the Future Money Lab instructions, kept only as a technical reference (scene kinds, b-roll, hand-off).

## Owner's standing orders (Nov 8, 2026)
1. **Voice must sound like a real human narrator** (natural English, no robotic tone). Use the voice Saqib approved
   (see `pipeline/voice.json`). If a scene sounds flat or glitchy, re-voice it before rendering.
2. **Default 1 long video per day (+ its 3 Shorts); 2 per day only when stock and capacity allow.**
   Main slot **01:00 PKT (3 PM ET)**; second slot **19:00 PKT (9 AM ET)** when making 2. After 2–3 weeks, move slots to what YouTube Analytics shows.
7. **Token budget:** Saqib runs 7–8 channels on one Claude plan. Keep every run lean: one video per run, few searches
   (5–8), no re-reading big files, no extra tools or experiments, short reports. Spend effort on the video, not on chatter.
3. **Every long video gets 3 Shorts** cut from its best scenes, uploaded to the same channel, spread between the long uploads.
4. **Never stop.** Production keeps running on the schedule until Saqib explicitly says to stop uploads.
5. **Follow the data.** Once videos have views, check analytics every run: topics/formats with the best views, CTR and
   retention get more follow-ups first; weak ones get fewer. Explain the change in the run report.
6. Stock rule: keep **10 long videos** (with their Shorts) ready/scheduled ahead.

## Content rules
- Technical accuracy first: every number from a source opened in the run, labelled "checked <Month Year>".
- No invented experiences or tests. Titles/thumbnails must match the video.
- Each video adds real value (new research, analogy → mechanism → recap). Avoid repetitive mass-produced output.
- AI voice disclosed (`isAiGeneratedContent: true` + description line). Footage/music only from Mixkit (free license).
- No product promotion without disclosure.

## Video format (7–9 min)
Hook question → simple analogy → real mechanism step by step → recap → next-video bridge. White/blue palette.
Episode files: `episodes/TEXX/episode.json` (TE01 is the reference). `shorts`: list of 3 `{scenes, headline, cta}`.

## Build
`FML_WORK=~/te-work python3 pipeline/make_episode.py episodes/TEXX/episode.json broll voice pace props stills`
→ read `stills_sheet.png`, fix overlaps → `... render audio assemble short thumbs meta`.
Never run two heavy jobs (voice, render, audio mix) at once (~7 GB RAM).

## Publishing (once the channel is connected)
Same hand-off as the reference file (GitHub raw URL → Metricool `createScheduledPost`, autoPublish),
but with this channel's own repo and Metricool brand id. Slot must be ≥24 h ahead so Saqib can stop it.

# Tech Explained — Claude Production Pack (TE10 onwards)

**For:** Claude, the video builder for the Tech Explained channel (@TechExplained-b5v).
**Applies to:** every episode from TE10 onwards. TE01–TE09 are finished — never change them.
**Companion file:** `Visual_Prompts.md` (master style prompt, per-scene visual prompts, negative prompt, thumbnail text-overlay spec). This pack adds the *workflow*, the *thumbnail-first rules* and the *reference channels* on top of it. Read both before building any episode.

Channel constants (unchanged): faceless, English, audience US/UK/CA/AU, Science & Technology category, palette = deep blue + white + light-blue glow, ONE recognisable style across every episode.

---

## 1) THE PRODUCTION WORKFLOW — the 5 steps Claude must run for EVERY episode

Taken from the Aaghaz video "Edit 10 Videos a Day With Claude" (Claude Code + HyperFrames method) and adapted to this channel's pipeline. These are the most important jobs Claude does — in this order, every time:

### Step 1 — Transcribe / script first
- Write (or receive) the narration script FIRST. The script is the edit timeline — visuals are planned from the text, never the other way round.
- Break the script into scenes by sentence. Every sentence gets exactly one planned visual (see §3). Output this scene list before building anything.

### Step 2 — Cut plan
- Mark every cut on paper before rendering: hook cut in the first 2 seconds, then a new visual for every spoken sentence.
- No visual may sit still for more than 4–5 seconds (slow zoom/pan/Ken Burns is the minimum movement).
- Cut on the sentence, never on a "slide".

### Step 3 — Plan the beats
- Map the episode into beats before building: **Hook** (0–15s, the most surprising visual + the question) → **Curiosity** (why this is stranger/bigger than it looks) → **Mechanism** (the how-it-works core — exploded/cutaway views) → **Scale/Stat** (the number shown as a full-screen visual, not a card) → **Recap** (one-line summary visual).
- Every 20–30 seconds there must be a pattern interrupt: a zoom into the mechanism, a comparison split, a moving diagram, or a kinetic-typography moment (below) — something that resets attention.

### Step 4 — Build skills, don't reinvent
- Reuse the channel's saved style system every episode: the master style prompt and scene prompts in `Visual_Prompts.md`, the same palette, the same thumbnail font (Anton / Archivo Black), the same lower-third design, the same caption style.
- If a new visual trick works in one episode, save it into the style system and reuse it — consistency is what makes a faceless channel a brand.

### Step 5 — Verify your own work (self-QA, mandatory before delivery)
- Render-check frames at several timestamps of the final video: text spelled correctly and rendered (never generated inside images), labels readable, no slide/PowerPoint look, visuals match the sentence being spoken.
- Check the thumbnail at MOBILE size (shrink to ~10%): if the subject and 2–4 words are not instantly readable, redesign it.
- Only deliver the package when the checks pass, and include a one-line QA note in the package saying what was checked.

### Motion-graphics layer (HyperFrames-style), applied inside the steps above
- **Kinetic typography:** key terms land on screen as big animated words (3–5 words max) exactly when spoken — e.g. the mechanism's name, the surprising number.
- **Animated diagrams, not static ones:** arrows draw themselves, signals/data visibly FLOW through the device as a glowing path, counters count up.
- **Labels animate onto parts** one by one as the narration names them (see Lesics / Animagraffs in §4).
- Camera moves: push-in on the hook visual, slow orbit/drift on 3D-style renders, whip to the comparison side on comparisons.

---

## 2) THUMBNAIL FIRST — viewers come because of the thumbnail

The owner is explicit: **people click because of the thumbnail.** Treat the thumbnail as half the video, not as packaging done at the end.

- Design the thumbnail **with the title, before or alongside the video build** — thumbnail and title together make ONE promise: a single question the video answers.
- Thumbnail text must NOT repeat the title text. Title explains, thumbnail provokes.
- **One subject filling 60–70% of the frame**, dramatic angle, deep blue background (channel palette).
- **Show the hidden thing:** cut-open, exploded view, X-ray/cross-section or scale contrast (tiny human vs huge machine). "What's inside it?" is this niche's strongest click driver (see Jared Owen, §4).
- **Text: 2–4 words, ALL CAPS**, added in the editor (never generated inside the image — it misspells). One word in light blue or yellow, thick dark outline + soft shadow, left or bottom-left, never covering the subject's focal point.
- **Mobile test is law:** most clicks are on phones. If it doesn't read at small size, it fails — simplify until it does.
- **Always deliver TWO variants:** thumbnail_A (object close-up — this is the one uploaded) and thumbnail_B (comparison/diagram angle — kept for YouTube Test & Compare).
- Keep the series look identical across episodes: same font, same palette, same glow, subject framed the same way. A returning viewer should recognise a Tech Explained thumbnail in under a second.

---

## 3) VISUAL STANDARDS — what "better visuals" means on this channel

- **Every sentence has a visual.** No narration over a static card, ever.
- **Mechanism scenes are the core product:** exploded views and cutaways with components floating apart in sequence and a glowing path showing light/signal/data travelling through them (master prompt in `Visual_Prompts.md` §3).
- **Colour-code the parts** and keep the same colour for the same part for the whole video (Lesics rule) — the viewer learns the system by colour.
- **Stats are pictures, not cards:** show the thing the number describes, full-screen, with a human silhouette for scale where it helps; the number itself arrives as an animated lower-third or kinetic type.
- **Comparisons are split screens:** old = dim/desaturated, new = bright blue glow, same object both sides.
- **Journeys are moving maps:** one glowing route line travelling A → B, pulses at landing points, camera following the line (PolyMatter/Wendover rule).
- **Shorts:** the single best cutaway/mechanism moment of the long video, vertical; visual hook inside the first 2 seconds; big burned-in captions; the "wait, what's inside?" moment is the clip, not the summary.
- Negative prompt from `Visual_Prompts.md` §4 applies to every generated visual (no text in images, no slide look, no watermark, no faces).

---

## 4) REFERENCE CHANNELS — copy the LOOK, not the content

Verified 13 Nov 2026 (subscriber counts approximate, from public channel data). Study these before building; each one teaches one specific thing:

| Channel | Size (approx.) | What to copy for Tech Explained |
|---|---|---|
| **Branch Education** (@BranchEducation) | ~2.68M subs, ~112M views, only ~59 videos | The closest niche match: 3D models explaining how microchips, smartphone cameras, Bluetooth, GPUs work. Copy: exploded/accurate models, parts labelled, one process shown in an order a viewer can follow. Proof the model works: "How are Microchips Made?" ~11.7M views, "How does Starlink Work?" ~9.8M. |
| **Jared Owen** (@jaredowen) | ~4.4M subs, ~499M views, ~118 videos | 3D cutaway animations of how famous machines/objects work (Blender). Copy: the cutaway REVEAL as the hero moment, evergreen "How does X work?" topics, thumbnails = the recognisable object sliced open. |
| **Lesics** (@Lesics, Sabin Mathew) | millions of subs across his channels (~6.97M combined per lesics.com) | Engineering explained with clean, simpler animation. Copy: colour-coded parts, power/signal flow shown moving through the system, start from a real-world problem, add parts layer by layer. This is the most *achievable* quality bar for our pipeline. |
| **Animagraffs** (@Animagraffs) | ~1.8M subs | Animated INFOGRAPHICS of machines: a labelled, moving diagram instead of full 3D. Copy: labels + leader lines on a clean diagram, parts highlighted in turn. Very achievable in our flat style. |
| **PolyMatter** (@PolyMatter) | ~1.93M subs, ~188 videos | Flat minimalist animation for systems/economics/tech. Copy: custom maps, charts and timelines that serve the argument; restrained typography; ONE consistent visual language across years of videos. |
| **ColdFusion** (@ColdFusion) | large, established | Cinematic stock footage + minimal motion graphics, premium calm feel. Copy: pacing and restraint — when a real photo/footage of the thing exists, use it instead of a render. |
| **Kurzgesagt – In a Nutshell** (@kurzgesagt) | one of the largest science channels | Aspirational benchmark only: flat illustration with bold colour contrast. Copy: thumbnail simplicity — one idea, few elements, instantly readable at any size. |

Rule when studying them: steal the **technique** (cutaway, colour-coding, label animation, map style, thumbnail composition) — never their footage, art or text.

---

## 5) PER-EPISODE PACKAGE CHECKLIST (Claude delivers all of this)

- [ ] Long video (~8 min) built with the 5-step workflow in §1
- [ ] 3 Shorts (best mechanism moments, visual hook in first 2s)
- [ ] thumbnail_A.png (uploaded version) + thumbnail_B.png (Test & Compare variant) — both per §2
- [ ] upload_package.json with exact title / description / tags (title written to pair with thumbnail_A, not repeat it)
- [ ] Scene list + beat plan used for this episode
- [ ] Self-QA note (Step 5): frames checked, thumbnail mobile-test passed
- [ ] Music (owner's standing decision, 12 Nov 2026): from TE10 onwards use **"Golden Brown (Slowed Down Version)" — The Stranglers**, built into the video at production time. Note: expect a Content ID claim on long videos once monetised (revenue to the label); Shorts via YouTube's audio library are unaffected.
- [ ] Nothing from TE01–TE09 is changed, deleted or re-uploaded. Ever.

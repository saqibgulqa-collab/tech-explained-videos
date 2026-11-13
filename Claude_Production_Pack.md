# Tech Explained — Claude Production Pack (TE10 onwards)

**For:** Claude, the video builder for the Tech Explained channel (@TechExplained-b5v).
**Applies to:** every episode from TE10 onwards. TE01–TE09 are finished — never change them.
**THE STANDARD: Branch Education, strictly** — content structure, internal visuals and thumbnails all follow Branch Education (§4). Other channels are background viewing only; never blend their styles into an episode.
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
- **Labels animate onto parts** one by one as the narration names them (Branch Education's labelling style — §4).
- Camera moves: push-in on the hook visual, slow orbit/drift on 3D-style renders, whip to the comparison side on comparisons.

---

## 2) THUMBNAIL FIRST — viewers come because of the thumbnail

The owner is explicit: **people click because of the thumbnail.** Treat the thumbnail as half the video, not as packaging done at the end.

- Design the thumbnail **with the title, before or alongside the video build** — thumbnail and title together make ONE promise: a single question the video answers.
- Thumbnail text must NOT repeat the title text. Title explains, thumbnail provokes.
- **One subject filling 60–70% of the frame**, dramatic angle, deep blue background (channel palette).
- **Show the hidden thing:** cut-open, exploded view, X-ray/cross-section or scale contrast (tiny human vs huge machine). "What's inside it?" is this niche's strongest click driver (Branch Education's signature move — §4).
- **Text: 2–4 words, ALL CAPS**, added in the editor (never generated inside the image — it misspells). One word in light blue or yellow, thick dark outline + soft shadow, left or bottom-left, never covering the subject's focal point.
- **Mobile test is law:** most clicks are on phones. If it doesn't read at small size, it fails — simplify until it does.
- **Always deliver TWO variants:** thumbnail_A (object close-up — this is the one uploaded) and thumbnail_B (comparison/diagram angle — kept for YouTube Test & Compare).
- Keep the series look identical across episodes: same font, same palette, same glow, subject framed the same way. A returning viewer should recognise a Tech Explained thumbnail in under a second.

**THE THUMBNAIL STANDARD = BRANCH EDUCATION** (owner's instruction, 13 Nov 2026: follow Branch Education strictly — content, visuals AND thumbnails; grammar studied from their real hits, e.g. "How does Bluetooth Work?", 10.4M views. The owner rejected clean flat-CGI thumbnails as unrealistic and boring, and approved the photoreal "INTERNET FROM SPACE" Starlink example (thumbnail A) built to this grammar as the channel's exemplar — match THAT look):
- **Photorealistic, real materials.** Real textures (fabric, copper, matte plastic, foil), cinematic lighting, photographic depth. NO flat vector look, NO toy-like CGI, NO empty gradient void backgrounds — use a textured, atmospheric background (dark warm charcoal, real sky, real surfaces).
- **The subject FILLS the frame**, edge to edge, shot close. If it looks small, it fails.
- **Show the mechanism BIG:** an exploded row of the device's real parts (Branch's earbud) or one extreme close-up cutaway detail next to the whole object (Jared's suit leg, layers fanned out). The inside-detail is the hero, not decoration.
- **One warm accent colour** (orange/red) against the cool scene — the hook word, or one arrow from the whole object to its detail. Only one accent; everything else stays natural.
- **Text is either the actual question or a specific number hook** ("11 Layers", "550 KM UP") — huge, clean, bold; never a vague slogan.

---

## 3) VISUAL STANDARDS — what "better visuals" means on this channel

**VISUAL STANDARD = BRANCH EDUCATION, STRICTLY (owner's instruction, 13 Nov 2026).** Every internal visual must match or align with Branch Education's look and method:
- **Accurate 3D models of the real device** — real proportions, real materials (metal, glass, matte plastic, copper); never stylised, cartoon or flat-vector.
- **Exploded views are the default shot:** the device separates into its real components in mid-air, in assembly order; the camera slowly orbits or pushes in while ONE component at a time is highlighted and labelled.
- **Process in real working order:** follow the signal / energy / data through the device step by step, exactly as it happens inside — a viewer pausing anywhere still knows where they are in the process.
- **Clean dark studio environment,** soft rim light, subtle depth — the device is always the hero; backgrounds never compete.
- **Labels in one consistent style** (thin leader lines, small clean type), animated on as the narration names each part.

- **Every sentence has a visual.** No narration over a static card, ever.
- **Mechanism scenes are the core product:** exploded views and cutaways with components floating apart in sequence and a glowing path showing light/signal/data travelling through them (master prompt in `Visual_Prompts.md` §3).
- **Colour-code the parts** and keep the same colour for the same part for the whole video — the viewer learns the system by colour.
- **Stats are pictures, not cards:** show the thing the number describes, full-screen, with a human silhouette for scale where it helps; the number itself arrives as an animated lower-third or kinetic type.
- **Comparisons are split screens:** old = dim/desaturated, new = bright blue glow, same object both sides.
- **Journeys are moving maps:** one glowing route line travelling A → B, pulses at landing points, camera following the line.
- **Shorts:** the single best cutaway/mechanism moment of the long video, vertical; visual hook inside the first 2 seconds; big burned-in captions; the "wait, what's inside?" moment is the clip, not the summary.
- Negative prompt from `Visual_Prompts.md` §4 applies to every generated visual (no text in images, no slide look, no watermark, no faces).

---

## 4) THE STANDARD — BRANCH EDUCATION (strict)

**Owner's instruction (13 Nov 2026): follow Branch Education strictly** — for content structure, for internal visuals, and for thumbnails. It is this channel's single standard, not one reference among many. Where anything in this pack could be read two ways, the Branch Education way wins.

- **Channel:** Branch Education — @BranchEducation (~2.78M subs, ~112M views, only ~59 videos): 3D models explaining how microchips, smartphone cameras, Bluetooth, Starlink and graphics cards work — exactly Tech Explained's niche.
- **Content structure to mirror:** start from the real device → open it up → exploded, accurate model → follow ONE process through it in real order, part by part → zoom back out to the whole device and why it matters. Narration stays concrete and mechanical: name the part, show the part, show what it does.
- **Visuals to mirror:** §3 — accurate exploded 3D models, photoreal materials, labels on parts, one component highlighted at a time, clean dark studio look.
- **Thumbnails to mirror:** §2 — the device or its exploded parts huge in frame, photoreal, the mechanism shown big, question/number hook text. The owner-approved exemplar is the photoreal Starlink dish thumbnail ("INTERNET FROM SPACE").
- **Proof the model works:** "How are Microchips Made?" ~11.7M views, "How does Bluetooth Work?" ~10.4M, "How does Starlink Work?" ~9.8M, "How do Graphics Cards Work?" ~7.6M.

Other channels (Jared Owen, Lesics, Animagraffs, PolyMatter, ColdFusion, Kurzgesagt) are **background viewing only** — they are NOT standards for this channel and their styles must NOT be blended in. If a technique is not Branch Education's, leave it out.

Alignment means method and look — never copying. Every script, model and visual is built 100% original for Tech Explained; never reuse Branch Education's footage, art, models or text.

---

## 5) TOPIC SELECTION — choose topics the reference channels already proved

The owner wants the channel to grow on schedule, not on luck. So do not invent topics from thin air: **build every episode's topic from Branch Education's proven hits (§4)** — topics their audiences already rewarded with millions of views — then make the video fully our own.

Proven demand (verified Nov 2026, approximate views):
- **Branch Education:** How are Microchips Made? (~11.7M), How does Bluetooth Work? (~10.1M), How does Starlink Work? (~9.8M), How do Graphics Cards Work? (~7.6M), How do Video Game Graphics Work? (~5.4M), How do Electron Microscopes Work? (~4.7M), How does Computer Hardware Work? (~3.9M)
- (Branch Education only, since 13 Nov 2026: a topic is proven by Branch's catalogue; other channels' hits no longer qualify a topic on their own.)

Selection filters — a topic must pass ALL five before it is scripted:
1. **Proven:** Branch Education's version (or a close sibling in the same niche) cleared ~1M views.
2. **Recognisable object, hidden inside:** something the viewer owns or sees daily (phone, router, microwave, lift, washing machine, ATM, earbuds) whose working they have never seen — the cutaway is the video.
3. **Evergreen:** no news, no trend, no date — it must still get suggested three years from now (Branch Education's whole catalogue runs on this).
4. **Not already covered by us:** TE01–TE10 are done (ocean cables, GPS, smartphone camera, WhatsApp, how chips are made, planes/Wi-Fi, data centres, touchscreens, Starlink). A repeat topic is allowed only with a clearly different, deeper angle — when in doubt, pick an uncovered one (e.g. Bluetooth, NFC tap-to-pay, SSDs, microwave ovens, elevators, QR codes, noise-cancelling earbuds).
5. **Visual potential:** the mechanism must be showable as an exploded view, cutaway or flowing diagram per §3. If it can't be drawn, it can't be our video.

**Adapt, never copy:** the *topic* and the "How does X work?" *format* are proven public demand — the script, research, facts, wording and visuals must be 100% original, researched fresh for this channel. Never reuse a reference channel's script, structure line-by-line, art or thumbnail composition.
For every new episode, state in the package which reference hit proves the topic's demand (one line: "Topic proof: Branch Education, Bluetooth, ~10.1M views").

---

## 6) THE KINDNESS CTA — subscribe & like, heart-touching, never begging

The owner wants viewers asked to Like and Subscribe in a way that touches the heart — kindness, not pressure. Rules:

- **Once per long video**, at the end, after the recap. **Never in the first 30 seconds, never repeated, never "smash that button".**
- **SHORT TEXT ONLY** (owner's preference, 13 Nov 2026): the ask must be one short line — long emotional speeches are out. Kindness stays, length goes.
- End of long video — voiceover (one line) + on-screen text:

> Voiceover: "A Like and Subscribe from you keeps us going. Thank you for your kindness."
> On-screen text: **LIKE • SUBSCRIBE • THANK YOU**

- **Shorts version** (last 3 seconds, voiceover + on-screen text):

> "Subscribe — thank you!"

---

## 7) PER-EPISODE PACKAGE CHECKLIST (Claude delivers all of this)

- [ ] Topic chosen per §5, with the one-line topic-proof note (which reference hit proves demand)
- [ ] Long video (~8 min) built with the 5-step workflow in §1, ending with the kindness CTA in §6 (and the Shorts CTA in all 3 Shorts)
- [ ] 3 Shorts (best mechanism moments, visual hook in first 2s)
- [ ] thumbnail_A.png (uploaded version) + thumbnail_B.png (Test & Compare variant) — both per §2
- [ ] **Branch-alignment self-check passed:** internal visuals and thumbnail_A compared against the §3/§2 Branch Education standard — accurate exploded-model look, labels, photoreal materials, no blended styles from other channels
- [ ] upload_package.json with exact title / description / tags (title written to pair with thumbnail_A, not repeat it)
- [ ] Scene list + beat plan used for this episode
- [ ] Self-QA note (Step 5): frames checked, thumbnail mobile-test passed
- [ ] Music (owner's standing decision, 12 Nov 2026): from TE10 onwards use **"Golden Brown (Slowed Down Version)" — The Stranglers**, built into the video at production time. Note: expect a Content ID claim on long videos once monetised (revenue to the label); Shorts via YouTube's audio library are unaffected.
- [ ] Nothing from TE01–TE09 is changed, deleted or re-uploaded. Ever.

---
*Revision note — 13 Nov 2026 (rev 4): on the owner's instruction, Branch Education is now the channel's single strict standard for content, visuals and thumbnails (§2, §3, §4, §5 tightened; other channels demoted to background only), and the owner-approved photoreal Starlink thumbnail A is the exemplar. Earlier the same day: rev 3 added the studied thumbnail grammar + shortened the kindness CTA; rev 2 added §5 topic selection and §6 the kindness CTA.*

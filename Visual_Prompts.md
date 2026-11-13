# Tech Explained — Visual Prompts (Thumbnail + In-Video Visuals)

Purpose: the current videos look like presentation slides (stat cards + chips). These prompts move the channel to a cinematic explainer look — the style used by Branch Education (3D exploded views of technology) and ColdFusion (cinematic visuals + clean graphics).
Channel constants: faceless, English, audience US/UK/CA/AU, palette = deep blue + white + light-blue glow. Keep ONE style across every episode so the channel becomes recognisable.

---

## 1) MASTER STYLE PROMPT — paste at the start of EVERY image prompt

```
Modern tech explainer visual, deep blue and white palette with light-blue glow accents, clean flat 3D render in the style of Branch Education, soft studio lighting, subtle depth of field, ONE clear subject, generous negative space, cinematic composition, no text, no watermark, 16:9
```

## 2) THUMBNAIL PROMPTS

Rules that matter more than the prompt itself:
- Maximum 3–4 words of text, added later in the editor — NEVER ask the image generator to write the text (it misspells).
- One big subject filling 60–70% of the frame, shot from a dramatic angle.
- One surprising/curiosity element (huge scale contrast, something cut open, something glowing).
- Leave the left third emptier — the title text sits there.
- Generate TWO variants per video: (A) object close-up, (B) comparison/diagram style. Upload A, keep B for Test & Compare.

Template:
```
[MASTER STYLE PROMPT]. Extreme close-up of [SUBJECT], dramatic low angle, [ONE surprising element], deep blue background with faint glowing circuit lines, strong rim light, left third of the frame kept empty and darker for title text, ultra-clean composition, YouTube thumbnail style, 1280x720
```

Worked examples (from the current series):
- TE01 (undersea cable): "Extreme close-up of a thick undersea fibre-optic cable cut open on the dark ocean floor, hundreds of glowing glass fibres shining inside it, tiny fish silhouette in the dark distance, bubbles rising"
- TE02 (GPS): "A smartphone seen from directly above on a dark map, three satellites at the frame edges beaming glowing blue triangulation lines down onto the phone, one bright pulsing location point"
- TE03 (camera): "Exploded view of a smartphone camera module, five glass lens elements floating apart in a row, a beam of light travelling through them onto a glowing sensor chip"

Text-overlay spec (for the editor, not the generator): 2–4 words, ALL CAPS, Anton or Archivo Black, white with ONE word in light blue or yellow, thick dark outline + soft shadow, placed left or bottom-left, never covering the subject's focal point.

## 3) IN-VIDEO VISUAL PROMPTS — replacing the slide/card look

Use one prompt per scene. Add a `visual_prompt` field in episode.json per scene, built from the master style + the scene type below.

- **Hook / opening scene:** "[MASTER]. [SUBJECT] in a dramatic wide shot, camera pushing in, one glowing element drawing the eye, dark blue atmosphere"
- **Analogy scene:** "[MASTER]. Isometric cutaway illustration of [EVERYDAY OBJECT standing in for the tech], layers separated so the inside is visible, blank space at the edges for labels added in edit"
- **Mechanism / how-it-works scene (the most important):** "[MASTER]. 3D exploded view of [DEVICE/PART], components floating apart in sequence, a glowing path showing [light / signal / data] travelling through the parts step by step, deep blue background"
- **Stat / number scene (replaces the stat card):** show the THING the number is about, full-screen; the number goes on as an animated lower-third in the editor. "[MASTER]. [SUBJECT at huge scale], tiny human silhouette for scale, moody blue light"
- **Comparison scene:** "[MASTER]. Split composition: left side [OLD technology, dim and desaturated], right side [NEW technology, bright blue glow], the same object on both sides"
- **Journey / map scene:** "[MASTER]. Stylised dark world map, one glowing route line travelling from [A] to [B] under the ocean, soft pulses at each landing point, camera slowly following the line"

Editing notes that sell the look (not prompts, but part of the same fix):
- Never hold a still for more than 4–5 seconds: slow zoom/pan (Ken Burns) on every visual.
- Numbers and labels animate in as lower-thirds — they are not the picture, they sit ON the picture.
- One visual per spoken sentence; cut on the sentence, not on the slide.

## 4) NEGATIVE PROMPT — paste at the end of every prompt

```
No text, no letters, no numbers, no watermark, no logo, no presentation slide, no bullet points, no PowerPoint look, no childish cartoon style, no cluttered background, no human faces, no hands with extra fingers
```

## 5) Reference channels to copy the LOOK from (not the content)

- **Branch Education** — 3D exploded views explaining exactly this niche (how cameras, phones, chips work). Closest match.
- **ColdFusion** — cinematic stock + minimal motion graphics, premium feel.
- **Half as Interesting / Wendover** — clean maps and diagrams when a journey or system is explained.

One style, every episode: same palette, same glow, same thumbnail font — that consistency is what makes a faceless channel look like a brand instead of a slide deck.


The user is asking if I can crop the use case images myself to show only the required parts. The current `UseCases.tsx` uses raw `<img>` tags with `object-contain`, which displays the full image as-is.

Looking at the images: they're full square illustrations with people in scenes. The "required part" likely means focusing on the people/subjects rather than excess background.

I have two approaches:
1. **CSS cropping** — use `object-cover` with a constrained `aspect-ratio` and `object-position` to focus on a specific area of each image. Fast, no asset regeneration, fully reversible.
2. **AI re-generation/cropping** — use the AI gateway to actually edit/crop the PNG files. More permanent but slower and may alter image quality.

CSS cropping is the right call here — it's clean, performant, lets us tune per-image focus points, and keeps the originals intact for future tweaks.

## Plan

**Update `src/components/UseCases.tsx`:**
- Add per-story `focus` field (e.g. `"center"`, `"top"`, `"50% 35%"`) to the `STORIES` array so each image can be framed individually.
- Replace the image wrapper with a fixed aspect-ratio container (e.g. `aspect-[4/5]` portrait or `aspect-square`) using `overflow-hidden` and `rounded-2xl`.
- Switch the `<img>` from `object-contain` to `object-cover` with `object-position` driven by the `focus` value, so each image fills its frame showing only the subject.
- Keep the soft drop-shadow and fade-in animation; remove the centered max-width since the image now fills the framed area.
- Tune focus per scene:
  - Café: `50% 40%` (center on the people at the table)
  - Conference: `50% 35%` (center on the group, trim excess ceiling/floor)
  - Campus: `50% 40%` (center on the students)
  - Travel: `50% 45%` (center on the friends/scene)

**No other files change.** Originals in `src/assets/` stay untouched, so we can re-tune crop framing anytime without regenerating assets.

## Visual result

Each storytelling row will show a tightly-framed portrait-style image of the people in the scene, removing distracting background padding, while the alternating left/right layout and typography stay exactly as they are now.

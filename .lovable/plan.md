
## Goal
Match the charity:water reference: a full-bleed hero photo with the headline on the left and the donate card floating directly on top of the image on the right — no framed/rounded container, no separate donate section below the fold for the primary CTA.

## Changes

### 1. `src/components/site/Hero.tsx` — full redesign
- Remove the rounded-3xl framed container and the `aspect-[21/9]` constraint on desktop.
- New structure on desktop (md+):
  - Full-bleed section: `relative w-full h-[88vh] min-h-[640px]` with the hero image as `absolute inset-0 object-cover`.
  - Soft left-side gradient overlay (dark → transparent) so the white headline reads against the photo, image stays clean on the right.
  - Content grid inside `container-narrow`, two columns:
    - **Left:** eyebrow chip, serif/display H1 ("When the crisis remains in the body."), short subline. No CTA buttons here — the donate card replaces them.
    - **Right:** the donate card, lifted onto the hero (white card, rounded-2xl, shadow-elegant). Width ~420px, vertically centered.
- Mobile keeps the existing full-bleed mobile layout, but the donate card stacks below the headline inside the hero (or immediately after) instead of CTA buttons.

### 2. New `src/components/site/HeroDonateCard.tsx`
- Extract the donate UI from `Donate.tsx` into a reusable card component used by the hero.
- Same logic (frequency toggle, 4 amount tiles, custom input, impact line, CTA button) but visually tightened to match the reference:
  - Compact header "Choose an amount to give" (small uppercase label).
  - Monthly / One-time pill toggle at top, accent-yellow active state.
  - 2×2 (or 3+1) amount grid showing "€10 / month" style labels.
  - "Other amount" tile instead of separate input row (input appears when selected).
  - Heart + impact line below.
  - Full-width primary CTA "Join today" / "Donate €X".
- Currency: € (per prior review feedback, European NGO).

### 3. `src/components/site/Donate.tsx`
- Reuse the new `HeroDonateCard` so the bottom donate section stays in sync. Keep the surrounding navy pitch panel; swap the inline card markup for `<HeroDonateCard />`.

### 4. `src/pages/Index.tsx`
- No structural change. Hero now carries the primary donate CTA above the fold; the existing `<Donate />` section remains as a deeper, fuller pitch lower on the page.

## Visual reference mapping
- Charity:water hero photo full-bleed → our hero image becomes full-bleed (no rounded frame).
- Their headline left, donate card right → same two-column layout.
- Their yellow accent CTA → our existing `--accent` token (navy-trust palette's accent), no color changes.
- Their serif headline → we already use a display serif via the chosen type pair; no font swap.

## Out of scope
- No copy rewrites beyond $ → €.
- No changes to Stats, Method, Ukraine, Work, Team, Story, Global, Footer.
- No new images (uses existing `src/assets/hero.jpg`).

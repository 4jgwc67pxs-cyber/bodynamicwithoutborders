# Plan: Site fra 5.5 → 8/10

Fokus: trust, ærlighed, og fjerne "AI-template-look". Vi rører ikke ved Stories (lige fixet) eller Donate-payment (separat spor).

## Fase 1 — Akutte fixes (launch-blockers)

1. **Fix hero-billede** — undersøg om `hero.jpg` loader korrekt; tilføj fallback bg-farve og `loading="eager"` så headlinen aldrig står på tom baggrund
2. **Skift al $ til €** i Donate-komponent + impact-linjer
3. **Fjern "Tax-deductible"** fra donate-card indtil juridisk verificeret
4. **Marker statistikker som verificerbare ELLER fjern dem** — jeg lister hver stat-tal i Stats-komponenten og vi beslutter pr. tal: behold med kilde / blød formulering ("trænet siden 2009") / fjern

## Fase 2 — Trust & credibility

5. **Footer-opgradering**:
   - Tilføj juridisk entity-linje ("Registered as [type] in [country], reg. no. XXXX")
   - Tilføj fysisk adresse + kontakt-email
   - Tilføj newsletter-signup (simpel email-form, gemt i Cloud database)
6. **Trust-bar under hero**: lille række med 3-5 partner/reference-logos eller tekst-credentials ("Working with: AFU Combat Stress Control · Equal to Equal Training · ..."). Hvis I ikke har logos: tekst-version
7. **"Where the money goes" mini-sektion** før Donate — 3 simple linjer (eks: "70% direct field work, 20% clinician training, 10% operations"). Charity:water's mest-besøgte indhold

## Fase 3 — Layout & visuel autoritet

8. **Hero full-bleed** — fjern rounded-3xl container + side-margins. Billedet går kant-til-kant, headlinen sidder i en venstre-justeret 7-kolonne grid. Mere alvor, mindre template
9. **Reducér navigation fra 6 → 4 items**: "Our Work" (samler Ukraine + What we do + Impact) / "Stories" / "About" / "Donate". Mobile menu får samme struktur
10. **Tilføj plain-mission-linje** under H1: én sætning der siger hvad I gør i klart sprog ("We train trauma therapists in war zones, so survivors get care where care isn't coming.")
11. **Tilpas to oransje-konflikten** i hero — flyt "FIELD-TESTED" badge til at være tekst-only eller skift til navy outline-stil, så Donate-knappen står alene som CTA

## Fase 4 — User flow

12. **Tilføj Volunteer + Partner stier** — ny lille sektion eller blok i Footer/About med 3 simple cards: "Donate / Volunteer / Partner med os", hver med kort beskrivelse + link
13. **Mobile pass-through** — gennemgå hver sektion på 375px viewport, fix tap-targets <44px, fix tekst-overflow, fix billed-aspect-ratios

## Fase 5 — Accessibility quick-wins

14. **Icon-only buttons** får `aria-label` (mobile menu, social icons, X-knapper)
15. **Heading-hierarki tjek** — én H1 pr. side, ingen sprung fra H1 til H3
16. **Reveal-animation fallback** — sikrer at indhold er læsbart selv hvis JS fejler / for skærmlæsere

## Hvad jeg har brug for fra dig under arbejdet

- **Stats**: er tallene rigtige? Hvis ikke, hvad er de faktiske tal eller hvordan formulerer vi dem ærligt?
- **Juridisk**: hvilket land er BWB registreret i, og har du reg.-nummer + adresse?
- **Partners**: hvem kan vi navngive som samarbejdspartnere uden tilladelses-problem?
- **Logo**: hvis I har et rigtigt logo, så send det — ellers beholder vi det nuværende navy-square

## Resultat
Site bevæger sig fra "kompetent template" → "troværdig NGO". Score-mål: hierarki 8, typografi 7, trust 8, accessibility 8, overall 8.

## Rækkefølge & tid
Fase 1 (30 min) → 2 (1-2 t med input fra dig) → 3 (2 t) → 4 (1 t) → 5 (30 min). Estimeret total: en arbejdsdag når jeg har input-svarene.

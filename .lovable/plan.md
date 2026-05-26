## Mål
Redesigne forsiden så den føles lige så professionel og intentional som charitywater.org — uden fake stats, uden $-tegn, uden tomme "template"-elementer.

## Designprincipper (lånt fra charity:water)
- **Fuld-bleed storytelling**: hver sektion fylder skærmen, ingen rounded-3xl kort om hero/billeder
- **Stor, condensed display-typografi** (Bebas Neue) + ren body (Barlow)
- **Én besked pr. sektion** — masser af luft, ingen overfyldte grids
- **Editorial split-layouts** — tekst på navy, foto fuld-bleed ved siden af
- **Faktiske beviser** i stedet for tal: citater, billeder, navne, årstal
- **Én primær CTA** pr. sektion (Donate), sekundær link diskret

## Struktur (ny rækkefølge)

```
1. HERO — fuld-bleed, ingen kort-ramme
   • Stort billede fra Ukraine-felt
   • Headline: "When crisis stays in the body, we go there."
   • Sub: én sætning der forklarer NGO'en konkret
   • CTA: Donate  ·  Læs vores arbejde

2. MISSION STRIP — én linje på cream baggrund
   "Bodynamic Without Borders bringer kropsorienteret traumebehandling
    til mennesker i krig, flugt og katastrofe — siden 2006."

3. THE PROBLEM — editorial split (navy venstre / foto højre)
   Kort om hvorfor traumer sætter sig i kroppen

4. OUR APPROACH — 3 trin, ren tekst-grid, ikoner kun hvis nødvendigt
   Assess → Stabilize → Train local capacity

5. UKRAINE — fuld-bleed fotografisk sektion
   Felt-historie, ikke statistik

6. STORIES — 2-3 portrætter med navn, sted, citat (link til /stories)

7. WHERE YOUR MONEY GOES — transparens-sektion
   Donut eller bar med faktiske kategorier (program / træning / admin)
   Ingen opfundne tal — placeholder med "data opdateres årligt"

8. DONATE — fuld bredde, navy baggrund
   • EUR i stedet for $
   • Fjern "Tax-deductible" indtil verificeret
   • Månedlig som default

9. PARTNERS / TRUST — logo-strip eller "vi arbejder med" liste
   Hvis ingen logos endnu → kort tekst om samarbejdspartnere

10. FOOTER — registreringsnummer, kontakt, socials
```

## Konkrete ændringer

**Navigation** (Header.tsx)
- Reducer til 4 punkter: Our work · Ukraine · Stories · About
- Donate-knap forbliver

**Hero** (Hero.tsx)
- Fjern `rounded-3xl` ramme på desktop — fuld-bleed som mobil
- Ny headline + sub
- Højde 90vh på desktop

**Stats** → erstattes af **Mission Strip** + **The Problem**
- Fjern alle opfundne tal indtil rigtige tal er verificeret

**Donate** (Donate.tsx)
- $ → €
- Fjern "Tax-deductible" fra disclaimer
- Beløb: 10 / 25 / 50 / 100 (mere realistisk NGO-ladder)
- Behold månedlig-default

**Ny sektion: WhereMoneyGoes.tsx**
- Simpelt visuelt breakdown med placeholder-procenter markeret som "estimat"

**Typografi & farver** (index.css, tailwind.config.ts)
- Tilføj Bebas Neue (display) + Barlow (body) via Google Fonts i index.html
- Behold Navy Trust palette
- Større display-størrelser, tightere line-height på H1/H2

**Sektioner der fjernes/forenkles**
- Method, Global, Team rykkes til /about-side senere (ikke nu)
- MidDonateBanner beholdes men gøres mindre "salgs-agtig"

## Teknisk
- Filer der ændres: `Header.tsx`, `Hero.tsx`, `Donate.tsx`, `Index.tsx`, `index.css`, `tailwind.config.ts`, `index.html`
- Nye filer: `MissionStrip.tsx`, `Problem.tsx`, `Approach.tsx`, `WhereMoneyGoes.tsx`, `Partners.tsx`
- Filer der midlertidigt fjernes fra Index: `Stats`, `Method`, `Global`, `Team` (slettes ikke — bare ikke importeres)
- Ingen backend-ændringer

## Hvad jeg IKKE rører
- /stories siden
- /privacy, /terms
- Footer-struktur (kun tekst-justeringer)

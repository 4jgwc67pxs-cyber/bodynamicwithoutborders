# Plan: Betalingssystem for donationer

## Hvad vi bygger
Rigtige kort-betalinger på din eksisterende donation-sektion — både engangsdonation og månedlig støtte, i EUR (€).

## Stak
- **Lovable Cloud** — backend (gratis at slå til, $25 fri månedlig saldo)
- **Stripe (built-in)** — ingen Stripe-konto nødvendig for at starte. Du kan teste med det samme; for at modtage rigtige penge skal du senere "claime" kontoen
- Stripe håndterer kvitteringer, sikkerhed og PCI-compliance

## Trin

1. **Slå Lovable Cloud til** — opretter backend automatisk
2. **Kør provider-tjek** (`recommend_payment_provider`) — bekræfter Stripe passer til NGO/donationer
3. **Aktiver Stripe payments** — opretter test-miljø straks
4. **Beslut skat-håndtering** — for en NGO der modtager donationer anbefaler jeg "ingen automatisk skat" (option 3), siden donationer typisk ikke er momspligtige. Du bekræfter inden vi går videre
5. **Opret 2 produkter i Stripe:**
   - "One-time donation" (engangsbeløb, EUR)
   - "Monthly donation" (recurring månedlig, EUR)
   Begge med variabelt beløb så donor selv vælger
6. **Opdater `Donate.tsx`:**
   - Skift $ til €
   - Knappen "Donate" kalder en edge function der opretter Stripe Checkout session
   - Donor sendes til Stripe's sikre betalingsside
7. **Lav 2 edge functions:**
   - `create-donation-checkout` — opretter Stripe session med valgt beløb/frekvens
   - `verify-donation` — verificerer betaling efter retur
8. **Lav success/cancel sider:**
   - `/donation-success` — "Tak for din støtte!"
   - `/donation-cancelled` — "Donation annulleret"

## Hvad du skal gøre bagefter
- **Test** med Stripe's test-kort (4242 4242 4242 4242)
- Når alt virker: **Claim Stripe-kontoen** (5 min, kræver bank-info) for at modtage rigtige penge
- Stripe gebyrer: ~1.4% + 1.80 kr per EU-kort transaktion

## Bemærk
Vi skifter valuta fra USD ($) til EUR (€) i hele donation-UI'en for konsistens.

## What I'll build

### Products (in test mode)
Four monthly subscription tiers in EUR — €10, €25, €50, €100 / month. One-time donations use dynamic pricing so any amount (including the custom field) works without pre-creating products.

### Auth
- Email + password sign-in/sign-up + Google sign-in
- Email confirmation required (Supabase default)
- No profile table — donor identity = `auth.users` row + Stripe customer

### Database
- `subscriptions` table (per Stripe webhooks knowledge) — tracks monthly donors
- `donations` table — logs every successful one-time donation (amount, email, created_at) so you can see them in the backend and show the amount on the thank-you page

### Pages
- `/auth` — sign in / sign up (email+password + Google)
- `/thank-you?session_id=…` — confirmation with the donation amount
- `/account` — logged-in donor view: shows their active monthly donation and a "Manage / cancel" button that opens the Stripe billing portal

### Checkout flow
- "Donate" button in the hero card opens **Stripe Embedded Checkout in a modal** (no redirect)
- One-time → dynamic price, anonymous OK
- Monthly → resolves to the matching tier subscription. If logged in → linked to user. If not logged in → prompts them to sign in first (so we can attach the subscription to an account they can manage)
- A small orange test-mode banner appears at the top while in preview

### Backend functions
- `create-checkout` — subscription sessions (monthly)
- `create-donation-checkout` — dynamic one-time
- `payments-webhook` — handles subscription lifecycle + records one-time donations
- `create-portal-session` — opens Stripe's hosted portal for the donor

### After-purchase business logic
- One-time: insert row in `donations`, thank-you page shows amount
- Subscription created: insert/upsert row in `subscriptions` (linked to user)
- Subscription canceled / payment failed / updated: status updated on the row, `/account` reflects it
- Upgrades/downgrades: not exposed in the UI right now (donors can cancel + re-subscribe at a different tier from `/account`). I can add tier-switching later if you want.

### What's not included (ask if you want)
- Thank-you emails (needs email provider)
- Newsletter auto-subscribe on donation
- Full receipt PDFs

Ready to build all of this?
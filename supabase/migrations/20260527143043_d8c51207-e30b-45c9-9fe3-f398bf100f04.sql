
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  stripe_subscription_id text not null unique,
  stripe_customer_id text not null,
  product_id text not null,
  price_id text not null,
  status text not null default 'active',
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end boolean default false,
  environment text not null default 'sandbox',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index idx_subscriptions_user_id on public.subscriptions(user_id);
create index idx_subscriptions_stripe_id on public.subscriptions(stripe_subscription_id);
grant select on public.subscriptions to authenticated;
grant all on public.subscriptions to service_role;
alter table public.subscriptions enable row level security;
create policy "Users view own subscription" on public.subscriptions for select to authenticated using (auth.uid() = user_id);
create policy "Service role manages subscriptions" on public.subscriptions for all using (auth.role() = 'service_role');

create table public.donations (
  id uuid primary key default gen_random_uuid(),
  stripe_session_id text not null unique,
  stripe_payment_intent_id text,
  user_id uuid references auth.users(id) on delete set null,
  email text,
  amount_cents integer not null,
  currency text not null default 'eur',
  environment text not null default 'sandbox',
  created_at timestamptz default now()
);
create index idx_donations_session on public.donations(stripe_session_id);
grant select on public.donations to authenticated;
grant all on public.donations to service_role;
alter table public.donations enable row level security;
create policy "Users view own donations" on public.donations for select to authenticated using (auth.uid() = user_id);
create policy "Service role manages donations" on public.donations for all using (auth.role() = 'service_role');

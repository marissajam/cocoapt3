# Colette's Apartment Picker

A Vite + React furniture voting app with shared saving through Supabase.

## Environment variables

Add these to Vercel Project Settings > Environment Variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Supabase table SQL

Run this in Supabase SQL Editor:

```sql
create table if not exists public.app_state (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz default now()
);

alter table public.app_state enable row level security;

drop policy if exists "Anyone can read app state" on public.app_state;
drop policy if exists "Anyone can insert app state" on public.app_state;
drop policy if exists "Anyone can update app state" on public.app_state;

create policy "Anyone can read app state"
on public.app_state
for select
using (true);

create policy "Anyone can insert app state"
on public.app_state
for insert
with check (true);

create policy "Anyone can update app state"
on public.app_state
for update
using (true)
with check (true);
```

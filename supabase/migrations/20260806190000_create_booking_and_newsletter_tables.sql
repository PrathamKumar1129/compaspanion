-- Application tables used by the Compasspanion backend.
-- The backend connects directly with the protected postgres role, so these
-- tables are not exposed as a public write API.

create table if not exists public.bookings (
  id text primary key,
  "timestamp" timestamptz not null default now(),
  destinations text not null,
  "startDate" date,
  "endDate" date,
  adults text not null,
  children text not null,
  budget text not null,
  "tripType" text not null,
  "specialReq" text not null default '',
  name text not null,
  email text not null,
  phone text not null,
  "contactTime" text not null default '',
  created_at timestamptz not null default now()
);

create index if not exists bookings_email_idx on public.bookings (email);
create index if not exists bookings_timestamp_idx on public.bookings ("timestamp" desc);

alter table public.bookings enable row level security;

create table if not exists public.newsletter (
  id text primary key,
  email text not null,
  created_at timestamptz not null default now()
);

create unique index if not exists newsletter_email_unique_idx
  on public.newsletter (lower(email));

alter table public.newsletter enable row level security;

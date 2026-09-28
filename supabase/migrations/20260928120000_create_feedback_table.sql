create table if not exists public.feedback (
  id text primary key,
  name text not null,
  trip text not null default '',
  rating integer not null check (rating between 1 and 5),
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists feedback_created_at_idx
  on public.feedback (created_at desc);

alter table public.feedback enable row level security;

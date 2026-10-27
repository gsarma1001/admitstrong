create extension if not exists "pgcrypto";

create table if not exists public.student_profiles (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text not null,
  grade_level text,
  school_zip text,
  school_state text,
  gpa text,
  sat_score text,
  act_score text,
  target_major text,
  school_type text,
  goals text,
  college_goals text,
  career_goals text,
  courses_taken text,
  clubs_participating text,
  extracurriculars text,
  interests text,
  current_activities text,
  volunteer_experience text,
  internships text,
  strengths text,
  financial_need text,
  profile_complete boolean default false,
  profile_data jsonb default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists student_profiles_email_idx on public.student_profiles (email);
create index if not exists student_profiles_updated_at_idx on public.student_profiles (updated_at desc);

create table if not exists public.student_trajectory_items (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.student_profiles(id) on delete cascade,
  title text not null,
  category text not null,
  description text,
  url text,
  status text not null default 'recommended',
  due_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists student_trajectory_items_profile_idx on public.student_trajectory_items (profile_id);

alter table public.student_profiles enable row level security;
alter table public.student_trajectory_items enable row level security;

create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists student_profiles_updated_at on public.student_profiles;
create trigger student_profiles_updated_at
before update on public.student_profiles
for each row
execute function public.handle_updated_at();

drop trigger if exists student_trajectory_items_updated_at on public.student_trajectory_items;
create trigger student_trajectory_items_updated_at
before update on public.student_trajectory_items
for each row
execute function public.handle_updated_at();

create policy "student_profiles_select_all" on public.student_profiles
for select
using (true);

create policy "student_profiles_insert_all" on public.student_profiles
for insert
with check (true);

create policy "student_profiles_update_all" on public.student_profiles
for update
using (true)
with check (true);

create policy "student_profiles_delete_all" on public.student_profiles
for delete
using (true);

create policy "student_trajectory_select_all" on public.student_trajectory_items
for select
using (true);

create policy "student_trajectory_insert_all" on public.student_trajectory_items
for insert
with check (true);

create policy "student_trajectory_update_all" on public.student_trajectory_items
for update
using (true)
with check (true);

create policy "student_trajectory_delete_all" on public.student_trajectory_items
for delete
using (true);

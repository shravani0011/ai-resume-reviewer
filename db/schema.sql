CREATE TABLE IF NOT EXISTS analyses (
  id BIGSERIAL PRIMARY KEY,
  resume TEXT NOT NULL,
  job_description TEXT NOT NULL,
  score INTEGER NOT NULL,
  summary TEXT NOT NULL,
  strengths TEXT[] NOT NULL DEFAULT '{}',
  missing_skills TEXT[] NOT NULL DEFAULT '{}',
  weaknesses TEXT[] NOT NULL DEFAULT '{}',
  suggestions TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

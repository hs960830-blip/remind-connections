-- Create signups table to store early access registrations
CREATE TABLE public.signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  occupation_category TEXT NOT NULL,
  detailed_occupation TEXT NOT NULL,
  expectations TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Enable RLS
ALTER TABLE public.signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup form)
CREATE POLICY "Anyone can insert signups"
ON public.signups
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can view signups (for admin purposes later)
CREATE POLICY "Only authenticated users can view signups"
ON public.signups
FOR SELECT
TO authenticated
USING (true);

-- Create index for faster email lookups
CREATE INDEX idx_signups_email ON public.signups(email);
CREATE INDEX idx_signups_created_at ON public.signups(created_at DESC);
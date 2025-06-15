
-- Create settings table to store site-wide configuration
CREATE TABLE public.settings (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key text NOT NULL UNIQUE,
  value jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS for the new table
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public read access to settings
CREATE POLICY "Allow public read access to settings"
  ON public.settings
  FOR SELECT
  USING (true);

-- Insert the current footer content into the settings table
INSERT INTO public.settings (key, value) VALUES
('footer', '{
  "brand_name": "SoloPreneur.dev",
  "brand_description": "Building profitable software products, one line of code at a time. Helping entrepreneurs turn ideas into successful SaaS applications.",
  "email": "hello@solopreneur.dev",
  "github_url": "https://github.com/lovable-inc",
  "linkedin_url": "https://linkedin.com/company/lovable-inc",
  "twitter_url": "https://twitter.com/lovable_inc",
  "creator_statement": "Made with",
  "creator_byline": "by an independent software entrepreneur",
  "copyright_holder": "SoloPreneur Portfolio"
}');


-- Add meeting_url to the footer settings
UPDATE public.settings
SET value = value || '{"meeting_url": "https://cal.com/your-username/30min"}'::jsonb
WHERE key = 'footer';

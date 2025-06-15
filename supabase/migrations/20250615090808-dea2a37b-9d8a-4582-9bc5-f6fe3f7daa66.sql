
-- Add phone number to the footer settings
UPDATE public.settings
SET value = value || '{"phone": "+1 (555) 123-4567"}'::jsonb
WHERE key = 'footer';

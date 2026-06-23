REVOKE SELECT ON public.newsletter_subscribers FROM anon, authenticated, PUBLIC;
GRANT SELECT ON public.newsletter_subscribers TO service_role;
CREATE POLICY "Only service role can read subscribers" ON public.newsletter_subscribers FOR SELECT TO service_role USING (true);
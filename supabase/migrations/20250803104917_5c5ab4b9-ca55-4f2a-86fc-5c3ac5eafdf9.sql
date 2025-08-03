-- Fix infinite recursion in RLS policies by creating security definer function
-- Drop existing problematic policies
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all websites" ON public.websites;
DROP POLICY IF EXISTS "Admins can view all activity" ON public.user_activity;

-- Create security definer function to get current user role
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT AS $$
BEGIN
  RETURN (
    SELECT role 
    FROM public.profiles 
    WHERE user_id = auth.uid()
    LIMIT 1
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = public;

-- Recreate admin policies using the security definer function
CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR ALL
USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can view all websites" 
ON public.websites 
FOR ALL
USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can view all activity" 
ON public.user_activity 
FOR ALL
USING (public.get_current_user_role() = 'admin');
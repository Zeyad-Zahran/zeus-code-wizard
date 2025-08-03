-- Create the admin user account
-- First insert the admin user data into profiles table
INSERT INTO public.profiles (user_id, email, display_name, role)
VALUES (
  gen_random_uuid(),
  'zeyadzahran56@gmail.com',
  'Admin User',
  'admin'
) ON CONFLICT (email) DO UPDATE SET role = 'admin';
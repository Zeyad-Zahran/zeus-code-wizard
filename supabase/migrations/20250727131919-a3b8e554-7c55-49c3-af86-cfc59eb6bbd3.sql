-- Fix security issues - add search_path to functions
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, display_name)
  VALUES (
    NEW.id, 
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER 
SET search_path = public;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql
SET search_path = public;

CREATE OR REPLACE FUNCTION public.check_daily_upload_limit(user_id_param UUID)
RETURNS INTEGER AS $$
DECLARE
  upload_count INTEGER;
  user_role TEXT;
BEGIN
  -- Get user role
  SELECT role INTO user_role
  FROM public.profiles
  WHERE user_id = user_id_param;
  
  -- Admins have unlimited uploads
  IF user_role = 'admin' THEN
    RETURN 999;
  END IF;
  
  -- Count uploads today for regular users
  SELECT COUNT(*)
  INTO upload_count
  FROM public.websites
  WHERE user_id = user_id_param
    AND created_at >= CURRENT_DATE;
  
  RETURN upload_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;
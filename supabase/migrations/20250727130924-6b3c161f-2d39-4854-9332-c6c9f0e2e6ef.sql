-- Create storage bucket for website files
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('websites', 'websites', true, 52428800, ARRAY['text/html', 'text/css', 'application/javascript', 'text/plain']);

-- Create policies for website uploads
CREATE POLICY "Anyone can view website files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'websites');

CREATE POLICY "Anyone can upload website files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'websites');

CREATE POLICY "Anyone can update their website files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'websites');

CREATE POLICY "Anyone can delete website files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'websites');
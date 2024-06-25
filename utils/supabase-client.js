import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vxfjstwydulnkpnvnkvw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4ZmpzdHd5ZHVsbmtwbnZua3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzNTE1MDIsImV4cCI6MjAzNDkyNzUwMn0.DBlOpFB5twU7C56YlP7ycJZhJmJ5XxI8MVSa7uAuj14'
const supabase = createClient(supabaseUrl, supabaseKey)

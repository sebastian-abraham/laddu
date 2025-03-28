import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ysvhreyknoeswbqgieek.supabase.co"; // Replace with your Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzdmhyZXlrbm9lc3dicWdpZWVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxMDQ3MjksImV4cCI6MjA1ODY4MDcyOX0.Wx-NvV4ZedkmuFhBj7qj8Fhcff91b5Y1SrafrjOyUTw"; // Replace with your Anon Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
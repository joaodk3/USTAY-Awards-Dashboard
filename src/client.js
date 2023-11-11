
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dzitqkckogryltzppdua.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6aXRxa2Nrb2dyeWx0enBwZHVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MzM1MjcsImV4cCI6MjAxNTIwOTUyN30.NYnIxHGpXP5M-dbQ5FppzdCKh35wVaYxaVqKFYOrmuQ'
export const supabase = createClient(supabaseUrl, supabaseKey);


-- FlashCheck Leads Table
-- Run this in your Supabase SQL Editor

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  source TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  converted_at TIMESTAMPTZ,
  status TEXT DEFAULT 'pending'
);

-- Add comment
COMMENT ON TABLE leads IS 'FlashCheck landing page email leads';

-- Create indexes for analytics queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_utm_source ON leads(utm_source);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous insert (for landing page visitors)
CREATE POLICY "Allow anonymous insert" ON leads
  FOR INSERT TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to read all leads
CREATE POLICY "Allow authenticated read" ON leads
  FOR SELECT TO authenticated
  USING (true);

-- Policy: Allow service role full access
CREATE POLICY "Allow service role full access" ON leads
  FOR ALL TO service_role
  USING (true)
  WITH CHECK (true);

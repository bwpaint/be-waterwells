/** Shared option list so every lead form offers the same services. */
export const SERVICE_OPTIONS = [
  'Waterwell Drilling — New',
  'Pump Replacement / Installation',
  'Well Rehabilitation',
  'Irrigation Waterwell',
  'Well Inspection',
  'Generator Prep Kit',
  'Emergency — No Water',
  'Other / Not Sure',
] as const;

export interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  service: string;
  comments: string;
  source: string;
}

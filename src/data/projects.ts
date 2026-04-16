export type ProjectLink =
  | { type: 'live'; url: string }
  | { type: 'github'; url: string; private?: boolean }
  | { type: 'none' };

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Web App' | 'AI Tool' | 'Automation' | 'CLI Tool';
  stack: string[];
  link: ProjectLink;
  featured?: boolean;
  status?: 'live' | 'in-progress' | 'planning';
}

export const projects: Project[] = [
  {
    id: 'return-tracker-pro',
    title: 'Return Tracker Pro',
    tagline: 'Gmail-connected return & refund dashboard',
    description:
      'Tracks online returns from initiation to refund. Connects to Gmail to auto-detect return-related emails in 6 languages (EN, DE, FR, IT, ES, NL), monitors carrier shipment status, and surfaces refund timelines in a real-time dashboard.',
    category: 'Web App',
    stack: ['React', 'TypeScript', 'Supabase', 'Claude API', 'Gmail API'],
    link: { type: 'live', url: 'https://refund-angel.lovable.app' },
    featured: true,
    status: 'live',
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust',
    tagline: 'AI-powered group trip planner',
    description:
      'Group travel planning where every member submits their airport, dates, budget, and interests. Claude synthesizes preferences across the whole group and returns ranked destination recommendations — with vibes, best travel months, and flight context.',
    category: 'Web App',
    stack: ['React', 'TypeScript', 'Supabase', 'Claude API'],
    link: { type: 'live', url: 'https://global-family-adventures.lovable.app/' },
    featured: true,
    status: 'live',
  },
  {
    id: 'flux-commentary',
    title: 'Flux Commentary Generator',
    tagline: 'AI drafts GL variance explanations from your data',
    description:
      'Upload a NetSuite or Excel export and the app calculates variances, applies configurable materiality thresholds, and runs a multi-step AI pipeline (Research → Draft → Validate → Refine) to produce audit-ready flux commentary — with confidence scoring and a feedback loop that learns your style over time.',
    category: 'AI Tool',
    stack: ['Python', 'Streamlit', 'OpenAI', 'Gemini', 'Vector Embeddings'],
    link: { type: 'github', url: 'https://github.com/pjcooley7-ship-it/flux-commentary-generator', private: true },
    featured: true,
    status: 'live',
  },
  {
    id: 'journal-entry-assistant',
    title: 'Journal Entry Assistant',
    tagline: 'AI-generated MJE documentation in Google Sheets',
    description:
      'A Google Sheets add-on that reads manual journal entry line items and generates polished, audit-ready documentation — grouped by subsidiary, account, and memo — from a plain-English explanation. Eliminates repetitive write-up work for finance teams.',
    category: 'Automation',
    stack: ['Google Apps Script', 'OpenAI API', 'Google Sheets'],
    link: { type: 'github', url: 'https://github.com/pjcooley7-ship-it/journal-entry-assistant', private: true },
    status: 'live',
  },
  {
    id: 'close-checklist-monitor',
    title: 'Close Checklist Monitor',
    tagline: 'Daily Slack alerts for overdue close tasks',
    description:
      'A standalone Google Apps Script that runs daily at 9am, navigates Drive to find the current month\'s close checklist, scans five accounting tabs for overdue incomplete tasks, and posts a formatted Block Kit summary to Slack — with user @mentions for the responsible owner.',
    category: 'Automation',
    stack: ['Google Apps Script', 'Slack API', 'Google Drive'],
    link: { type: 'github', url: 'https://github.com/pjcooley7-ship-it/close-checklist-monitor', private: true },
    status: 'live',
  },
  {
    id: 'claude-usage-tracker',
    title: 'Claude Usage Tracker',
    tagline: 'Terminal CLI for monitoring Claude Code context and token usage',
    description:
      'A local macOS CLI that reads Claude Code session files to display live context usage per session (with color-coded progress bars), daily token consumption, and historical breakdowns. Integrates as a Claude Code Stop hook to warn when sessions approach the context limit.',
    category: 'CLI Tool',
    stack: ['Python', 'macOS', 'Claude Code Hooks'],
    link: { type: 'github', url: 'https://github.com/pjcooley7-ship-it/claude-usage-tracker' },
    status: 'live',
  },
  {
    id: 'recipe-book',
    title: 'Recipe Book',
    tagline: 'Paste a URL, get a clean recipe — no blog filler',
    description:
      'A personal recipe app that strips food blogs down to just ingredients and instructions. Paste any URL; a Supabase edge function fetches and parses schema.org/Recipe JSON-LD. Includes inline US ↔ metric unit conversion and manual recipe entry.',
    category: 'Web App',
    stack: ['React', 'TypeScript', 'Supabase', 'Vite'],
    link: { type: 'github', url: 'https://github.com/pjcooley7-ship-it/recipe-book' },
    status: 'in-progress',
  },
];

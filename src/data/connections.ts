import { Connection } from "./types";

export const connections: Connection[] = [
  // Solo flow
  {
    from: "nodejs",
    to: "claude-code",
    label: "powers",
    mode: "both",
  },
  {
    from: "claude-code",
    to: "nextjs",
    label: "generates",
    mode: "both",
  },
  {
    from: "nextjs",
    to: "supabase",
    label: "reads/writes",
    mode: "both",
  },
  {
    from: "nextjs",
    to: "vercel",
    label: "deploys to",
    mode: "both",
  },
  {
    from: "claude-code",
    to: "github",
    label: "pushes to",
    mode: "both",
  },
  {
    from: "github",
    to: "vercel",
    label: "triggers deploy",
    mode: "both",
  },
  // Collaborative-only
  {
    from: "github",
    to: "github-org",
    label: "organized by",
    mode: "collaborative",
  },
  {
    from: "vercel",
    to: "vercel-team",
    label: "managed by",
    mode: "collaborative",
  },
  {
    from: "supabase",
    to: "supabase-org",
    label: "shared via",
    mode: "collaborative",
  },
  {
    from: "claude-code",
    to: "claude-md",
    label: "configured by",
    mode: "collaborative",
  },
];

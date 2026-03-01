import { GuideNode } from "./types";

export const nodes: GuideNode[] = [
  // ─── Solo nodes ───────────────────────────────────────────
  {
    id: "nodejs",
    label: "Node.js",
    icon: "\u{1F7E2}",
    color: "bg-green-500",
    mode: "both",
    position: { x: 10, y: 30 },
    summary: "JavaScript runtime — the engine that runs everything",
    detail: {
      what: "Node.js lets you run JavaScript outside the browser. It's the foundation that powers your development tools, your server, and Claude Code itself.",
      why: "Without Node.js, none of the other tools work. It's the first thing you install.",
      analogy: "Think of Node.js as the electricity in your workshop. The tools are useless without power.",
      steps: [
        {
          id: "node-1",
          instruction: "Check if Node.js is already installed",
          command: "node --version",
        },
        {
          id: "node-2",
          instruction: "If not installed, download from nodejs.org or use nvm",
          command: "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash && nvm install --lts",
        },
        {
          id: "node-3",
          instruction: "Verify npm (Node's package manager) is available",
          command: "npm --version",
        },
      ],
    },
  },
  {
    id: "claude-code",
    label: "Claude Code",
    icon: "\u{1F916}",
    color: "bg-orange-500",
    mode: "both",
    position: { x: 30, y: 15 },
    summary: "AI coding assistant that builds your app with you",
    detail: {
      what: "Claude Code is Anthropic's CLI tool that lets you pair-program with Claude directly in your terminal. You describe what you want, and it writes the code.",
      why: "It's your co-builder. Instead of writing every line yourself, you describe what you want and Claude Code generates, edits, and debugs the code for you.",
      analogy: "Claude Code is like having an experienced developer sitting next to you, ready to write code whenever you describe what you need.",
      steps: [
        {
          id: "claude-1",
          instruction: "Install Claude Code globally",
          command: "npm install -g @anthropic-ai/claude-code",
        },
        {
          id: "claude-2",
          instruction: "Navigate to your project and start Claude Code",
          command: "cd your-project && claude",
        },
        {
          id: "claude-3",
          instruction: "Try a simple prompt to verify it works",
          command: 'claude "create a hello world page"',
        },
      ],
    },
  },
  {
    id: "github",
    label: "GitHub",
    icon: "\u{1F4E6}",
    color: "bg-gray-700",
    mode: "both",
    position: { x: 55, y: 15 },
    summary: "Where your code lives in the cloud",
    detail: {
      what: "GitHub is a cloud platform that stores your code in a Git repository. It keeps a history of every change and lets you collaborate with others.",
      why: "GitHub is your code's home base. It backs up your work, tracks changes, and connects to Vercel for automatic deployments.",
      analogy: "GitHub is like Google Drive for code — it stores everything in the cloud, keeps version history, and lets you share with others.",
      steps: [
        {
          id: "github-1",
          instruction: "Create a GitHub account at github.com (if you don't have one)",
        },
        {
          id: "github-2",
          instruction: "Install the GitHub CLI",
          command: "brew install gh && gh auth login",
        },
        {
          id: "github-3",
          instruction: "Initialize a repo and push your code",
          command: "git init && git add -A && git commit -m 'initial commit' && gh repo create my-app --public --push",
        },
      ],
    },
  },
  {
    id: "nextjs",
    label: "Next.js",
    icon: "\u{25B2}",
    color: "bg-black",
    mode: "both",
    position: { x: 35, y: 55 },
    summary: "The React framework that structures your web app",
    detail: {
      what: "Next.js is a React framework that gives you routing, server-side rendering, and a great developer experience out of the box. It's what your app is actually built with.",
      why: "Next.js handles the hard parts of building a web app — routing, performance, deployment. You focus on your features.",
      analogy: "If your app is a house, Next.js is the framing and foundation. It gives you rooms (pages), hallways (routes), and a solid structure.",
      steps: [
        {
          id: "nextjs-1",
          instruction: "Create a new Next.js project",
          command: "npx create-next-app@latest my-app --typescript --tailwind --app",
        },
        {
          id: "nextjs-2",
          instruction: "Start the development server",
          command: "cd my-app && npm run dev",
        },
        {
          id: "nextjs-3",
          instruction: "Open http://localhost:3000 in your browser to see it running",
        },
      ],
    },
  },
  {
    id: "supabase",
    label: "Supabase",
    icon: "\u{26A1}",
    color: "bg-emerald-600",
    mode: "both",
    position: { x: 60, y: 55 },
    summary: "Your database and real-time backend",
    detail: {
      what: "Supabase is an open-source backend that gives you a PostgreSQL database, authentication, and real-time subscriptions with almost no setup.",
      why: "Every app needs to store data. Supabase gives you a full database with a simple API, so you can read and write data from your Next.js app.",
      analogy: "Supabase is like a filing cabinet that's also a live whiteboard — it stores your data and instantly shows updates to everyone watching.",
      steps: [
        {
          id: "supa-1",
          instruction: "Create a free account at supabase.com and create a new project",
        },
        {
          id: "supa-2",
          instruction: "Install the Supabase client library",
          command: "npm install @supabase/supabase-js",
        },
        {
          id: "supa-3",
          instruction: "Add your Supabase URL and anon key to .env.local",
          command: "echo 'NEXT_PUBLIC_SUPABASE_URL=your-url\\nNEXT_PUBLIC_SUPABASE_ANON_KEY=your-key' > .env.local",
        },
        {
          id: "supa-4",
          instruction: "Create a Supabase client helper file in your project",
          command: "mkdir -p src/lib && cat src/lib/supabase.ts",
        },
      ],
    },
  },
  {
    id: "vercel",
    label: "Vercel",
    icon: "\u{1F680}",
    color: "bg-blue-600",
    mode: "both",
    position: { x: 80, y: 35 },
    summary: "Deploys your app to the internet",
    detail: {
      what: "Vercel is a hosting platform built by the creators of Next.js. It takes your code and puts it on the internet with a real URL.",
      why: "Building locally is great, but you want people to actually use your app. Vercel makes deployment as simple as pushing to GitHub.",
      analogy: "Vercel is like a publishing house for your app — you hand over the manuscript (code), and they print and distribute it (host and serve it) worldwide.",
      steps: [
        {
          id: "vercel-1",
          instruction: "Install the Vercel CLI",
          command: "npm install -g vercel",
        },
        {
          id: "vercel-2",
          instruction: "Link your project and deploy",
          command: "vercel --prod",
        },
        {
          id: "vercel-3",
          instruction: "Or connect your GitHub repo at vercel.com for auto-deploy on every push",
        },
      ],
    },
  },

  // ─── Collaborative-only nodes ─────────────────────────────
  {
    id: "github-org",
    label: "GitHub Org",
    icon: "\u{1F465}",
    color: "bg-purple-600",
    mode: "collaborative",
    position: { x: 55, y: -5 },
    summary: "Organize repos and teams under one org",
    detail: {
      what: "A GitHub Organization groups your repositories and team members together. Everyone gets access to shared repos without sharing personal accounts.",
      why: "When multiple people collaborate, you need a shared space. An org keeps repos organized and lets you control who can access what.",
      analogy: "A GitHub Org is like a shared office building — everyone has their own desk (account) but works in the same space (org) with shared resources.",
      steps: [
        {
          id: "ghorg-1",
          instruction: "Create a new organization at github.com/organizations/plan",
        },
        {
          id: "ghorg-2",
          instruction: "Invite team members to the organization",
        },
        {
          id: "ghorg-3",
          instruction: "Move or create repos under the org",
          command: "gh repo create my-org/my-app --public",
        },
      ],
    },
  },
  {
    id: "vercel-team",
    label: "Vercel Team",
    icon: "\u{1F310}",
    color: "bg-indigo-600",
    mode: "collaborative",
    position: { x: 85, y: 55 },
    summary: "Shared deployment environment for your team",
    detail: {
      what: "A Vercel Team lets multiple people manage deployments, environment variables, and domains together.",
      why: "When working as a team, everyone needs to see deployments, check logs, and manage settings. A Vercel Team gives shared access.",
      analogy: "Like having a shared TV remote — everyone on the team can control the deployment channel.",
      steps: [
        {
          id: "vteam-1",
          instruction: "Create a team at vercel.com/new/team",
        },
        {
          id: "vteam-2",
          instruction: "Invite team members and assign roles",
        },
        {
          id: "vteam-3",
          instruction: "Move your project to the team scope",
          command: "vercel link --scope your-team-name",
        },
      ],
    },
  },
  {
    id: "supabase-org",
    label: "Supabase Org",
    icon: "\u{1F3E2}",
    color: "bg-teal-600",
    mode: "collaborative",
    position: { x: 65, y: 75 },
    summary: "Share database access across your team",
    detail: {
      what: "A Supabase Organization lets your team share database projects, billing, and access controls.",
      why: "In a team setting, multiple developers need database access. An org centralizes this so nobody is locked out of the project.",
      analogy: "Like a shared kitchen — everyone has access to the same ingredients (data) and recipes (schemas).",
      steps: [
        {
          id: "sorg-1",
          instruction: "Go to your Supabase dashboard and create an organization",
        },
        {
          id: "sorg-2",
          instruction: "Invite team members to the organization",
        },
        {
          id: "sorg-3",
          instruction: "Move your project under the organization",
        },
      ],
    },
  },
  {
    id: "claude-md",
    label: "CLAUDE.md",
    icon: "\u{1F4DD}",
    color: "bg-amber-600",
    mode: "collaborative",
    position: { x: 15, y: -5 },
    summary: "Project instructions that Claude Code reads automatically",
    detail: {
      what: "CLAUDE.md is a special markdown file in your repo root that Claude Code reads every time it starts. It contains project conventions, architecture notes, and instructions.",
      why: "When multiple people use Claude Code on the same project, CLAUDE.md ensures everyone gets consistent behavior. It's your project's instruction manual for the AI.",
      analogy: "CLAUDE.md is like a style guide pinned to the workshop wall — anyone who walks in (human or AI) knows the house rules.",
      steps: [
        {
          id: "cmd-1",
          instruction: "Create a CLAUDE.md file in your project root",
          command: "touch CLAUDE.md",
        },
        {
          id: "cmd-2",
          instruction: "Add project conventions (tech stack, coding standards, common commands)",
        },
        {
          id: "cmd-3",
          instruction: "Commit it to your repo so everyone gets it",
          command: "git add CLAUDE.md && git commit -m 'add CLAUDE.md project instructions'",
        },
      ],
    },
  },
];

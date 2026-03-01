export type Mode = "solo" | "collaborative";

export interface SetupStep {
  id: string;
  instruction: string;
  command?: string; // shell command to copy-paste (optional — some steps are manual)
}

export interface GuideNode {
  id: string;
  label: string;
  icon: string; // emoji
  color: string; // tailwind bg color class
  mode: Mode | "both"; // which mode this node appears in
  position: { x: number; y: number }; // percentage-based positioning (0-100)
  summary: string; // one-liner shown on hover / card
  detail: {
    what: string;
    why: string;
    analogy: string;
    steps: SetupStep[];
  };
}

export interface Connection {
  from: string; // node id
  to: string; // node id
  label?: string;
  mode: Mode | "both";
}

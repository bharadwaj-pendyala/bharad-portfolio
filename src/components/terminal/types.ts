export type TerminalCommandEntry = {
  input: string;
  output: string;
  timestamp: Date;
};

export type TerminalCommandSideEffects = {
  onClear?: () => void;
  onNavigate?: (path: string) => void;
};

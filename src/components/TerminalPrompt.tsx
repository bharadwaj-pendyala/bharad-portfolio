type TerminalPromptProps = {
  prompt?: string;
  children: React.ReactNode;
  className?: string;
};

export default function TerminalPrompt({
  prompt = '> $ ',
  children,
  className = '',
}: TerminalPromptProps): JSX.Element {
  return (
    <div className={`font-mono text-sm ${className}`}>
      <span className="text-primary">{prompt}</span>
      <span className="text-foreground">{children}</span>
    </div>
  );
}

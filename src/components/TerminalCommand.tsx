type TerminalCommandProps = {
  command: string;
  output?: string;
  showCursor?: boolean;
  className?: string;
};

export default function TerminalCommand({
  command,
  output,
  showCursor = false,
  className = '',
}: TerminalCommandProps): JSX.Element {
  return (
    <div className={`font-mono text-sm ${className}`}>
      {/* Command line */}
      <div className="flex items-center">
        <span className="mr-2 text-accent">$</span>
        <span className="text-foreground">{command}</span>
        {showCursor && (
          <span className="ml-1 animate-pulse bg-accent text-background">
            ▊
          </span>
        )}
      </div>

      {/* Output */}
      {output && (
        <div className="mt-1 whitespace-pre-wrap text-secondary">{output}</div>
      )}
    </div>
  );
}

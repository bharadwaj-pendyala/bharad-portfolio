type TerminalOutputProps = {
  children: React.ReactNode;
  type?: 'success' | 'error' | 'info' | 'default';
  className?: string;
};

export default function TerminalOutput({
  children,
  type = 'default',
  className = '',
}: TerminalOutputProps): JSX.Element {
  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'text-green-500';
      case 'error':
        return 'text-red-500';
      case 'info':
        return 'text-accent';
      default:
        return 'text-secondary';
    }
  };

  return (
    <div className={`font-mono text-sm ${getTypeStyles()} ${className}`}>
      {children}
    </div>
  );
}

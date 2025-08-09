'use client';

import { useState, useEffect } from 'react';
import TerminalCursor from './TerminalCursor';

type TerminalLoadingProps = {
  text?: string;
  duration?: number;
  className?: string;
};

export default function TerminalLoading({
  text = 'Loading',
  duration = 3000,
  className = '',
}: TerminalLoadingProps): JSX.Element {
  const [dots, setDots] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (completed) return;

    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 500);

    const timeout = setTimeout(() => {
      setCompleted(true);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration, completed]);

  return (
    <div
      className={`flex items-center space-x-2 font-mono text-sm ${className}`}
    >
      <span className="text-accent">$</span>
      <span className="text-foreground">{text}</span>
      {!completed && <span className="text-secondary">{dots}</span>}
      {completed && <span className="text-green-500">✓ Complete</span>}
      <TerminalCursor />
    </div>
  );
}

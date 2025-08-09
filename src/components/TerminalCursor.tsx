'use client';

import { useState, useEffect } from 'react';

type TerminalCursorProps = {
  blinkSpeed?: number;
  className?: string;
};

export default function TerminalCursor({
  blinkSpeed = 1000,
  className = '',
}: TerminalCursorProps): JSX.Element {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, blinkSpeed);

    return () => clearInterval(interval);
  }, [blinkSpeed]);

  return (
    <span
      className={`inline-block bg-accent font-mono text-background ${
        visible ? 'opacity-100' : 'opacity-0'
      } transition-opacity ${className}`}
    >
      ▊
    </span>
  );
}

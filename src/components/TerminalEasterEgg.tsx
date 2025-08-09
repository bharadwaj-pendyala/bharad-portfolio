'use client';

import { useState, useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

const TERMINAL_COMMANDS = [
  'sudo make coffee',
  'echo "Hello, fellow developer!"',
  'ls -la /dev/null',
  'cat /dev/random | head -c 50',
  'whoami # definitely not a robot',
  'curl -s https://api.github.com/zen',
];

export default function TerminalEasterEgg(): JSX.Element | null {
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [currentCommand, setCurrentCommand] = useState(0);

  // Debug mode for development
  const isSequenceProgress = keySequence.length > 0;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (showEasterEgg) return;

      setKeySequence((prev) => {
        const newSequence = [...prev, event.code].slice(-KONAMI_CODE.length);

        if (
          newSequence.length === KONAMI_CODE.length &&
          newSequence.every((key, index) => key === KONAMI_CODE[index])
        ) {
          setShowEasterEgg(true);
          return [];
        }

        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showEasterEgg]);

  useEffect(() => {
    if (!showEasterEgg) return;

    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % TERMINAL_COMMANDS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [showEasterEgg]);

  if (!showEasterEgg) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="card border-card-border bg-card-bg shadow-lg">
        <div className="mb-2 border-b border-card-border pb-2">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="ml-2 font-mono text-xs text-muted">
              easter-egg.sh
            </span>
          </div>
        </div>

        <div className="space-y-1 font-mono text-xs">
          <div className="text-accent">
            $ {TERMINAL_COMMANDS[currentCommand]}
          </div>
          <div className="text-secondary">{`// Konami code activated! 🎮`}</div>
          {isSequenceProgress && (
            <div className="text-xs text-muted">
              Sequence: {keySequence.length}/{KONAMI_CODE.length}
            </div>
          )}
          <button
            onClick={() => setShowEasterEgg(false)}
            className="mt-2 text-xs text-muted transition-colors hover:text-accent"
          >
            [close]
          </button>
        </div>
      </div>
    </div>
  );
}

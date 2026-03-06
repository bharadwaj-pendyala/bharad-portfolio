'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import TerminalCursor from './TerminalCursor';
import { executeTerminalCommand } from './terminal/commandExecutor';
import { TerminalCommandEntry } from './terminal/types';

type InteractiveTerminalProps = {
  className?: string;
  welcomeMessage?: string;
};

export default function InteractiveTerminal({
  className = '',
  welcomeMessage = 'Welcome to Bharad\'s Interactive Terminal! Type "help" for available commands.',
}: InteractiveTerminalProps): JSX.Element {
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<TerminalCommandEntry[]>(
    []
  );
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Scroll to bottom when new commands are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const runCommand = useCallback(
    (input: string) =>
      executeTerminalCommand(input, {
        onClear: () => {
          setCommandHistory([]);
        },
        onNavigate: (path) => {
          window.location.href = path;
        },
      }),
    [setCommandHistory]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTyping(true);

    const newCommand: TerminalCommandEntry = {
      input: currentInput,
      output: runCommand(currentInput),
      timestamp: new Date(),
    };

    // Add delay for typing effect
    setTimeout(() => {
      setCommandHistory((prev) => [...prev, newCommand]);
      setCurrentInput('');
      setHistoryIndex(-1);
      setIsTyping(false);
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      if (
        newIndex >= 0 &&
        commandHistory[commandHistory.length - 1 - newIndex]
      ) {
        setHistoryIndex(newIndex);
        setCurrentInput(
          commandHistory[commandHistory.length - 1 - newIndex].input
        );
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      if (newIndex === -1) {
        setCurrentInput('');
      } else {
        setCurrentInput(
          commandHistory[commandHistory.length - 1 - newIndex].input
        );
      }
    }
  };

  return (
    <div
      data-interactive-terminal
      className={`terminal-text rounded-md border border-card-border bg-card-bg ${className}`}
    >
      {/* Terminal header */}
      <div className="mb-4 border-b border-card-border pb-3">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-4 font-mono text-xs text-muted">
            bharad@portfolio:~/interactive
          </span>
        </div>
      </div>

      {/* Terminal content */}
      <div ref={terminalRef} className="max-h-96 space-y-2 overflow-y-auto p-4">
        {/* Welcome message */}
        {commandHistory.length === 0 && (
          <div className="mb-4 text-sm text-secondary">{welcomeMessage}</div>
        )}

        {/* Command history */}
        {commandHistory.map((cmd, index) => (
          <div key={index} className="space-y-1">
            {/* Input line */}
            <div className="flex items-center font-mono text-sm">
              <span className="mr-2 text-accent">$</span>
              <span className="text-foreground">{cmd.input}</span>
            </div>
            {/* Output */}
            {cmd.output && (
              <div className="whitespace-pre-wrap pl-4 font-mono text-sm text-secondary">
                {cmd.output}
              </div>
            )}
          </div>
        ))}

        {/* Current input line */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center font-mono text-sm"
        >
          <span className="mr-2 text-accent">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-foreground outline-none"
            placeholder="Type a command..."
            autoComplete="off"
            disabled={isTyping}
          />
          {isTyping && <TerminalCursor />}
        </form>

        {/* Focus hint */}
        <div className="text-muted/70 pt-2 text-xs">
          💡 Click here to focus • Use ↑↓ arrows for command history
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import TerminalCursor from './TerminalCursor';

type Command = {
  input: string;
  output: string;
  timestamp: Date;
};

type InteractiveTerminalProps = {
  className?: string;
  welcomeMessage?: string;
};

export default function InteractiveTerminal({
  className = '',
  welcomeMessage = 'Welcome to Bharad\'s Interactive Terminal! Type "help" for available commands.',
}: InteractiveTerminalProps): JSX.Element {
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Scroll to bottom when new commands are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  // Command execution logic
  const executeCommand = (cmd: string): string => {
    const command = cmd.trim().toLowerCase();

    switch (command) {
      case '':
        return '';

      case 'help':
        return `Available commands:
  help          - Show this help message
  ls            - List files and directories
  pwd           - Show current directory
  whoami        - Display user information
  cat about     - Display about information
  cat skills    - Show technical skills
  cat projects  - List recent projects
  cat contact   - Show contact information
  date          - Display current date and time
  clear         - Clear terminal history
  cd <dir>      - Navigate to directory (about, projects, blog, cv)
  echo <text>   - Echo text back
  fortune       - Display random quote
  cowsay <text> - ASCII cow says your text
  matrix        - Display matrix effect (just kidding!)`;

      case 'ls':
        return `total 6
drwxr-xr-x  2 bharad  bharad   192 Aug  9 18:30 .
drwxr-xr-x  3 root    root     96  Aug  9 18:30 ..
-rw-r--r--  1 bharad  bharad  1.2K Aug  9 18:30 About.md
-rw-r--r--  1 bharad  bharad  856B Aug  9 18:30 CV.pdf
drwxr-xr-x  5 bharad  bharad  160B Aug  9 18:30 Projects/
drwxr-xr-x  8 bharad  bharad  256B Aug  9 18:30 Posts/
-rw-r--r--  1 bharad  bharad  420B Aug  9 18:30 Contact.info
-rw-r--r--  1 bharad  bharad  680B Aug  9 18:30 Skills.json`;

      case 'pwd':
        return '/home/bharad/portfolio';

      case 'whoami':
        return 'Bharadwaj Pendyala - Software Engineer | Full Stack Developer | Problem Solver';

      case 'cat about':
        return `Passionate about creating elegant solutions to complex problems.
I build scalable web applications, enjoy exploring new technologies,
and love contributing to open source projects.

Experience: 5+ years in full-stack development
Specialties: React, Next.js, TypeScript, Node.js, Python
Interests: DevOps, AI/ML, System Architecture, Open Source`;

      case 'cat skills':
        return `{
  "frontend": ["JavaScript/TypeScript", "React/Next.js", "Tailwind CSS", "HTML5/CSS3"],
  "backend": ["Node.js/Express", "Python/Django", "PostgreSQL/MongoDB", "REST APIs/GraphQL"],
  "tools": ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest", "Cypress"],
  "currently_learning": ["Rust", "WebAssembly", "Kubernetes", "Machine Learning"]
}`;

      case 'cat projects':
        return `Recent Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• terminal-portfolio    - This very website! Terminal-inspired portfolio
• task-manager-pro      - Full-stack task management with real-time collaboration
• analytics-dashboard   - Data visualization platform with interactive charts
• api-gateway-service   - Microservices gateway with rate limiting and auth
• ml-recommendation     - Machine learning recommendation engine`;

      case 'cat contact':
        return `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email:    bharadwajpendyala@gmail.com
💼 LinkedIn: https://linkedin.com/in/bharadwaj-pendyala
🐙 GitHub:   https://github.com/bharadwaj-pendyala
🌐 Website:  https://bharadwaj-pendyala.github.io
📍 Location: Available for remote opportunities worldwide`;

      case 'date':
        return new Date().toString();

      case 'clear':
        setCommandHistory([]);
        return '';

      case 'fortune':
        const quotes = [
          '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
          '"First, solve the problem. Then, write the code." - John Johnson',
          '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
          '"The best way to get a project done faster is to start sooner." - Jim Highsmith',
          '"Simplicity is the ultimate sophistication." - Leonardo da Vinci',
          '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];

      case 'matrix':
        return `Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

Just kidding! This is just a portfolio website 😄`;

      default:
        // Handle echo command
        if (command.startsWith('echo ')) {
          return cmd.substring(5);
        }

        // Handle cd command
        if (command.startsWith('cd ')) {
          const dir = cmd.substring(3).trim();
          switch (dir) {
            case 'about':
              window.location.href = '/about';
              return `Navigating to /about...`;
            case 'projects':
              window.location.href = '/projects';
              return `Navigating to /projects...`;
            case 'blog':
              window.location.href = '/blog';
              return `Navigating to /blog...`;
            case 'cv':
              window.location.href = '/cv';
              return `Navigating to /cv...`;
            case '..':
              window.location.href = '/';
              return `Navigating to home directory...`;
            default:
              return `cd: ${dir}: No such file or directory`;
          }
        }

        // Handle cowsay command
        if (command.startsWith('cowsay ')) {
          const text = cmd.substring(7);
          return `
 ${'_'.repeat(text.length + 2)}
< ${text} >
 ${'-'.repeat(text.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
        }

        return `Command not found: ${cmd}. Type "help" for available commands.`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTyping(true);

    const newCommand: Command = {
      input: currentInput,
      output: executeCommand(currentInput),
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

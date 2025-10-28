import { TerminalCommandSideEffects } from './types';

const HELP_TEXT = `Available commands:
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

const DIRECTORY_MAP: Record<string, string> = {
  about: '/about',
  projects: '/projects',
  blog: '/blog',
  cv: '/cv',
  '..': '/',
};

const FORTUNE_QUOTES = [
  '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
  '"First, solve the problem. Then, write the code." - John Johnson',
  '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
  '"The best way to get a project done faster is to start sooner." - Jim Highsmith',
  '"Simplicity is the ultimate sophistication." - Leonardo da Vinci',
  '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
];

const LS_OUTPUT = `total 6
drwxr-xr-x  2 bharad  bharad   192 Aug  9 18:30 .
drwxr-xr-x  3 root    root     96  Aug  9 18:30 ..
-rw-r--r--  1 bharad  bharad  1.2K Aug  9 18:30 About.md
-rw-r--r--  1 bharad  bharad  856B Aug  9 18:30 CV.pdf
drwxr-xr-x  5 bharad  bharad  160B Aug  9 18:30 Projects/
drwxr-xr-x  8 bharad  bharad  256B Aug  9 18:30 Posts/
-rw-r--r--  1 bharad  bharad  420B Aug  9 18:30 Contact.info
-rw-r--r--  1 bharad  bharad  680B Aug  9 18:30 Skills.json`;

const ABOUT_TEXT = `Passionate about creating elegant solutions to complex problems.
I build scalable web applications, enjoy exploring new technologies,
and love contributing to open source projects.

Experience: 5+ years in full-stack development
Specialties: React, Next.js, TypeScript, Node.js, Python
Interests: DevOps, AI/ML, System Architecture, Open Source`;

const SKILLS_JSON = `{
  "frontend": ["JavaScript/TypeScript", "React/Next.js", "Tailwind CSS", "HTML5/CSS3"],
  "backend": ["Node.js/Express", "Python/Django", "PostgreSQL/MongoDB", "REST APIs/GraphQL"],
  "tools": ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest", "Cypress"],
  "currently_learning": ["Rust", "WebAssembly", "Kubernetes", "Machine Learning"]
}`;

const PROJECTS_TEXT = `Recent Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• terminal-portfolio    - This very website! Terminal-inspired portfolio
• task-manager-pro      - Full-stack task management with real-time collaboration
• analytics-dashboard   - Data visualization platform with interactive charts
• api-gateway-service   - Microservices gateway with rate limiting and auth
• ml-recommendation     - Machine learning recommendation engine`;

const CONTACT_TEXT = `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email:    bharadwajpendyala@gmail.com
💼 LinkedIn: https://linkedin.com/in/bharadwaj-pendyala
🐙 GitHub:   https://github.com/bharadwaj-pendyala
🌐 Website:  https://bharadwaj-pendyala.github.io
📍 Location: Available for remote opportunities worldwide`;

const WHOAMI_TEXT =
  'Bharadwaj Pendyala - Software Engineer | Full Stack Developer | Problem Solver';

const PWD_TEXT = '/home/bharad/portfolio';

const MATRIX_TEXT = `Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

Just kidding! This is just a portfolio website 😄`;

const COW_TEMPLATE = (text: string) => ` ${'_'.repeat(text.length + 2)}
< ${text} >
 ${'-'.repeat(text.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;

const getRandomFortune = () =>
  FORTUNE_QUOTES[Math.floor(Math.random() * FORTUNE_QUOTES.length)];

const handleChangeDirectory = (
  target: string,
  { onNavigate }: TerminalCommandSideEffects
): string => {
  const normalizedTarget = target.toLowerCase();
  const destination = DIRECTORY_MAP[normalizedTarget];

  if (destination) {
    onNavigate?.(destination);
    return normalizedTarget === '..'
      ? 'Navigating to home directory...'
      : `Navigating to ${destination}...`;
  }

  return `cd: ${target}: No such file or directory`;
};

export const executeTerminalCommand = (
  rawInput: string,
  sideEffects: TerminalCommandSideEffects = {}
): string => {
  const trimmedInput = rawInput.trim();
  const normalizedCommand = trimmedInput.toLowerCase();

  if (!normalizedCommand) {
    return '';
  }

  switch (normalizedCommand) {
    case 'help':
      return HELP_TEXT;
    case 'ls':
      return LS_OUTPUT;
    case 'pwd':
      return PWD_TEXT;
    case 'whoami':
      return WHOAMI_TEXT;
    case 'cat about':
      return ABOUT_TEXT;
    case 'cat skills':
      return SKILLS_JSON;
    case 'cat projects':
      return PROJECTS_TEXT;
    case 'cat contact':
      return CONTACT_TEXT;
    case 'date':
      return new Date().toString();
    case 'clear':
      sideEffects.onClear?.();
      return '';
    case 'fortune':
      return getRandomFortune();
    case 'matrix':
      return MATRIX_TEXT;
    default:
      if (normalizedCommand.startsWith('echo ')) {
        return trimmedInput.slice(5);
      }

      if (normalizedCommand.startsWith('cd ')) {
        const target = trimmedInput.slice(3).trim();
        if (!target) {
          return 'cd: missing operand';
        }
        return handleChangeDirectory(target, sideEffects);
      }

      if (normalizedCommand.startsWith('cowsay ')) {
        const text = trimmedInput.slice(7).trim();
        if (!text) {
          return 'cowsay: what should the cow say?';
        }
        return COW_TEMPLATE(text);
      }

      return `Command not found: ${rawInput}. Type "help" for available commands.`;
  }
};

import TerminalCommand from './TerminalCommand';
import TerminalCursor from './TerminalCursor';

type TerminalSessionProps = {
  className?: string;
};

export default function TerminalSession({
  className = '',
}: TerminalSessionProps): JSX.Element {
  return (
    <div
      className={`terminal-text rounded-md border border-card-border bg-card-bg p-4 ${className}`}
    >
      {/* Initial directory navigation */}
      <TerminalCommand command="cd /home/bharad/" />

      <div className="mt-4">
        <TerminalCommand
          command="whoami"
          output="Bharad - Software Engineer // Full Stack Developer // Problem Solver"
        />
      </div>

      <div className="mt-4">
        <TerminalCommand
          command="ls -la"
          output={`total 6
drwxr-xr-x  2 bharad  bharad   192 Aug  9 18:30 .
drwxr-xr-x  3 root    root     96  Aug  9 18:30 ..
-rw-r--r--  1 bharad  bharad  1.2K Aug  9 18:30 About.md
-rw-r--r--  1 bharad  bharad  856B Aug  9 18:30 CV.pdf
drwxr-xr-x  5 bharad  bharad  160B Aug  9 18:30 Projects/
drwxr-xr-x  8 bharad  bharad  256B Aug  9 18:30 Posts/
-rw-r--r--  1 bharad  bharad  420B Aug  9 18:30 Contact.info
-rw-r--r--  1 bharad  bharad  680B Aug  9 18:30 Skills.json`}
        />
      </div>

      <div className="mt-4">
        <TerminalCommand
          command="cat About.md"
          output="Passionate about creating elegant solutions to complex problems. I build scalable web applications, enjoy exploring new technologies, and love contributing to open source projects."
        />
      </div>

      <div className="mt-4 flex items-center">
        <span className="mr-2 text-accent">$</span>
        <span className="text-foreground">explore_portfolio</span>
        <TerminalCursor />
      </div>
    </div>
  );
}

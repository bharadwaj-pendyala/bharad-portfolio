'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const roleTexts = [
  'Software Engineer',
  'Full Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
];

export default function EnhancedTerminalHero(): JSX.Element {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentText = roleTexts[currentRole];
    let index = 0;

    const typeText = () => {
      if (index < currentText.length) {
        setDisplayText(currentText.slice(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          // Clear text
          const clearText = () => {
            if (index > 0) {
              setDisplayText(currentText.slice(0, index - 1));
              index--;
              setTimeout(clearText, 50);
            } else {
              setCurrentRole((prev) => (prev + 1) % roleTexts.length);
            }
          };
          clearText();
        }, 2000);
      }
    };

    typeText();
  }, [currentRole]);

  return (
    <div className="card border-card-border bg-card-bg">
      <div className="relative">
        {/* Terminal window decorations */}
        <div className="mb-4 flex items-center space-x-2 border-b border-card-border pb-3">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-4 font-mono text-xs text-muted">
            bharad@portfolio:~
          </span>
        </div>

        {/* Enhanced Terminal Content */}
        <div className="space-y-4 p-4">
          {/* Welcome Message */}
          <div className="font-mono text-sm">
            <span className="text-accent">$</span>
            <span className="ml-2 text-foreground">whoami</span>
          </div>

          <div className="space-y-2 pl-4">
            <div className="text-2xl font-bold text-foreground">
              Bharadwaj Pendyala
            </div>
            <div className="font-mono text-lg text-muted">
              <span className="text-accent">&gt;</span> {displayText}
              <span className="animate-pulse text-accent">|</span>
            </div>
          </div>

          {/* Status and Experience */}
          <div className="mt-6 font-mono text-sm">
            <span className="text-accent">$</span>
            <span className="ml-2 text-foreground">cat experience.txt</span>
          </div>

          <div className="space-y-1 pl-4 text-sm text-muted">
            <div>
              📍 <span className="text-accent">Status:</span> Available for
              opportunities
            </div>
            <div>
              ⚡ <span className="text-accent">Experience:</span> 5+ years in
              software development
            </div>
            <div>
              🚀 <span className="text-accent">Specialization:</span> Full-stack
              web applications
            </div>
            <div>
              🛠️ <span className="text-accent">Tech Stack:</span> React,
              Next.js, Node.js, Python
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 font-mono text-sm">
            <span className="text-accent">$</span>
            <span className="ml-2 text-foreground">ls -la ~/quick_actions</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-3 pl-4">
            <Link
              href="/cv"
              className="hover:bg-accent/90 inline-flex items-center rounded bg-accent px-4 py-2 font-mono text-sm text-white transition-colors"
            >
              📄 view_resume.pdf
            </Link>
            <Link
              href="/projects"
              className="hover:bg-accent/10 inline-flex items-center rounded border border-accent px-4 py-2 font-mono text-sm text-accent transition-colors"
            >
              📁 explore_projects/
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded border border-border px-4 py-2 font-mono text-sm text-foreground transition-colors hover:bg-muted"
            >
              📝 read_about.md
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-6 font-mono text-sm">
            <span className="text-accent">$</span>
            <span className="ml-2 text-foreground">
              grep -r &quot;contact&quot; .
            </span>
          </div>

          <div className="flex flex-wrap gap-4 pl-4 text-sm text-muted">
            {siteConfig.social.email && (
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="transition-colors hover:text-accent"
              >
                📧 {siteConfig.social.email}
              </a>
            )}
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                🐙 GitHub
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                💼 LinkedIn
              </a>
            )}
          </div>

          {/* Terminal Prompt */}
          <div className="mt-6 flex items-center font-mono text-sm">
            <span className="text-accent">$</span>
            <span className="text-muted/60 ml-2">
              Ready for your next command...
            </span>
            <span className="ml-2 animate-pulse text-accent">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}

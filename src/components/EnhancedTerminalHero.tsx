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
    if (typeof window !== 'undefined') {
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (reducedMotion) {
        setDisplayText(roleTexts[currentRole]);
        const nextRoleTimeout = window.setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roleTexts.length);
        }, 2400);

        return () => window.clearTimeout(nextRoleTimeout);
      }
    }

    const currentText = roleTexts[currentRole];
    let index = 0;
    const timeoutIds: number[] = [];

    const typeText = () => {
      if (index < currentText.length) {
        setDisplayText(currentText.slice(0, index + 1));
        index++;
        const typeTimeout = window.setTimeout(typeText, 90);
        timeoutIds.push(typeTimeout);
      } else {
        const clearTimeoutId = window.setTimeout(() => {
          // Clear text
          const clearText = () => {
            if (index > 0) {
              setDisplayText(currentText.slice(0, index - 1));
              index--;
              const clearStepTimeout = window.setTimeout(clearText, 45);
              timeoutIds.push(clearStepTimeout);
            } else {
              setCurrentRole((prev) => (prev + 1) % roleTexts.length);
            }
          };
          clearText();
        }, 1800);
        timeoutIds.push(clearTimeoutId);
      }
    };

    typeText();
    return () => {
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [currentRole]);

  return (
    <div className="card border-card-border bg-card-bg">
      <div className="relative space-y-6">
        <div className="flex items-center space-x-2 border-b border-card-border pb-3">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-4 font-mono text-xs text-muted">
            bharad@portfolio:~
          </span>
        </div>

        <div className="font-mono text-sm">
          <span className="text-accent">$</span>
          <span className="ml-2 text-foreground">whoami</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <div className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
              Bharadwaj Pendyala
            </div>
            <div className="font-mono text-lg text-muted">
              <span className="text-accent">&gt;</span> {displayText}
              <span className="animate-pulse text-accent">|</span>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-secondary">
              Software engineer focused on building fast, maintainable
              full-stack applications with thoughtful UX and production-ready
              architecture.
            </p>
          </div>

          <div className="rounded-lg border border-card-border bg-background/40 p-4">
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">
              Snapshot
            </div>
            <ul className="space-y-2 font-mono text-sm text-secondary">
              <li>
                <span className="text-accent">Experience:</span> 5+ years
              </li>
              <li>
                <span className="text-accent">Focus:</span> Full-stack systems
              </li>
              <li>
                <span className="text-accent">Stack:</span> Next.js, Node.js,
                Python
              </li>
            </ul>
          </div>
        </div>

        <div className="font-mono text-sm">
          <span className="text-accent">$</span>
          <span className="ml-2 text-foreground">open ~/quick_actions</span>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="hover:bg-accent/90 inline-flex items-center rounded bg-accent px-4 py-2 font-mono text-sm text-white transition-colors"
          >
            Explore Projects
          </Link>
          <Link
            href="/cv"
            className="hover:bg-accent/10 inline-flex items-center rounded border border-accent px-4 py-2 font-mono text-sm text-accent transition-colors"
          >
            Open CV
          </Link>
          <Link
            href="/about"
            className="hover:bg-muted/20 inline-flex items-center rounded border border-border px-4 py-2 font-mono text-sm text-foreground transition-colors"
          >
            Read About
          </Link>
        </div>

        <div className="font-mono text-sm">
          <span className="text-accent">$</span>
          <span className="ml-2 text-foreground">ls ~/social</span>
        </div>

        <div className="flex flex-wrap gap-4 font-mono text-sm text-muted">
          {siteConfig.social.email && (
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="transition-colors hover:text-accent"
            >
              {siteConfig.social.email}
            </a>
          )}
          {siteConfig.social.github && (
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              GitHub
            </a>
          )}
          {siteConfig.social.linkedin && (
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          )}
        </div>

        <div className="flex items-center font-mono text-sm">
          <span className="text-accent">$</span>
          <span className="text-muted/80 ml-2">Ready for the next command</span>
          <span className="ml-2 animate-pulse text-accent">_</span>
        </div>
      </div>
    </div>
  );
}

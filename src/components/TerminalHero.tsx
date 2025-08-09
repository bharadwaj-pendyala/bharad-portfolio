'use client';

import { useState, useEffect } from 'react';
import TerminalCommand from './TerminalCommand';

type TerminalHeroProps = {
  className?: string;
};

export default function TerminalHero({
  className = '',
}: TerminalHeroProps): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showContent) return;

    const commands = [
      { command: 'cd /home/bharad/', delay: 1000 },
      { command: 'whoami', delay: 2000 },
      { command: 'cat intro.txt', delay: 3500 },
    ];

    const timer = setTimeout(() => {
      if (currentStep < commands.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    }, commands[currentStep]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentStep, showContent]);

  if (!showContent) {
    return (
      <div className={`terminal-text ${className}`}>
        <div className="flex animate-fade-in items-center opacity-0">
          <span className="mr-2 text-accent">$</span>
          <span className="text-foreground">_</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`terminal-text ${className}`}>
      <div className="space-y-4">
        {/* First command - always shown */}
        <div className="animate-fade-in">
          <TerminalCommand command="cd /home/bharad/" />
        </div>

        {/* Second command - shown after delay */}
        {currentStep >= 1 && (
          <div className="animate-fade-in">
            <TerminalCommand
              command="whoami"
              output="Bharadwaj Pendyala - Software Engineer"
            />
          </div>
        )}

        {/* Third command - shown after delay */}
        {currentStep >= 2 && (
          <div className="animate-fade-in">
            <TerminalCommand
              command="cat intro.txt"
              output={`Full Stack Developer passionate about building great products
and solving complex problems with modern technologies.

Currently crafting elegant solutions in React, Next.js, and TypeScript.
Love exploring new tech and contributing to open source.`}
            />
          </div>
        )}

        {/* Final prompt with cursor */}
        {currentStep >= 2 && (
          <div className="flex animate-fade-in items-center">
            <span className="mr-2 text-accent">$</span>
            <span className="text-foreground">explore_portfolio</span>
            <span className="cursor-blink ml-1 bg-accent text-background">
              ▊
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

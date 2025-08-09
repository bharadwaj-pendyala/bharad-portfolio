'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';

const roleTexts = [
  'Software Engineer',
  'Full Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
];

export default function HeroSection(): JSX.Element {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roleTexts.length);
        setIsTyping(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60" />
      <div className="bg-accent/5 absolute -right-40 -top-40 h-80 w-80 rounded-full blur-3xl" />
      <div className="bg-accent/5 absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Status Badge */}
          <div className="border-accent/20 bg-accent/10 mb-8 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium text-accent">
            <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for Opportunities
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{' '}
            <span className="to-accent/70 bg-gradient-to-r from-accent bg-clip-text text-transparent">
              Bharadwaj
            </span>
          </h1>

          {/* Dynamic Role Text */}
          <div className="mb-8 text-xl text-muted sm:text-2xl lg:text-3xl">
            <span className="mr-2">A</span>
            <span
              className={`inline-block font-semibold text-accent transition-all duration-500 ${
                isTyping ? 'animate-pulse' : 'opacity-60'
              }`}
            >
              {roleTexts[currentRole]}
            </span>
            <span className="ml-1 animate-pulse text-accent">|</span>
          </div>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted sm:text-xl">
            Passionate about creating elegant solutions to complex problems. I
            build scalable web applications with{' '}
            <span className="font-semibold text-foreground">5+ years</span> of
            experience in modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/cv"
              className="hover:bg-accent/90 group inline-flex items-center rounded-full bg-accent px-8 py-3 text-lg font-semibold text-white transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              View Resume
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full border border-border bg-background px-8 py-3 text-lg font-semibold text-foreground transition-all hover:scale-105 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              View Projects
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center justify-center space-x-6">
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-muted transition-colors hover:text-foreground"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="font-medium">GitHub</span>
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-muted transition-colors hover:text-foreground"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="font-medium">LinkedIn</span>
              </a>
            )}
            {siteConfig.social.email && (
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="group flex items-center space-x-2 text-muted transition-colors hover:text-foreground"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium">Email</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

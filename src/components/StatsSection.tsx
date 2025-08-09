'use client';

import { useEffect, useState } from 'react';

type Stat = {
  number: string;
  label: string;
  icon: string;
  description: string;
};

const stats: Stat[] = [
  {
    number: '5+',
    label: 'Years Experience',
    icon: '⚡',
    description: 'Building scalable applications',
  },
  {
    number: '20+',
    label: 'Projects Completed',
    icon: '🚀',
    description: 'Full-stack solutions delivered',
  },
  {
    number: '10+',
    label: 'Technologies',
    icon: '🛠️',
    description: 'Modern tech stack mastery',
  },
  {
    number: '100%',
    label: 'Client Satisfaction',
    icon: '⭐',
    description: 'Quality-focused delivery',
  },
];

export default function StatsSection(): JSX.Element {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Delivering Results That Matter
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Numbers that speak to my commitment to excellence and continuous
            growth in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-card group relative rounded-2xl border border-border p-8 text-center transition-all duration-700 hover:scale-105 hover:shadow-lg ${
                inView ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className="from-accent/5 to-accent/10 absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Content */}
              <div className="relative">
                <div className="mb-4 transform text-4xl transition-transform group-hover:scale-110">
                  {stat.icon}
                </div>

                <div className="mb-2 text-4xl font-bold text-accent lg:text-5xl">
                  {stat.number}
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {stat.label}
                </h3>

                <p className="text-sm text-muted">{stat.description}</p>
              </div>

              {/* Hover Effect */}
              <div className="to-accent/70 absolute bottom-0 left-1/2 h-1 w-0 rounded-full bg-gradient-to-r from-accent transition-all duration-300 group-hover:left-0 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';

type Stat = {
  command: string;
  value: string;
  label: string;
  description: string;
  icon: string;
};

const stats: Stat[] = [
  {
    command: 'wc -l experience.log',
    value: '5+',
    label: 'Years Experience',
    description: 'Building scalable web applications',
    icon: '⚡',
  },
  {
    command: 'find ./projects -name "*.completed"',
    value: '20+',
    label: 'Projects Completed',
    description: 'Full-stack solutions delivered',
    icon: '🚀',
  },
  {
    command: 'grep -c "technology" skills.json',
    value: '10+',
    label: 'Technologies',
    description: 'Modern tech stack mastery',
    icon: '🛠️',
  },
  {
    command: 'jq ".avg_rating" user_metrics.json',
    value: '4.8/5',
    label: 'User Satisfaction',
    description: 'Positive user experience',
    icon: '⭐',
  },
];

export default function EnhancedStatsSection(): JSX.Element {
  const [inView, setInView] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Animate stats one by one
          stats.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedStats((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('enhanced-stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="enhanced-stats-section" className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="card mx-auto max-w-2xl border-card-border bg-card-bg">
            <div className="mb-4 flex items-center space-x-2 border-b border-card-border pb-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="ml-4 font-mono text-xs text-muted">
                bharad@portfolio:~/achievements
              </span>
            </div>

            <div className="space-y-2 font-mono text-sm">
              <div>
                <span className="text-accent">$</span>
                <span className="ml-2 text-foreground">cat README.md</span>
              </div>
              <div className="pl-4 text-foreground">
                <h2 className="mb-2 text-2xl font-bold">
                  📊 Professional Achievements
                </h2>
                <p className="text-muted">
                  Quantifiable results that demonstrate expertise and commitment
                  to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`card border-card-border bg-card-bg transition-all duration-700 hover:scale-105 hover:shadow-lg ${
                inView ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Terminal Content */}
              <div className="space-y-3 p-4 font-mono text-sm">
                {/* Command */}
                <div className="text-muted">
                  <span className="text-accent">$</span>
                  <span className="ml-2">{stat.command}</span>
                </div>

                {/* Output */}
                <div className="space-y-2 pl-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className="text-3xl font-bold text-accent">
                      {stat.value}
                    </span>
                  </div>

                  <div className="font-semibold text-foreground">
                    {stat.label}
                  </div>

                  <div className="text-xs text-muted">{stat.description}</div>
                </div>

                {/* Animated Progress Indicator */}
                {animatedStats[index] && (
                  <div className="bg-muted/20 h-1 overflow-hidden rounded-full">
                    <div
                      className="to-accent/70 h-full animate-[fill_1s_ease-out] rounded-full bg-gradient-to-r from-accent"
                      style={{
                        animation: `fill 1s ease-out ${index * 200}ms both`,
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

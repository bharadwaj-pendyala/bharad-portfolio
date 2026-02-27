type Stat = {
  metric: string;
  value: string;
  description: string;
};

const stats: Stat[] = [
  {
    metric: 'Years Experience',
    value: '5+',
    description: 'Building scalable web applications',
  },
  {
    metric: 'Projects Shipped',
    value: '20+',
    description: 'Full-stack solutions delivered',
  },
  {
    metric: 'Core Technologies',
    value: '10+',
    description: 'Modern tech stack mastery',
  },
  {
    metric: 'Satisfaction Signal',
    value: '4.8/5',
    description: 'Positive user experience',
  },
];

export default function EnhancedStatsSection(): JSX.Element {
  return (
    <section aria-labelledby="stats-title">
      <div className="card border-card-border bg-card-bg">
        <div className="mb-6 border-b border-card-border pb-4 font-mono text-sm">
          <span className="text-accent">$</span>
          <span className="ml-2 text-foreground">cat metrics.json</span>
        </div>

        <div className="mb-6">
          <h2
            id="stats-title"
            className="m-0 font-mono text-xl font-semibold text-foreground"
          >
            Results at a glance
          </h2>
          <p className="mt-2 text-sm text-muted">
            Selected highlights from professional engineering work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.metric}
              className="rounded-lg border border-card-border bg-background/40 p-4"
            >
              <p className="mb-2 font-mono text-xs uppercase tracking-wide text-muted">
                {stat.metric}
              </p>
              <p className="mb-2 font-mono text-3xl font-semibold text-accent">
                {stat.value}
              </p>
              <p className="text-sm text-secondary">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import TerminalHeader from './TerminalHeader';
import MinimalFooter from './MinimalFooter';
import TerminalEasterEgg from './TerminalEasterEgg';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#content"
        className="sr-only z-[60] rounded-md bg-accent px-3 py-2 font-mono text-xs text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <TerminalHeader />
      <main id="content" className="flex-grow">
        {children}
      </main>
      <MinimalFooter />
      <TerminalEasterEgg />
    </div>
  );
}

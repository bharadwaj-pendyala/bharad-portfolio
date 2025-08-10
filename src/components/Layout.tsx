import TerminalHeader from './TerminalHeader';
import MinimalFooter from './MinimalFooter';
import TerminalEasterEgg from './TerminalEasterEgg';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TerminalHeader />
      <main className="flex-grow py-12">{children}</main>
      <MinimalFooter />
      <TerminalEasterEgg />
    </div>
  );
}

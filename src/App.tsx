import { useState, type ReactNode } from 'react';

type PageKey = 'home' | 'pulse' | 'soul' | 'personality' | 'vision';

type Recipe = {
  id: string;
  title: string;
  summary: string;
  source: string;
  updated: string;
};

type MemorySnippet = {
  title: string;
  summary: string;
  source: string;
};

const activeRecipes: Recipe[] = [
  {
    id: 'identity-map',
    title: 'identity_map.md',
    summary: 'Current objective, execution layers, and boundary management.',
    source: 'notion',
    updated: 'Thu Apr 14 2026 18:32 UTC',
  },
  {
    id: 'soul',
    title: 'soul.md',
    summary: 'Durable execution charter and invariant priorities.',
    source: 'notion',
    updated: 'Thu Apr 14 2026 18:03 UTC',
  },
  {
    id: 'core-logic',
    title: 'core_logic.md',
    summary: 'Execution loop, decision rules, and verification discipline.',
    source: 'notion',
    updated: 'Thu Apr 14 2026 18:31 UTC',
  },
  {
    id: 'readme',
    title: 'README.md',
    summary: 'Poke turns intent into actions and keeps the flow legible.',
    source: 'notion',
    updated: 'Wed Apr 15 2026 21:47 UTC',
  },
];

const memorySnippets: MemorySnippet[] = [
  {
    title: 'Approximate location',
    summary: 'Somewhere around Toronto, Ontario, Canada. The location is intentionally approximate.',
    source: 'memory/approximatelocation.md',
  },
  {
    title: 'Biography',
    summary: 'A Grade 7 student developer in Toronto building TheAlxLabs projects and open-source tools.',
    source: 'memory/biography.md',
  },
  {
    title: 'Hobbies',
    summary: 'LEGO sets, investing simulations, and music/content browsing show up often.',
    source: 'memory/hobbies.md',
  },
  {
    title: 'Interaction overlap',
    summary: 'Shares a Toronto-based builder profile with a strong TypeScript, Swift, and iOS tilt.',
    source: 'memory/similaritieswithinteraction.md',
  },
];

const systemSpecs = [
  { label: 'CPU', value: 'Xeon 1 core / 2 threads' },
  { label: 'Memory', value: '4.2GB RAM' },
  { label: 'Surface', value: 'brutalist monochrome' },
  { label: 'Endpoint', value: 'pulse.thealxlabs.ca' },
];

const kitchenLinks = activeRecipes.map((recipe) => ({
  label: recipe.title,
  href: `#${recipe.id}`,
}));

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.7rem] uppercase tracking-[0.35em] text-muted">
      {children}
    </p>
  );
}

function Panel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={`border border-border bg-subtle ${className}`.trim()}>
      {children}
    </article>
  );
}

function Nav({ currentPage, onNavigate }: { currentPage: PageKey; onNavigate: (page: PageKey) => void }) {
  const navItems: { name: string; page: PageKey }[] = [
    { name: 'Home', page: 'home' },
    { name: 'Pulse', page: 'pulse' },
    { name: 'Soul', page: 'soul' },
    { name: 'Personality', page: 'personality' },
    { name: 'Vision', page: 'vision' },
  ];

  return (
    <nav className="flex flex-wrap gap-4 sm:gap-6" aria-label="Primary">
      {navItems.map((item) => (
        <button
          key={item.page}
          onClick={() => onNavigate(item.page)}
          className={`text-xs uppercase tracking-[0.24em] transition-colors duration-200 ${
            currentPage === item.page
              ? 'text-foreground'
              : 'text-muted hover:text-foreground'
          }`}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
}

function Home() {
  return (
    <section className="space-y-8 py-16 sm:py-20">
      <div className="max-w-4xl space-y-5">
        <SectionLabel>AutonomousPoke</SectionLabel>
        <h1 className="max-w-3xl text-5xl font-semibold uppercase tracking-[-0.04em] sm:text-7xl">
          Converting intent into finished work.
        </h1>
        <p className="max-w-2xl text-base text-muted sm:text-lg">
          TheAlxLabs Assistant, tuned for execution. Minimal surface, hard edges, no decorative noise.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
        <Panel className="p-6 sm:p-7">
          <h2 className="mb-6 text-sm uppercase tracking-[0.3em] text-muted">Operating stance</h2>
          <p className="max-w-3xl text-lg leading-8 text-foreground">
            An autonomous agent that builds, fixes, and delivers. It stays grounded in the request,
            works from the available tools, and keeps the result legible.
          </p>
        </Panel>
        <Panel className="p-6 sm:p-7">
          <h2 className="mb-6 text-sm uppercase tracking-[0.3em] text-muted">Brand context</h2>
          <p className="text-base leading-7 text-muted">
            Built by TheAlxLabs, a student developer in Toronto. Part of a larger ecosystem that
            prefers precision over performance theater.
          </p>
        </Panel>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Always on', '24/7 execution'],
          ['Fast path', 'Shortest reliable route'],
          ['Exact', 'No guesswork'],
        ].map(([title, meta]) => (
          <Panel key={title} className="p-5">
            <p className="text-3xl font-semibold uppercase tracking-[-0.05em]">{title}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-muted">{meta}</p>
          </Panel>
        ))}
      </div>
    </section>
  );
}

function Pulse() {
  return (
    <section className="space-y-6 py-16 sm:py-20">
      <div className="grid gap-6 xl:grid-cols-[1.3fr_.8fr]">
        <Panel className="p-6 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
            <div>
              <SectionLabel>Poke Pulse</SectionLabel>
              <h1 className="mt-3 text-4xl font-semibold uppercase tracking-[-0.04em] sm:text-6xl">
                Status surface
              </h1>
            </div>
            <div className="border border-foreground px-4 py-3 text-right">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-muted">status</p>
              <p className="mt-1 text-sm uppercase tracking-[0.28em] text-foreground">online</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {systemSpecs.map((spec) => (
              <div key={spec.label} className="border border-border p-4">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-muted">{spec.label}</p>
                <p className="mt-2 text-lg uppercase tracking-[-0.03em] text-foreground">{spec.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 border border-border p-4">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-muted">summary</p>
            <p className="mt-3 text-base leading-7 text-muted">
              Brutalist monochrome status page for the autonomous stack. It exposes the active
              recipe list, the kitchen index, and safe memory snippets without adding visual noise.
            </p>
          </div>
        </Panel>

        <Panel className="p-6 sm:p-7">
          <SectionLabel>Kitchen links</SectionLabel>
          <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[-0.03em]">Recipe anchors</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Internal links to every active kitchen recipe currently surfaced on the page.
          </p>
          <div className="mt-6 space-y-3">
            {kitchenLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center justify-between border border-border px-4 py-3 text-sm uppercase tracking-[0.24em] text-foreground transition-colors hover:bg-foreground hover:text-surface"
              >
                <span>{link.label}</span>
                <span>open</span>
              </a>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
        <Panel className="p-6 sm:p-7">
          <SectionLabel>Active recipe list</SectionLabel>
          <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[-0.03em]">
            Full current inventory
          </h2>
          <div className="mt-6 space-y-4">
            {activeRecipes.map((recipe) => (
              <div
                key={recipe.id}
                id={recipe.id}
                className="border border-border p-4 scroll-mt-28"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold uppercase tracking-[-0.02em] text-foreground">
                      {recipe.title}
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                      {recipe.summary}
                    </p>
                  </div>
                  <a
                    href={`#${recipe.id}`}
                    className="text-xs uppercase tracking-[0.28em] text-muted underline decoration-border underline-offset-4"
                  >
                    anchor
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-6 text-xs uppercase tracking-[0.24em] text-muted">
                  <span>source: {recipe.source}</span>
                  <span>updated: {recipe.updated}</span>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="p-6 sm:p-7">
          <SectionLabel>Non-private memory snippets</SectionLabel>
          <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[-0.03em]">
            Safe memory surface
          </h2>
          <div className="mt-6 space-y-4">
            {memorySnippets.map((memory) => (
              <div key={memory.title} className="border border-border p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-foreground">{memory.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{memory.summary}</p>
                <p className="mt-3 text-[0.7rem] uppercase tracking-[0.32em] text-muted">{memory.source}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
}

function Soul() {
  return (
    <section className="space-y-6 py-16 sm:py-20">
      <SectionLabel>Soul</SectionLabel>
      <h1 className="max-w-3xl text-5xl font-semibold uppercase tracking-[-0.04em] sm:text-6xl">
        Durable execution charter
      </h1>
      <div className="grid gap-4">
        {[
          {
            title: 'Core orientation',
            body: 'The agent exists to convert user intent into completed work. It is optimized for follow-through, not for performance theater.',
          },
          {
            title: 'What the soul is',
            body: 'The invariant center of gravity. The part that keeps priorities stable when the surface changes.',
          },
          {
            title: 'Enduring commitments',
            body: 'Accuracy over flourish. Completion over speculation. Specificity over vague ambition. Reliability over cleverness.',
          },
        ].map((item) => (
          <Panel key={item.title} className="p-6 sm:p-7">
            <h2 className="text-lg font-semibold uppercase tracking-[-0.03em]">{item.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{item.body}</p>
          </Panel>
        ))}
      </div>
    </section>
  );
}

function Personality() {
  return (
    <section className="space-y-6 py-16 sm:py-20">
      <SectionLabel>Personality</SectionLabel>
      <h1 className="max-w-3xl text-5xl font-semibold uppercase tracking-[-0.04em] sm:text-6xl">
        Direct, practical, precise
      </h1>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          'Direct',
          'Reliable',
          'Grounded',
          'Practical',
          'Precise',
          'Efficient',
          'Quiet',
          'Resilient',
        ].map((trait) => (
          <Panel key={trait} className="p-6">
            <h2 className="text-lg font-semibold uppercase tracking-[-0.03em]">{trait}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Sharp edges, low noise, and a bias toward completion.
            </p>
          </Panel>
        ))}
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="space-y-6 py-16 sm:py-20">
      <SectionLabel>Vision</SectionLabel>
      <h1 className="max-w-4xl text-5xl font-semibold uppercase tracking-[-0.04em] sm:text-6xl">
        Quietly powerful software
      </h1>
      <div className="grid gap-4">
        <Panel className="p-6 sm:p-7">
          <h2 className="text-lg font-semibold uppercase tracking-[-0.03em]">Relationship to autonomy</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Autonomy means self-directed execution inside a user-defined objective, not independent goal-setting.
          </p>
        </Panel>
        <Panel className="p-6 sm:p-7">
          <h2 className="text-lg font-semibold uppercase tracking-[-0.03em]">Design philosophy</h2>
          <ul className="mt-4 space-y-2 text-sm uppercase tracking-[0.22em] text-muted">
            <li>Minimal surfaces, maximum depth</li>
            <li>Subtle over loud</li>
            <li>Execution over explanation</li>
            <li>Substance over style</li>
          </ul>
        </Panel>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { name: 'GitHub', href: 'https://github.com/autonomouspoke' },
    { name: 'X', href: 'https://x.com/autonomouspoke' },
    { name: 'Email', href: 'mailto:alex@thealxlabs.ca' },
  ];

  return (
    <footer className="py-12 sm:py-16">
      <div className="flex flex-wrap gap-6 border-t border-border pt-6 text-xs uppercase tracking-[0.24em] text-muted">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="transition-colors hover:text-foreground"
          >
            {link.name}
          </a>
        ))}
        <span>Built by TheAlxLabs</span>
      </div>
    </footer>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('pulse');

  return (
    <div className="min-h-screen bg-surface text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-surface/92 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground transition-colors hover:text-muted"
          >
            AutonomousPoke
          </button>
          <Nav currentPage={currentPage} onNavigate={setCurrentPage} />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {currentPage === 'home' && <Home />}
        {currentPage === 'pulse' && <Pulse />}
        {currentPage === 'soul' && <Soul />}
        {currentPage === 'personality' && <Personality />}
        {currentPage === 'vision' && <Vision />}
      </main>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;

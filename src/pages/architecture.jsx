import Head from 'next/head';

const layers = [
  {
    title: 'Frontends',
    description: 'web (public site), console (Prism console), docs (this portal). These shape the user experience.',
  },
  {
    title: 'Backends',
    description: 'api (public gateway), core (engine and ledger), operator (workers and background jobs).',
  },
  {
    title: 'Infrastructure',
    description: 'Railway for deployment, Cloudflare and managed domains under *.blackroad.systems.',
  },
];

export default function Architecture() {
  return (
    <>
      <Head>
        <title>Architecture | BlackRoad OS Docs</title>
      </Head>
      <header className="hero">
        <h1>Architecture</h1>
        <p>Understand how the system layers connect users to core capabilities.</p>
      </header>
      <main className="main">
        <section className="section">
          <h2>System layers</h2>
          <div className="card-grid">
            {layers.map((layer) => (
              <div key={layer.title} className="card">
                <h3>{layer.title}</h3>
                <p className="subtle">{layer.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Flow</h2>
          <div className="card">
            <pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'monospace' }}>
{`Users → Web / Console / Docs → API → Core / Operator`}
            </pre>
            <p className="subtle" style={{ marginTop: '12px' }}>
              Traffic starts at frontends, funnels through the API gateway, and lands on core systems and operators.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

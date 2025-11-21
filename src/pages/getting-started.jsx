import Head from 'next/head';

const services = [
  { name: 'core', description: 'Internal engine, ledger, and foundational backend services.' },
  { name: 'api', description: 'Public gateway that fronts the platform APIs.' },
  { name: 'operator', description: 'Job workers and background orchestration.' },
  { name: 'console', description: 'Prism console for operators and administrators.' },
  { name: 'web', description: 'Public marketing site for BlackRoad OS.' },
  { name: 'docs', description: 'This documentation portal.' },
];

const firstSteps = [
  { label: 'Visit web', url: 'https://blackroad.systems' },
  { label: 'Open console', url: 'https://console.blackroad.systems' },
  { label: 'Ping API health', url: 'https://api.blackroad.systems/health' },
  { label: 'Open docs', url: '/' },
];

export default function GettingStarted() {
  return (
    <>
      <Head>
        <title>Getting Started | BlackRoad OS Docs</title>
      </Head>
      <header className="hero">
        <h1>Getting Started</h1>
        <p>Understand what BlackRoad OS is and how to take your first steps.</p>
      </header>
      <main className="main">
        <section className="section">
          <h2>What is BlackRoad OS?</h2>
          <p className="subtle">
            BlackRoad OS is an operating layer for orchestrating financial and operational workflows. It brings
            together frontends, APIs, and workers under a consistent domain family and deployment strategy.
          </p>
        </section>

        <section className="section">
          <h2>Core services</h2>
          <div className="card-grid">
            {services.map((service) => (
              <div key={service.name} className="card">
                <h3>{service.name}</h3>
                <p className="subtle">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>First steps checklist</h2>
          <div className="card">
            <ol>
              {firstSteps.map((step) => (
                <li key={step.label} style={{ marginBottom: '10px' }}>
                  <strong>{step.label}:</strong> <a href={step.url}>{step.url}</a>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </>
  );
}

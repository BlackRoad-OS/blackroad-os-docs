import Head from 'next/head';

export default function Architecture() {
  return (
    <>
      <Head>
        <title>Architecture | BlackRoad OS Docs</title>
        <meta
          name="description"
          content="High-level system architecture for BlackRoad OS."
        />
      </Head>
      <header className="hero">
        <h1>Architecture</h1>
        <p>High-level layout of BlackRoad OS services and flows.</p>
      </header>
      <main className="main">
        <section className="section">
          <div className="card">
            <h2>Coming soon</h2>
            <p className="subtle">
              Detailed diagrams and request flows are on the way. This section will cover how frontends, gateways,
              and operators connect to the core ledger and shared infrastructure.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

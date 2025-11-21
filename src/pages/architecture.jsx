import Head from 'next/head';

export default function Architecture() {
  return (
    <>
      <Head>
        <title>Architecture | BlackRoad OS Docs</title>
      </Head>
      <header className="hero">
        <h1>Architecture</h1>
        <p>High-level maps and diagrams that show how BlackRoad OS fits together.</p>
      </header>
      <main className="main">
        <section className="section">
          <div className="card">
            <p className="subtle">
              This section will outline the layers, data flows, and handoffs between services. Detailed walkthroughs
              and diagrams are on the way.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

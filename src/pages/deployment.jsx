import Head from 'next/head';

export default function Deployment() {
  return (
    <>
      <Head>
        <title>Deployment | BlackRoad OS Docs</title>
        <meta name="description" content="Deployment, environments, and rollout practices." />
      </Head>
      <header className="hero">
        <h1>Deployment</h1>
        <p>Operational practices for launching and maintaining BlackRoad OS services.</p>
      </header>
      <main className="main">
        <section className="section">
          <div className="card">
            <h2>Details coming soon</h2>
            <p className="subtle">
              Environment layouts, CI/CD pipelines, and rollback playbooks will live here so teams can ship changes with
              confidence.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

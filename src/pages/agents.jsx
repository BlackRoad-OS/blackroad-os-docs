import Head from 'next/head';

export default function Agents() {
  return (
    <>
      <Head>
        <title>Agents | BlackRoad OS Docs</title>
        <meta name="description" content="Agent protocols, roles, and integration guides." />
      </Head>
      <header className="hero">
        <h1>Agents</h1>
        <p>Docs for automated agents and how they plug into BlackRoad OS.</p>
      </header>
      <main className="main">
        <section className="section">
          <div className="card">
            <h2>In progress</h2>
            <p className="subtle">
              We will outline agent responsibilities, APIs, and operational guardrails here. Stay tuned for connection
              patterns, auth guidance, and runbooks.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

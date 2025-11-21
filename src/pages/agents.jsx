import Head from 'next/head';
import DocsLayout from '../components/DocsLayout';

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
      </Head>
      <header className="hero">
        <h1>Agents</h1>
        <p>Background actors and automation that extend BlackRoad OS.</p>
      </header>
      <main className="main">
        <section className="section">
          <div className="card">
            <h2>In progress</h2>
            <p className="subtle">
              We will outline agent responsibilities, APIs, and operational guardrails here. Stay tuned for connection
              patterns, auth guidance, and runbooks.
            </p>
            <p className="subtle">Profiles, behaviors, and operating guides for agents will land here soon.</p>
          </div>
        </section>
      </main>
      </Head>
      <DocsLayout
        title="Agents"
        intro="How automated agents and the Operator service coordinate work across the platform."
      >
        <section className="section">
          <h2>Agent orchestration</h2>
          <p className="subtle">
            Agents are background workers that react to events, queue tasks, and stitch together service-to-service
            workflows. They are designed to be composable so new flows can be added without disturbing core surfaces.
          </p>
        </section>

        <section className="section">
          <h2>Role of the Operator service</h2>
          <div className="card">
            <p>
              The Operator service owns scheduling, retries, and execution guarantees. It accepts jobs from frontends,
              APIs, or other agents, then dispatches them to the correct worker pool.
            </p>
            <ul className="docs-list">
              <li>
                <strong>Queues and topics:</strong> Jobs are grouped by domain (payments, notifications, reporting) so
                that throughput can be tuned independently.
              </li>
              <li>
                <strong>Health surfaces:</strong> Standard endpoints like <code>/health</code> and <code>/version</code>
                provide quick visibility into the runtime state.
              </li>
              <li>
                <strong>Pluggable agents:</strong> Each agent can be deployed or updated without touching the rest of the
                stack, keeping the system resilient.
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Where to go next</h2>
          <p className="subtle">
            Use this section as a placeholder while deeper specs, sequencing diagrams, and runbooks are added. The
            sidebar navigation keeps the structure stable as more agent documentation grows.
          </p>
        </section>
      </DocsLayout>
    </>
  );
}

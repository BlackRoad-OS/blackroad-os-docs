import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import serviceConfig from '../config/serviceConfig';

export default function GettingStarted() {
  return (
    <Layout title="Getting Started" description="Start using the BlackRoad Operating System">
      <main className="container margin-vert--lg">
        <header className="margin-bottom--lg">
          <h1>Getting Started</h1>
          <p className="subtitle">Understand the BlackRoad Operating System and take your first steps.</p>
        </header>

        <section className="margin-bottom--lg">
          <h2>What is BlackRoad OS?</h2>
          <p>
            BlackRoad OS is the platform layer for orchestrating digital logistics and operational workflows. It brings together
            public-facing frontends, operator consoles, and backend services into a single, reliable surface.
          </p>
        </section>

        <section className="margin-bottom--lg">
          <h2>Core services</h2>
          <ul>
            <li><strong>core</strong> – Ledger and core API that acts as the system of record.</li>
            <li><strong>api</strong> – Public gateway that fronts the core for external access.</li>
            <li><strong>operator</strong> – Workers, queues, and background orchestration.</li>
            <li><strong>console</strong> – Prism Console for operators and administrators.</li>
            <li><strong>web</strong> – Public-facing site for users and partners.</li>
            <li><strong>docs</strong> – This documentation site that explains how everything connects.</li>
          </ul>
        </section>

        <section className="margin-bottom--lg">
          <h2>Environments</h2>
          <p>
            Services are hosted on Railway and published under the <code>blackroad.systems</code> domain family. Use HTTPS endpoints
            in each environment for predictable connectivity.
          </p>
        </section>

        <section className="margin-bottom--lg">
          <h2>First steps checklist</h2>
          <ol>
            <li>Visit the public site: <Link to="https://blackroad.systems">blackroad.systems</Link>.</li>
            <li>Open the console: <Link to="https://console.blackroad.systems">console.blackroad.systems</Link>.</li>
            <li>Hit the API probe: <Link to="https://api.blackroad.systems/health">api.blackroad.systems/health</Link>.</li>
            <li>Stay in the docs: <Link to={serviceConfig.SERVICE_BASE_URL}>Docs homepage</Link>.</li>
          </ol>
        </section>
      </main>
    </Layout>
  );
}

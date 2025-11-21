import Layout from '@theme/Layout';
import React from 'react';

export default function Architecture() {
  return (
    <Layout title="Architecture" description="High-level architecture for BlackRoad OS">
      <main className="container margin-vert--lg">
        <header className="margin-bottom--lg">
          <h1>Architecture</h1>
          <p className="subtitle">How users, frontends, and backends flow together in BlackRoad OS.</p>
        </header>

        <section className="margin-bottom--lg">
          <h2>System flow</h2>
          <p>The following text diagram highlights the primary request paths:</p>
          <pre>
Users & Agents → Web & Console
Web → Public API → Core
Console → API → Core + Operator
Operator → async tasks, queues, workflows
          </pre>
        </section>

        <section className="margin-bottom--lg">
          <h2>Platform layers</h2>
          <ul>
            <li><strong>Frontends</strong>: public web experience, Prism Console, and this docs site.</li>
            <li><strong>Backends</strong>: Core for the ledger and main business logic; API for the external gateway; Operator for asynchronous orchestration.</li>
            <li><strong>Shared infrastructure</strong>: Railway hosts the services, Cloudflare fronts the domains, and <code>blackroad.systems</code> anchors the URLs.</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}

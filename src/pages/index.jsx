import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import docsConfig from '../config/docsConfig';

export default function Home() {
  return (
    <Layout title="BlackRoad OS" description="Unified documentation for BlackRoad OS">
      <header className="hero hero--primary homepage-hero">
        <div className="container">
          <h1 className="hero__title">BlackRoad OS Handbook</h1>
          <p className="hero__subtitle">One place for platform architecture, operational playbooks, and onboarding.</p>
          <div className="buttons">
            <Link className="button button--secondary button--lg" to="/intro/overview">
              Start with the overview
            </Link>
            <Link className="button button--outline button--lg" to="/infra/environments">
              Environment reference
            </Link>
          </div>
        </div>
      </header>

      <main className="container margin-vert--lg">
        <div className="callout-grid">
          <div className="callout-card">
            <h3>Systems</h3>
            <p className="card-subtitle">Core, Web UI, Prism Console, Agents</p>
            <p>Discover how each surface interacts, which env vars matter, and where to extend the platform.</p>
            <Link to="/core/overview">Explore system docs →</Link>
          </div>
          <div className="callout-card">
            <h3>Infra & Deploy</h3>
            <p className="card-subtitle">Railway + Cloudflare</p>
            <p>Deployment flows, domains, CI/CD, and environment mappings with health/version probes baked in.</p>
            <Link to="/infra/railway">Read infra playbooks →</Link>
          </div>
          <div className="callout-card">
            <h3>Onboarding</h3>
            <p className="card-subtitle">Developers, Operators, Partners</p>
            <p>Get local setups running fast with repo guides, branching strategy, and shared style rules.</p>
            <Link to="/onboarding/developer-setup">Onboard now →</Link>
          </div>
        </div>

        <div className="margin-top--lg">
          <p className="text--center">
            Docs served from <strong>{docsConfig.publicDocsUrl}</strong>{' '}
            {docsConfig.coreApiUrl && <>| Core API: {docsConfig.coreApiUrl} </>}
            {docsConfig.webAppUrl && <>| Web App: {docsConfig.webAppUrl} </>}
            {docsConfig.consoleUrl && <>| Console: {docsConfig.consoleUrl} </>}
            {docsConfig.agentsApiUrl && <>| Agents API: {docsConfig.agentsApiUrl}</>}
          </p>
        </div>
      </main>
    </Layout>
  );
}

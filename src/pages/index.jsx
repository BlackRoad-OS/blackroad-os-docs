import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import serviceConfig from '../config/serviceConfig';

const quickLinks = [
  { href: '/getting-started', label: 'Getting Started' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/services', label: 'Services' },
];

export default function Home() {
  return (
    <Layout title="BlackRoad OS – Documentation" description="Architecture, services, and integration guides for BlackRoad OS.">
      <header className="hero hero--primary homepage-hero">
        <div className="container">
          <h1 className="hero__title">BlackRoad OS – Documentation</h1>
          <p className="hero__subtitle">Architecture, services, and integration guides for BlackRoad OS.</p>
          <div className="buttons">
            {quickLinks.map((link) => (
              <Link key={link.href} className="button button--secondary button--lg" to={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="container margin-vert--lg">
        <section className="row">
          <div className="col col--6">
            <h2>What you will find here</h2>
            <ul>
              <li>How the BlackRoad Operating System fits together across frontends, APIs, and workers.</li>
              <li>Environment and deployment notes for Railway and the <code>blackroad.systems</code> domain family.</li>
              <li>Service-by-service responsibilities with links to deeper docs in each section.</li>
            </ul>
          </div>
          <div className="col col--6">
            <h2>Quick navigation</h2>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="margin-top--lg">
          <h2>Service metadata</h2>
          <p className="margin-bottom--sm">Values pulled from the shared service configuration.</p>
          <div className="card">
            <div className="card__body">
              <ul>
                <li>
                  <strong>Service ID:</strong> {serviceConfig.SERVICE_ID}
                </li>
                <li>
                  <strong>Service Name:</strong> {serviceConfig.SERVICE_NAME}
                </li>
                <li>
                  <strong>Service Base URL:</strong> {serviceConfig.SERVICE_BASE_URL}
                </li>
                <li>
                  <strong>OS Root:</strong> {serviceConfig.OS_ROOT}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

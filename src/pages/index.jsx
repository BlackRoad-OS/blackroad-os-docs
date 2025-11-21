import Link from 'next/link';
import Head from 'next/head';
import { serviceConfig } from '../config/serviceConfig';

const links = [
  { href: '/getting-started', title: 'Getting Started', description: 'Kick off with core concepts, environment access, and first checks.' },
  { href: '/architecture', title: 'Architecture', description: 'See how frontends, gateways, and workers fit together inside BlackRoad OS.' },
  { href: '/services', title: 'Services', description: 'Service catalog with IDs, base URLs, and responsibilities.' },
];
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import EnvironmentInfo from '../components/EnvironmentInfo';

export default function Home() {
  return (
    <>
      <Head>
        <title>BlackRoad OS – Documentation</title>
        <meta
          name="description"
          content="Reference for architecture, services, and integration of BlackRoad OS."
        />
      </Head>
      <header className="hero">
        <h1>BlackRoad OS – Documentation</h1>
        <p>Reference for architecture, services, and integration of BlackRoad OS.</p>
      </header>
      <main className="main">
        <section className="section">
          <h2>Start exploring</h2>
          <div className="card-grid">
            {links.map((link) => (
              <div key={link.href} className="card">
                <h3>{link.title}</h3>
                <p className="subtle">{link.description}</p>
                <p>
                  <Link href={link.href}>Open {link.title} →</Link>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Service metadata</h2>
          <p className="subtle">Values provided via shared configuration.</p>
          <ul className="list-inline">
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
        </section>

        <div className="footer">BlackRoad OS Docs — stay aligned across frontends, APIs, and operators.</div>
        <EnvironmentInfo />
      </main>
    </>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import EnvironmentInfo from '../components/EnvironmentInfo';
import { serviceConfig } from '../config/serviceConfig';

const links = [
  { href: '/getting-started', title: 'Getting Started', description: 'Kick off with core concepts, environment access, and first checks.' },
  { href: '/architecture', title: 'Architecture', description: 'Understand how frontends, gateways, and workers fit together.' },
  { href: '/services', title: 'Services', description: 'Service catalog with IDs and responsibilities.' },
  { href: '/agents', title: 'Agents', description: 'Background actors, automations, and how they interact with the OS.' },
  { href: '/deployment', title: 'Deployment', description: 'Environment notes, release procedures, and operational readiness.' },
];
import DocsLayout from '../components/DocsLayout';
import { osServices } from '../config/services';

export default function Home() {
  return (
    <>
      <Head>
        <title>Overview | BlackRoad OS Docs</title>
        <meta name="description" content="High-level overview of BlackRoad OS." />
      </Head>
      <DocsLayout
        title="Overview"
        intro="A concise entry point to how BlackRoad OS is organized and what it offers."
      >
        <section className="section">
          <h2>What is BlackRoad OS?</h2>
          <p className="subtle">
            BlackRoad OS is a coordinated platform that aligns frontends, services, and operators under a single
            operating model. It standardizes deployments, endpoints, and workflows so teams can ship features across
            the stack with confidence.
          </p>
        </section>

        <section className="section">
          <h2>Core services</h2>
          <p className="subtle">Five services anchor the platform. Each ships with a health surface and shared deployment playbook.</p>
          <ul className="docs-list">
            {osServices.map((service) => (
              <li key={service.id}>
                <strong>{service.name}:</strong> {service.description}
              </li>
            ))}
          </ul>
        </section>
      </DocsLayout>
    </>
  );
}

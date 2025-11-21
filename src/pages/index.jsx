import Head from 'next/head';
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

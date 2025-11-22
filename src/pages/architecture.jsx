import Head from 'next/head';
import DocsLayout from '../components/DocsLayout';
import { osServices } from '../config/services';

const architectureLayers = [
  {
    title: 'Interface',
    description: 'Web, console, and docs surfaces that present the OS to humans and partners.',
  },
  {
    title: 'Orchestration',
    description: 'Operators and schedulers that direct jobs, flows, and agents across the platform.',
  },
  {
    title: 'Data',
    description: 'Core ledger, event streams, and configuration stores that hold state and lineage.',
  },
  {
    title: 'Compliance',
    description: 'Audit, observability, and controls that keep environments aligned with policy.',
  },
  {
    title: 'Compute',
    description: 'Execution surfaces that run workloads, APIs, and background automation.',
  },
];

const serviceLayers = [
  {
    title: 'Core',
    description: 'Ledger, state, and internal APIs that hold the operating model together.',
  },
  {
    title: 'Operator',
    description: 'Job orchestration, background processing, and agent execution.',
  },
  {
    title: 'Web',
    description: 'Public-facing entry point, marketing, and status communication.',
  },
  {
    title: 'Prism Console',
    description: 'Operational console for humans to inspect jobs and flows.',
  },
  {
    title: 'Docs',
    description: 'Shared knowledge base that aligns the other layers.',
  },
];

const diagram = `
         Users & Operators
                 |
        Web / Prism Console / Docs
                 |
              API Edge
                 |
           Core ←→ Operator
`;

export default function Architecture() {
  return (
    <>
      <Head>
        <title>Architecture | BlackRoad OS Docs</title>
        <meta name="description" content="High-level system architecture for BlackRoad OS." />
      </Head>
      <DocsLayout
        title="Architecture"
        intro="How the layers of BlackRoad OS stitch together across frontends, services, and operators."
      >
        <section className="section">
          <div className="card">
            <h2>Overview</h2>
            <p className="subtle">
              High-level maps and diagrams show how BlackRoad OS fits together. Detailed walkthroughs and connection
              flows will follow as the platform grows.
            </p>
            <p className="subtle">
              Frontends, gateways, and operators connect to the core ledger and shared infrastructure through predictable
              edges and shared conventions.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Platform layers at a glance</h2>
          <div className="card-grid">
            {architectureLayers.map((layer) => (
              <div key={layer.title} className="card">
                <h3>{layer.title}</h3>
                <p className="subtle">{layer.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Service-aligned surfaces</h2>
          <div className="card-grid">
            {serviceLayers.map((layer) => (
              <div key={layer.title} className="card">
                <h3>{layer.title}</h3>
                <p className="subtle">{layer.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Rough flow</h2>
          <div className="card">
            <pre className="diagram" aria-label="Architecture flow diagram">{diagram}</pre>
            <p className="subtle" style={{ marginTop: '12px' }}>
              Requests and jobs start at the user-facing surfaces, pass through the API edge, and land on the Core and
              Operator services. Documentation and operational tooling keep each surface aligned.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Service lineage</h2>
          <p className="subtle">
            Each layer maps directly to a named service so that deployments, observability, and onboarding stay
            consistent:
          </p>
          <ul className="docs-list">
            {osServices.map((service) => (
              <li key={service.id}>
                <strong>{service.name}</strong> → {service.description}
              </li>
            ))}
          </ul>
        </section>
      </DocsLayout>
    </>
  );
}

import Head from 'next/head';
import DocsLayout from '../components/DocsLayout';
import { osServices } from '../config/services';

const layers = [
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
        <meta
          name="description"
          content="High-level system architecture for BlackRoad OS."
        />
      </Head>
      <header className="hero">
        <h1>Architecture</h1>
        <p>High-level layout of BlackRoad OS services and flows.</p>
        <p>High-level maps and diagrams that show how BlackRoad OS fits together.</p>
      </header>
      <main className="main">
        <section className="section">
          <div className="card">
            <h2>Coming soon</h2>
            <p className="subtle">
              Detailed diagrams and request flows are on the way. This section will cover how frontends, gateways,
              and operators connect to the core ledger and shared infrastructure.
            <p className="subtle">
              This section will outline the layers, data flows, and handoffs between services. Detailed walkthroughs
              and diagrams are on the way.
      <DocsLayout
        title="Architecture"
        intro="How the layers of BlackRoad OS stitch together across frontends, services, and operators."
      >
        <section className="section">
          <h2>Layers at a glance</h2>
          <div className="card-grid">
            {layers.map((layer) => (
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

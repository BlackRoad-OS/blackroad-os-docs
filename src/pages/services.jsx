import Head from 'next/head';
import { osServices } from '../config/services';

const serviceLinks = {
  web: 'https://blackroad.systems',
  'prism-console': 'https://console.blackroad.systems',
  docs: 'https://docs.blackroad.systems',
};

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | BlackRoad OS Docs</title>
        <meta
          name="description"
          content="Service catalog with IDs, responsibilities, and entry points."
        />
      </Head>
      <header className="hero">
        <h1>Services Overview</h1>
        <p>Shared catalog of BlackRoad OS services and their roles.</p>
        <title>Services Overview | BlackRoad OS Docs</title>
      </Head>
      <header className="hero">
        <h1>Services Overview</h1>
        <p>
          A shared catalog of BlackRoad OS services with their IDs and responsibilities.
        </p>
      </header>
      <main className="main">
        <section className="section">
          <div className="card-grid">
            {osServices.map((service) => (
              <div key={service.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0 }}>{service.name}</h3>
                  <span className="badge">{service.id}</span>
                </div>
                <p className="subtle" style={{ marginTop: '8px' }}>{service.description}</p>
                {serviceLinks[service.id] && (
                  <p style={{ marginTop: '12px' }}>
                    <a href={serviceLinks[service.id]}>Visit entry point →</a>
                  </p>
                )}
                <div className="badge">{service.id}</div>
                <h3 style={{ marginBottom: '6px' }}>{service.name}</h3>
                <p className="subtle" style={{ marginTop: 0 }}>{service.description}</p>
                <p className="subtle" style={{ marginTop: '12px' }}>
                  Links and deeper docs coming soon.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

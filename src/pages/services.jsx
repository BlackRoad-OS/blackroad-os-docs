import Head from 'next/head';
import { osServices } from '../config/services';

export default function Services() {
  return (
    <>
      <Head>
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

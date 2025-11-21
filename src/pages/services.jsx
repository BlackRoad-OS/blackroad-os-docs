import Head from 'next/head';

const services = [
  {
    name: 'BlackRoad OS – Web',
    id: 'web',
    baseUrl: 'https://blackroad.systems',
    description: 'Public-facing site for the platform.',
  },
  {
    name: 'BlackRoad OS – Console',
    id: 'console',
    baseUrl: 'https://console.blackroad.systems',
    description: 'Prism console for operators and administrators.',
  },
  {
    name: 'BlackRoad OS – API',
    id: 'api',
    baseUrl: 'https://api.blackroad.systems',
    description: 'Public gateway that exposes platform capabilities.',
  },
  {
    name: 'BlackRoad OS – Core',
    id: 'core',
    baseUrl: 'https://core.blackroad.systems',
    description: 'Engine, ledger, and internal backbone.',
  },
  {
    name: 'BlackRoad OS – Operator',
    id: 'operator',
    baseUrl: 'https://operator.blackroad.systems',
    description: 'Workers and background jobs.',
  },
  {
    name: 'BlackRoad OS – Docs',
    id: 'docs',
    baseUrl: 'https://docs.blackroad.systems',
    description: 'This documentation portal.',
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | BlackRoad OS Docs</title>
      </Head>
      <header className="hero">
        <h1>Services</h1>
        <p>Catalog of core services with IDs, base URLs, and responsibilities.</p>
      </header>
      <main className="main">
        <section className="section">
          <div className="card">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Base URL</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td>{service.name}</td>
                    <td>
                      <span className="badge">{service.id}</span>
                    </td>
                    <td>
                      <a href={service.baseUrl}>{service.baseUrl}</a>
                    </td>
                    <td>{service.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}

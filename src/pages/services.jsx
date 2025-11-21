import Head from 'next/head';
import DocsLayout from '../components/DocsLayout';
import { osServices } from '../config/services';

const responsibilities = {
  core: 'Maintains ledger, internal state, and foundational APIs.',
  operator: 'Runs background jobs, queues, and agent workloads.',
  web: 'Publishes the public site, marketing, and uptime signals.',
  'prism-console': 'Exposes operator tooling for investigations and job review.',
  docs: 'Hosts this documentation hub and shared guides.',
};

const defaultEndpoints = ['/health', '/info', '/version'];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | BlackRoad OS Docs</title>
      </Head>
      <DocsLayout
        title="Services"
        intro="Catalog of the core BlackRoad OS services, their responsibilities, and the shared endpoints exposed by each."
      >
        <section className="section">
          <div className="card">
            <table className="table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>ID</th>
                  <th>Responsibility</th>
                  <th>Example endpoints</th>
                </tr>
              </thead>
              <tbody>
                {osServices.map((service) => (
                  <tr key={service.id}>
                    <td>{service.name}</td>
                    <td>
                      <span className="badge">{service.id}</span>
                    </td>
                    <td>{responsibilities[service.id]}</td>
                    <td>
                      <ul className="endpoint-list">
                        {defaultEndpoints.map((endpoint) => (
                          <li key={`${service.id}-${endpoint}`}>{endpoint}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </DocsLayout>
    </>
  );
}

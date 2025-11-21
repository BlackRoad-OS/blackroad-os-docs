import Layout from '@theme/Layout';
import React from 'react';
import serviceConfig from '../config/serviceConfig';

const services = [
  {
    name: 'BlackRoad OS Core',
    id: 'core',
    baseUrl: 'https://core.blackroad.systems',
    role: 'Ledger and primary business logic that anchors the OS.',
  },
  {
    name: 'Public API Gateway',
    id: 'api',
    baseUrl: 'https://api.blackroad.systems',
    role: 'Externally facing entry point that fronts the core.',
  },
  {
    name: 'Operator',
    id: 'operator',
    baseUrl: 'https://operator.blackroad.systems',
    role: 'Workers and background jobs that coordinate async workflows.',
  },
  {
    name: 'Prism Console',
    id: 'console',
    baseUrl: 'https://console.blackroad.systems',
    role: 'Operational console for teams to manage the platform.',
  },
  {
    name: 'Web',
    id: 'web',
    baseUrl: 'https://blackroad.systems',
    role: 'Public web experience for users and partners.',
  },
  {
    name: 'Docs',
    id: serviceConfig.SERVICE_ID,
    baseUrl: serviceConfig.SERVICE_BASE_URL,
    role: 'Documentation portal describing architecture, services, and integration guides.',
  },
];

export default function Services() {
  return (
    <Layout title="Services" description="Service catalog for BlackRoad OS">
      <main className="container margin-vert--lg">
        <header className="margin-bottom--lg">
          <h1>Services</h1>
          <p className="subtitle">Overview of the platform surfaces and their responsibilities.</p>
        </header>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Base URL</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td>{service.name}</td>
                  <td>{service.id}</td>
                  <td>{service.baseUrl}</td>
                  <td>{service.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
}

import Head from 'next/head';
import DocsLayout from '../components/DocsLayout';

export default function Deployment() {
  return (
    <>
      <Head>
        <title>Deployment | BlackRoad OS Docs</title>
      </Head>
      <DocsLayout
        title="Deployment"
        intro="High-level look at how BlackRoad OS services move from source to runtime."
      >
        <section className="section">
          <h2>Pipeline overview</h2>
          <p className="subtle">
            Deployments follow a simple path: GitHub holds source control, Railway builds and ships services, and
            Cloudflare fronts the public edges. This keeps environments consistent while leaving room for more
            automation later.
          </p>
        </section>

        <section className="section">
          <h2>Service expectations</h2>
          <div className="card">
            <ul className="docs-list">
              <li>
                <strong>Railway configuration:</strong> Each service tracks a <code>railway.json</code> file with its
                environment setup and deploy target.
              </li>
              <li>
                <strong>Health endpoints:</strong> Standard endpoints like <code>/health</code>, <code>/info</code>, and
                <code>/version</code> allow Railway and Cloudflare to verify readiness.
              </li>
              <li>
                <strong>Domains:</strong> Services sit under the <code>*.blackroad.systems</code> namespace so routing stays
                predictable.
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Flow in brief</h2>
          <div className="card">
            <p>GitHub → Railway build/deploy → Cloudflare edge → BlackRoad OS services</p>
            <p className="subtle" style={{ marginTop: '8px' }}>
              Keep code, config, and health surfaces aligned to make this path repeatable across all five services.
            </p>
          </div>
        </section>
      </DocsLayout>
    </>
  );
}

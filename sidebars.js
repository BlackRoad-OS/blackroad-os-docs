/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  introSidebar: [
    'intro/what-is-blackroad-os',
    'intro/vision',
    'intro/architecture-overview',
    'intro/versioning-strategy',
  ],
  systemSidebar: [
    {
      type: 'category',
      label: 'Core Backend',
      items: ['core/overview', 'core/endpoints', 'core/env-vars', 'core/deployment'],
    },
    {
      type: 'category',
      label: 'Web UI',
      items: ['web/overview', 'web/environment-config', 'web/routing', 'web/infra'],
    },
    {
      type: 'category',
      label: 'Prism Console',
      items: ['console/overview', 'console/structure', 'console/integrating-with-core'],
    },
    {
      type: 'category',
      label: 'Agents Runtime',
      items: ['agents/overview', 'agents/worker-architecture', 'agents/queue', 'agents/api', 'agents/versioning'],
    },
  ],
  infraSidebar: [
    {
      type: 'category',
      label: 'Infrastructure',
      items: ['infra/railway-architecture', 'infra/cloudflare-architecture', 'infra/domains', 'infra/ci-cd', 'infra/env-reference'],
    },
  ],
  enablementSidebar: [
    {
      type: 'category',
      label: 'Onboarding',
      items: ['onboarding/developer-setup', 'onboarding/repo-guide', 'onboarding/branching-strategy'],
    },
    'glossary',
    'style-guide',
  ],
};

module.exports = sidebars;

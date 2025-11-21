/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  primarySidebar: [
    {
      type: 'category',
      label: 'Introduction',
      link: {type: 'doc', id: 'intro/overview'},
      items: [
        'intro/what-is-blackroad-os',
        'intro/vision',
        'intro/architecture',
        'intro/architecture-overview',
        'intro/product-catalog',
        'intro/versioning-strategy',
        'intro/product-directory',
      ],
    },
    {
      type: 'category',
      label: 'Core Backend',
      link: {type: 'doc', id: 'core/overview'},
      items: ['core/api', 'core/endpoints', 'core/env-vars', 'core/deployment'],
    },
    {
      type: 'category',
      label: 'Web UI',
      link: {type: 'doc', id: 'web/overview'},
      items: ['web/env-vars', 'web/routing', 'web/environment-config', 'web/infra'],
    },
    {
      type: 'category',
      label: 'Prism Console',
      link: {type: 'doc', id: 'console/overview'},
      items: ['console/operators-view', 'console/structure', 'console/integrating-with-core'],
    },
    {
      type: 'category',
      label: 'Agents Runtime',
      link: {type: 'doc', id: 'agents/overview'},
      items: [
        'agents/runtime',
        'agents/queues',
        'agents/queue',
        'agents/worker-architecture',
        'agents/api',
        'agents/versioning',
      ],
    },
    {
      type: 'category',
      label: 'Operator Playbooks',
      link: {type: 'doc', id: 'operator/overview'},
      items: [],
    },
    {
      type: 'category',
      label: 'Infrastructure',
      link: {type: 'doc', id: 'infra/railway-architecture'},
      items: [
        'infra/railway',
        'infra/cloudflare',
        'infra/cloudflare-architecture',
        'infra/domains',
        'infra/environments',
        'infra/env-reference',
        'infra/railway-service-bootstrap',
        'infra/ci-cd',
        'infra/meta-api',
      ],
    },
    {
      type: 'category',
      label: 'Onboarding',
      link: {type: 'doc', id: 'onboarding/developer-setup'},
      items: ['onboarding/repos', 'onboarding/repo-guide', 'onboarding/branching-strategy'],
    },
    'glossary',
    'style-guide',
  ],
};

module.exports = sidebars;

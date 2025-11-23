import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/overview',
        'architecture/agents-and-orchestration',
        'architecture/finance-layer',
        'architecture/ps-sha-infinity',
      ],
    },
    {
      type: 'category',
      label: 'Infrastructure',
      items: [
        'infra/environments',
        'infra/dns-and-networking',
        'infra/deployments-and-runbooks',
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      items: [
        'dev/repos-and-services',
        'dev/local-development',
        'dev/extending-agents',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'ops/prism-console',
        'ops/incidents-and-incident-response',
      ],
    },
    {
      type: 'category',
      label: 'Compliance',
      items: [
        'compliance/regulated-overview',
        'compliance/audit-and-journaling',
      ],
    },
  ],
};

export default sidebars;

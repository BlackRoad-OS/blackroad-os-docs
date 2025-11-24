import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'docs-home',
    'getting-started',
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview/overview-blackroad-os-overview',
        'overview/overview-stack-map',
        'overview/overview-seasons',
      ],
    },
    {
      type: 'category',
      label: 'Operate the OS',
      items: [
        'ops/ops-prism-console',
        'ops/ops-operator-runtime',
        'ops/ops-infra-guide',
      ],
    },
    {
      type: 'category',
      label: 'Build on the OS',
      items: [
        'dev/dev-core-primitives',
        'dev/dev-api-overview',
        'dev/dev-agents-atlas-and-friends',
        'dev/dev-events-and-roadchain',
      ],
    },
    {
      type: 'category',
      label: 'Business & Vision',
      items: [
        'business/business-pain-points',
        'business/business-value-proposition',
      ],
    },
    {
      type: 'category',
      label: 'Meta',
      items: [
        'meta/meta-glossary',
        'meta/meta-master-codex-prompt',
        'meta/meta-architecture-decisions',
      ],
    },
  ],
};

export default sidebars;

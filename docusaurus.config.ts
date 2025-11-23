import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'BlackRoad OS Docs',
  tagline: 'AI-first operating system for 10,000+ virtual employees and one human orchestrator',
  url: 'https://blackroad.systems',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'blackroad-os',
  projectName: 'blackroad-os-docs',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/blackroad-os/blackroad-os-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'BlackRoad OS Docs',
      logo: {
        alt: 'BlackRoad OS',
        src: 'img/logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
        {href: 'https://github.com/blackroad-os/blackroad-os-web', label: 'Main Site', position: 'right'},
        {href: 'https://github.com/blackroad-os/blackroad-os-docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'BlackRoad OS',
          items: [
            {label: 'Architecture', to: '/architecture/overview'},
            {label: 'Finance Layer', to: '/architecture/finance-layer'},
            {label: 'Prism Console', to: '/ops/prism-console'},
          ],
        },
        {
          title: 'Build & Operate',
          items: [
            {label: 'Getting Started', to: '/getting-started'},
            {label: 'Local Development', to: '/dev/local-development'},
            {label: 'Deployments & Runbooks', to: '/infra/deployments-and-runbooks'},
          ],
        },
        {
          title: 'Compliance',
          items: [
            {label: 'Regulated Overview', to: '/compliance/regulated-overview'},
            {label: 'Audit & Journaling', to: '/compliance/audit-and-journaling'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} BlackRoad OS. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;

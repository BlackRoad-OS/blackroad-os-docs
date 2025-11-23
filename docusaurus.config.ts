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
            {label: 'Docs Home', to: '/'},
            {label: 'Stack Map', to: '/overview/stack-map'},
            {label: 'Seasons Overview', to: '/overview/seasons'},
          ],
        },
        {
          title: 'Operate the OS',
          items: [
            {label: 'Prism Console', to: '/ops/prism-console'},
            {label: 'Operator Runtime', to: '/ops/operator-runtime'},
            {label: 'Infra Guide', to: '/ops/infra-guide'},
          ],
        },
        {
          title: 'Build & Business',
          items: [
            {label: 'Core Primitives', to: '/dev/core-primitives'},
            {label: 'API Overview', to: '/dev/api-overview'},
            {label: 'Value Proposition', to: '/business/value-proposition'},
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

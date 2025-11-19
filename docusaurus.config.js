// @ts-check
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BlackRoad OS Handbook',
  tagline: 'Unified documentation for BlackRoad OS platform',
  url: 'https://blackroad-os-docs.example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'blackroad',
  projectName: 'blackroad-os-docs',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    repositories: {
      core: 'https://github.com/blackroad-os/blackroad-os-core',
      web: 'https://github.com/blackroad-os/blackroad-os-web',
      console: 'https://github.com/blackroad-os/blackroad-os-console',
      agents: 'https://github.com/blackroad-os/blackroad-os-agents',
      docs: 'https://github.com/blackroad-os/blackroad-os-docs'
    },
    deployment: {
      platform: 'Railway',
      healthcheck: '/health',
      version: '/version'
    }
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: 'vNext',
            },
          },
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
      title: 'BlackRoad OS Handbook',
      logo: {
        alt: 'BlackRoad OS',
        src: 'img/logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'introSidebar', position: 'left', label: 'Introduction'},
        {type: 'docSidebar', sidebarId: 'systemSidebar', position: 'left', label: 'Systems'},
        {type: 'docSidebar', sidebarId: 'infraSidebar', position: 'left', label: 'Infra'},
        {type: 'docSidebar', sidebarId: 'enablementSidebar', position: 'left', label: 'Enablement'},
        {href: 'https://github.com/blackroad-os/blackroad-os-docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'BlackRoad OS',
          items: [
            {label: 'Overview', to: '/'},
            {label: 'Core Backend', to: '/core/overview'},
            {label: 'Web UI', to: '/web/overview'},
          ],
        },
        {
          title: 'Operational',
          items: [
            {label: 'Infra', to: '/infra/railway-architecture'},
            {label: 'CI/CD', to: '/infra/ci-cd'},
            {label: 'Environment Reference', to: '/infra/env-reference'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/blackroad-os'},
            {label: 'Style Guide', to: '/style-guide'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} BlackRoad. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;

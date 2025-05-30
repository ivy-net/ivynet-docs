import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IvyNet',
  tagline: 'A unified machine intelligence layer for web3 hardware operators',
  favicon: 'img/ivy_favicon.png',

  // Set the production url of your site here
  url: 'https://docs.ivynet.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ivy-net', // Usually your GitHub org/user name.
  projectName: 'ivynet-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ivy-net',
        },
        //false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ivy-net',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'IvyNet Docs',
      logo: {
        alt: 'IvyNet Logo',
        src: 'img/ivylogodark.png',
      },
      items: [
        {
          to: 'docs/intro',
          label: 'Overview',
          position: 'left',
          activeBasePath: '/docs/',
        },
        {
          to: 'docs/client/introduction',
          label: 'Client',
          position: 'left',
          activeBasePath: 'docs/client/',
        },
        {
          to: 'docs/avsGuide/Overview',
          label: 'AVS Guide',
          position: 'left',
          activeBasePath: 'docs/avsGuide/',
        },
        {
          to: 'docs/devnet/Introduction',
          label: 'Devnet',
          position: 'left',
          activeBasePath: 'docs/devnet/',
        },
        // Enable for future blog posts - standards blogs
        // { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/ivy-net/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Website',
          items: [
            {
              label: 'Ivynet.dev',
              to: 'https://ivynet.dev',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord - Coming Soon',
              href: 'https://ivynet.dev',
            },
            {
              label: 'X/Twitter',
              href: 'https://x.com/ivynet_dev/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ivy-net/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Address Labs Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

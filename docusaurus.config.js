/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Neutron JS",
  tagline: "The best tool to speed up your react project!",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "neutronjs",
  projectName: "neutron-cli",
  themeConfig: {
    navbar: {
      title: "Neutron JS",
      logo: {
        alt: "Neutron Logo",
        src: "img/logo.svg"
      },
      links: [
        {
          to: "docs/introduction/getting-started",
          label: "Docs",
          position: "left"
        },
        {
          href: "https://www.npmjs.com/package/@neutron.js/cli",
          label: "Npm",
          position: "right"
        },
        {
          href: "https://github.com/neutronjs/neutron-cli",
          label: "Github",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Facebook Open Source Logo",
        src: "https://docusaurus.io/img/oss_logo.png"
      },
      copyright: `Copyright © ${new Date().getFullYear()} Neutron JS.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/styles.css")
        }
      }
    ]
  ]
}

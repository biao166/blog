const archives = [
  'git-config',
  'work-environment-initialization',
  'javascript-style',
  'editorconfig-guideline',
  'node-pre-gyp-binary',
  'node-production',
  'update-node-and-npm',
  'git-and-ssh-key-multiple-account-configuration'
]

module.exports = {
  title: 'Li Biao',
  description: 'Just playing around',

  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    repo: 'biao166',
    repoLabel: 'GITHUB',

    lastUpdated: 'Last Updated',

    serviceWorker: true,

    sidebarDepth: 2,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Archives', link: `/archives/${archives[0]}` }
    ],

    sidebar: {
      '/archives/': archives
    },
  }
}

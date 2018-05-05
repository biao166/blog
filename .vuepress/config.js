const archives = [
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

  serviceWorker: true,
  themeConfig: {
    repo: 'biao166',
    repoLabel: 'GITHUB',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Archives', link: `/archives/${archives[0]}` }
    ],

    sidebar: {
      '/archives/': archives
    }
  }
}

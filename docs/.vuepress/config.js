const { description } = require('../../package')

module.exports = {
  title: 'Practical deep learning using Tensorflow',
  description: description,
  dest: 'dist',
  base: '/practical-tensorflow-guide/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: 'wmeints/practical-tensorflow-guide',
    repoLabel: 'Contribute!',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsDir: 'docs',
    docsBranch: 'main',
    lastUpdated: false,
    nextLinks: true,
    prevLinks: true, 
    nav: [
      {
        text: 'About the author',
        link: './about.md',
      }
    ],
    sidebar: [
      { 
        title: 'Getting started',
        path: '/getting-started/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/getting-started/introduction', 'Introduction'],
          ['/getting-started/setting-up-your-machine', 'Setting up your machine'],
          ['/getting-started/exploring-tensorflow', 'Exploring TensorFlow'],
        ]
      },
      {
        title: 'Building deep learning models',
        path: '/building-deep-learning-models/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/building-deep-learning-models/working-with-datasets', 'Working with datasets'],
          ['/building-deep-learning-models/building-a-feed-forward-network', 'Building a feed-forward network'],
          ['/building-deep-learning-models/validating-model-performance', 'Validating model performance'],
          ['/building-deep-learning-models/working-with-images', 'Working with images'],
          ['/building-deep-learning-models/working-with-sequences', 'Working with sequences'],
          ['/building-deep-learning-models/using-model-explainers', 'Using model explainers']
        ]
      },
      {
        title: 'Deploying to production',
        path: '/deploying-to-production/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/deploying-to-production/managing-deep-learning-experiments', 'Managing deep learning experiments'],
          ['/deploying-to-production/testing-deep-learning-projects', 'Testing deep learning projects'],
          ['/deploying-to-production/using-tensorflow-extended', 'Using TensorFlow Extended'],
          ['/deploying-to-production/monitoring-deep-learning-models', 'Monitoring deep learning models']
        ]
      }
    ],
    showAllHeaders: true
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

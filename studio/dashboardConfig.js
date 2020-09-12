export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5c125eda13e320f9ccbebb',
                  title: 'Sanity Studio',
                  name: 'hc-blog-v-2-studio',
                  apiId: 'b1895d88-a60e-49bd-b410-66860215b495'
                },
                {
                  buildHookId: '5f5c125ea21a9725c4b98483',
                  title: 'Blog Website',
                  name: 'hc-blog-v-2',
                  apiId: '4f3f4d1f-fae6-4282-95d8-b78b96e9ad22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dundas/hc-blog-v2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://hc-blog-v-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

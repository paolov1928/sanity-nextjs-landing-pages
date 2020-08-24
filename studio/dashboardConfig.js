export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f43815e442f8ed4a5c9c1aa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-i8dsvf36',
                  apiId: '8206a9ae-2c5e-44ab-abf2-0ece8383ffe4'
                },
                {
                  buildHookId: '5f43815e05ebe99cfeed8772',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xhuabr1z',
                  apiId: '51001598-9030-4065-84a9-a6499959f91b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paolov1928/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xhuabr1z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

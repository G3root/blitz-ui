import { Routes } from '~/utils';

export const componentsSidebar: Routes = {
  routes: [
    {
      title: 'Getting Started',
      path: '/docs/getting-started',
      routes: []
    },
    {
      title: 'Components',
      heading: false,
      routes: [
        {
          title: 'Layout',
          path: '/docs/components/layout',
          routes: [
            {
              title: 'Center',
              path: '/docs/components/layout/center'
            }
          ]
        },
        {
          title: 'Forms',
          path: '/docs/components/forms',
          routes: [
            {
              title: 'Textarea',
              path: '/docs/components/forms/textarea'
            }
          ]
        },
        {
          title: 'Feedback',
          path: '/docs/components/feedback',
          routes: [
            {
              title: 'Spinner',
              path: '/docs/components/feedback/spinner'
            }
          ]
        },

        {
          title: 'Disclosure',
          path: '/docs/components/disclosure',
          routes: [
            {
              title: 'Visually Hidden',
              path: '/docs/components/disclosure/visually-hidden'
            }
          ]
        }
      ]
    }
  ]
};

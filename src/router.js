Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/demo',
      component: () => {
        return import('./views/Test/layout')
      },
      children: [
        {
          path: 'profile-basic',
          component: () => {
            return import('./views/Test/ProfileBasic')
          },
        },
        {
          path: 'table-list',
          component: () => {
            return import('./views/Test/TableList')
          },
        },
        {
          path: 'form-advance',
          component: () => {
            return import('./views/Test/FormAdvance')
          },
        },
      ],
    },
    {
      path: '/test-tpl',
      component: () => {
        return import('./views/TestTpl/layout')
      },
      children: [
        {
          path: 'list/:page',
          component: () => {
            return import('./views/TestTpl/list')
          },
        },
        {
          path: 'detail/:mode/:id',
          component: () => {
            return import('./views/TestTpl/detail')
          },
        },
      ],
    },
    {
      path: '/income/:id',
      name: 'income',
      component: () => {
        return import('./views/Income')
      },
    },
    {
      path: '/account',
      name: 'account',
      component: () => {
        return import('./views/Account')
      },
    },
    {
      path: '/tactic',
      name: 'tactic',
      component: () => {
        return import('./views/Tactic')
      },
    },
    {
      path: '/team-players',
      name: 'home',
      component: () => {
        return import('./views/TeamPlayers')
      },
    },
    {
      path: '/',
      name: 'rules',
      component: () => {
        return import('./views/Rules')
      },
    },
    {
      path: '/system-params',
      component: () => {
        return import('./views/SystemParams/layout')
      },
      children: [
        {
          path: 'list/:page',
          component: () => {
            return import('./views/SystemParams/list')
          },
        },
        {
          path: 'detail/:mode/:id',
          component: () => {
            return import('./views/SystemParams/detail')
          },
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => {
        return import('./views/About')
      },
    },
    {
      path: '/element',
      name: 'element',
      component: () => {
        return import('./views/ElementTest')
      },
    },
    {
      path: '/users',
      name: 'users',
      component: () => {
        return import('./views/Users')
      },
    },
  ],
})

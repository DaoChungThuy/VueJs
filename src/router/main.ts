const main = [
  {
    path: '/',
    component: () => import('../Layout/standard_layout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import('../views/DetailView.vue')
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('../views/MyAccountView.vue')
      },
      {
        path: 'my_course',
        name: 'my_course',
        component: () => import('../views/MyCoureseView.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/SearchView.vue')
      }
    ]
  }
]

export default main

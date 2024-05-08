const main = [
  {
    path: '/',
    component: () => import('../Layout/standard_layout.vue'),
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }
    ]
  }
]

export default main

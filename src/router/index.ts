import { createRouter, createWebHashHistory } from 'vue-router';
//createRouter方法,用于创建路由器实例，可以管理多个路由
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/home/home.vue'),
      name: 'home'
    },
    {
      path: '/hospital',
      component: () => import('@/views/hospital/hospital.vue'),
      children: []
    },
    {
      path: '/user',
      component: () => import('@/views/user/user.vue'),
      children: []
    }
  ]
})
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'advanced',
      component: () => import(/* webpackChunkName: "advanced" */ './views/Advanced.vue'),
    },
    {
      path: '/basic',
      name: 'basic',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "basic" */ './views/Basic.vue'),
    },
  ],
});

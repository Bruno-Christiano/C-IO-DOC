import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Agendar from '../pages/Agendar.vue';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hideNavbar: true,
    },
    // component: () => import(/* webpackChunkName: "about" */ '../pages/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // beforeEnter: (to, from, next) => {
    //   if (store.state.authentication == false) {
    //     next('/login');
    //   } else {
    //     next();
    //   }
    // },
  },
  {
    path: '/agendar',
    name: 'FormAgendamento',
    component: Agendar,
  },
  {
    path: '/edit',
    name: 'Edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../pages/Edit.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from) => {
//   console.log(to);
//   console.log(from);
// });

export default router;

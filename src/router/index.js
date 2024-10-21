import { createRouter, createWebHistory } from "vue-router";

import Layout from '@/components/layout.vue';
import Dashboard from "../pages/master/dashboard.vue";
import Product from "../pages/master/product.vue";
import Login from "../pages/master/login.vue";

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'product',
        name: 'Product',
        component: Product
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  console.log(to);

  if (!token && to.name !== 'Login') {
    next();
  } else {
    next();
  }
});

export default router;

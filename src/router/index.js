import { createRouter, createWebHistory } from "vue-router";

import Layout from '@/components/layout.vue';
import Dashboard from "../pages/master/dashboard.vue";
import Product from "../pages/master/product.vue";

const routes = [
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

const router = Router();
export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
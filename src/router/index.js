import { createRouter, createWebHistory } from "vue-router";

import dashboard from "../pages/master/dashboard.vue";
const routes = [
    {
        name: "Dashboard",
        path: "/",
        component: dashboard
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
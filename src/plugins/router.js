import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/services',
        component: () => import("@/pages/ServicesPage")
    },
    {
        path: '/Rental',
        component: () => import("@/pages/RentalPage")
    },
    {
        path: '/about',
        component: () => import("@/pages/AboutPage")
    },
    {
        path: '/contacts',
        component: () => import("@/pages/ContactsPage")
    },
    {
        path: '/concrete-info/:id',
        component: () => import("@/pages/ConcretePage")
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
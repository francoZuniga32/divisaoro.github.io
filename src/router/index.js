import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sobre from "../views/Sobre.vue";
import Ecommerce from "../views/Ecommerce.vue";
import Empresas from "../views/Empresas.vue";
import Creadores from "../views/Creadores.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/sobre",
        name: "Sobre",
        component: Sobre
    },
    {
        path: "/ecommerce",
        name: "Ecommerce",
        component: Ecommerce
    },
    {
        path: "/empresas",
        name: "Empresas",
        component: Empresas
    },
    {
        path: "/creadores",
        name: "Creadores",
        component: Creadores
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
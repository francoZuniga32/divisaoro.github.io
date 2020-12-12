import Vue from "vue";
import VueRouter from "vue-router";
import Compra from "../views/Compra.vue";
import Home from "../views/Home.vue";
import Mezcla from "../views/Mezcla.vue";
import Produccion from "../views/Produccion.vue";
import Mezclamastering from "../views/mezclamastering.vue";
import Mezclamasteringproduccion from "../views/Mezclamasteringproduccion.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/compra",
    name: "Compra",
    component: Compra
  },
  {
    path: "/mezcla",
    name: "Mezcla",
    component: Mezcla
  },
  { 
    path: "/produccion",
    name : "Produccion",
    component: Produccion
  },
  { 
    path: "/mezclamastering",
    name: "Mezcla Mastering",
    component: Mezclamastering
  },
  { 
    path: "/mezclamasteringproduccion",
    name: "Mezcla Mastering Produccion",
    component: Mezclamasteringproduccion
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

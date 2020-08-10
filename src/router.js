import Vue from "vue";
import VueRouter from "vue-router";
import ErrorPage from "./components/ErrorPage";
import MainDoor from "./components/MainDoor";
import ShopList from "./components/ShopList";
import Shop from "./components/Shop";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { 
      path: "/", 
      name: "maindoor",
      component: MainDoor 
    },
    { 
      path: "/shoplist/:id", 
      name: "shoplist",
      component: ShopList 
    },
    {
      path: "/shop", 
      name: "shop",
      component: Shop
    },
    {
      path: "*",
      name: "",
      component: ErrorPage
    }
  ]
});

export default router;
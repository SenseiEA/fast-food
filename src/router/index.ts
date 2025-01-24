import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import FolderPage from "@/views/FolderPage.vue";
import ItemPage from "@/views/ItemPage.vue";
import Modal from "@/views/Modal.vue";
import Checkout from "@/views/Checkout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/folder",
    component: FolderPage,
  },
  {
    path: "/folder/:id",
    component: FolderPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/item",
    component: ItemPage,
  },
  {
    path: "/modal-success",
    component: Modal,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import InstanceExample from "@/components/InstanceExample.vue";
import BindingExample from "@/components/BindingExample.vue";
import EventHandlingExample from "@/components/EventHandlingExample.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/instance", component: InstanceExample },
  { path: "/binding", component: BindingExample },
  { path: "/eventhandling", component: EventHandlingExample },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

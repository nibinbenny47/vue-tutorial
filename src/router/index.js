import Vue from "vue";
import VueRouter from "vue-router";
import InstanceExample from "@/components/InstanceExample.vue";
import BindingExample from "@/components/BindingExample.vue";
import EventHandlingExample from "@/components/EventHandlingExample.vue";
import ComputedExample from "@/components/ComputedExample.vue";
import WatcherExample from "@/components/WatcherExample.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/instance", component: InstanceExample },
  { path: "/binding", component: BindingExample },
  { path: "/eventhandling", component: EventHandlingExample },
  { path: "/computedexample", component: ComputedExample },
  { path: "/watcherexample", component: WatcherExample },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

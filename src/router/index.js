import Vue from "vue";
import VueRouter from "vue-router";
import InstanceExample from "@/components/InstanceExample.vue";
import BindingExample from "@/components/BindingExample.vue";
import EventHandlingExample from "@/components/EventHandlingExample.vue";
import ComputedExample from "@/components/ComputedExample.vue";
import ComputedMethodsExample from "@/components/ComputedMethodsExample.vue";
import WatcherExample from "@/components/WatcherExample.vue";
import DynamicClassExample from "@/components/DynamicClassExample.vue";
import LifeCycleHookExample from "@/components/LifeCycleHookExample.vue";
import VuexExample from "@/components/VuexExample.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/instance", component: InstanceExample },
  { path: "/binding", component: BindingExample },
  { path: "/eventhandling", component: EventHandlingExample },
  { path: "/computedexample", component: ComputedExample },
  { path: "/computedmethodsexample", component: ComputedMethodsExample },
  { path: "/watcherexample", component: WatcherExample },
  { path: "/dynamicclassexample", component: DynamicClassExample },
  { path: "/lifecyclehookexample", component: LifeCycleHookExample },
  { path: "/vuexexample", component: VuexExample },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

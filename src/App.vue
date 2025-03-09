<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nav>
      <router-link to="/instance">Instance Example</router-link> |
      <router-link to="/binding">Binding Example</router-link> |
      <router-link to="/eventhandling">EventHandling Example</router-link> |
      <router-link to="/computedexample">Computed Example</router-link> |
      <router-link to="/watcherexample">Watcher Example</router-link> |
    </nav>
    <router-view />
    <h3>Props Example</h3>
     <PropsExample message="Hello from Parent!" />
    
  </div>
</template>

<script>

import PropsExample from './components/PropsExample.vue'

export default {
  name: 'App',
  components: {
    PropsExample
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

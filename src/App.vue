<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <InstanceExample />
    <BindingExample />
  </div>
</template>

<script>
import InstanceExample from './components/InstanceExample.vue'
import BindingExample from './components/BindingExample.vue'

export default {
  name: 'App',
  components: {
    InstanceExample,
    BindingExample
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

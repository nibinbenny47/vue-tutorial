<template>
    <div>
      <!-- One-way binding using interpolation -->
      <div>
        <h4>One-way Binding Example</h4>
        <h1>{{ message }}</h1>
      </div>
  
      <!-- Two-way binding -->
      <div>
        <h4>Two-way Binding Example</h4>

        <input v-model="name" placeholder="Enter your name" />
        <p v-if="name">Hello, {{ name }}!</p>
      </div>
      <div>
        <h4>Conditional Data Binding Example</h4>

        <button @click="showText = !showText">Toggle Message</button>
        <p v-if="showText">This is a conditional message.</p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Hello Vue.js!", // Fixed spacing for better readability
        name: "",
        showText: true
      };
    },
  };
  </script>
  
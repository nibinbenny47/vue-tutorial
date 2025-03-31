<template>
    <div>
      <!-- One-way binding using interpolation ------------------------>
        <div>
            <h4>One-way Binding Example</h4>
            <h1>{{ message }}</h1>
        </div>
  
      <!-- Two-way binding ---------------------------------------------->
        <div>
            <h4>Two-way Binding Example</h4>

            <input v-model="name" placeholder="Enter your name" />
            <p v-if="name">Hello, {{ name }}!</p>
        </div>

      <!-- v-bind Examples -->
      <div>
        <h4>v-bind Example</h4>
        <!-- Binding the disabled attribute on a button dynamically -->
        <button v-bind:disabled="isDisabled">Click Me</button>
      </div>

      <!-- Conditional binding ------------------------------------------->
        <div>
            <h4>Conditional Data Binding Example</h4>
            <button @click="showText = !showText">Toggle Message</button>
            <p v-if="showText">This is a conditional message.</p>
        </div>
        <!-- List Rendering----------------------------------------------- -->
        <div>
            <h4>List Rendering Example</h4>
            
            <li v-for="(fruit, index) in fruits" :key="index">
                {{ index + 1 }}. {{ fruit }}
            </li>
           
        </div>

        
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Hello Vue.js!", 
        name: "",
        showText: false,
        isDisabled: false,
        fruits: ['Apple', 'Banana', 'Cherry']
      };
    },
  };
  </script>
  
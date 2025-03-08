<template>
  <div>
    <h2>Vue Event Handling Example</h2>
    <p>{{ message }}</p>

    <!-- Using v-on -->
    <button v-on:click="changeMessage">Click Me</button><br>

    <!-- Using shorthand (@click) -->
     <hr>
    <button @click="resetMessage">Reset</button>
    <hr>


    <!-- pass arguments  -->
    <button @click="updateMessage('Vue is awesome!')">Change Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  methods: {
    changeMessage() {
      this.message = 'You clicked the button!';
    },
    resetMessage() {
      this.message = 'Hello, Vue!';
    },
    updateMessage(newMessage) {
      this.message = newMessage;
    }
  }
};
</script>

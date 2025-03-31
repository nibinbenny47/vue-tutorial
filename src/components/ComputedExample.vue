<template>
  <div>
    <h2>Computed Example</h2>
    <input type="text" v-model="firstName" placeholder="Enter First Name">
    <input type="text" v-model="lastName" placeholder="Enter Last Name">
    <p>Full Name: {{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    };
  },
  computed: {
    fullName() {
      console.log("Computed property executed"); // Runs only when firstName or lastName changes
      return `${this.firstName} ${this.lastName}`.trim();
    }
  }
};
</script>

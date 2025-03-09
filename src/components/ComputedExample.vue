<template>
  <div>
    <input type="text" v-model="firstName" placeholder="Enter First Name">
    <input type="text" v-model="lastName" placeholder="Enter Last Name">
    <p>Full Name: {{ getFullName() }}</p>
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
  methods: {
    getFullName() {
      console.log("Method executed"); // Runs on every render
      return this.firstName + ' ' + this.lastName;
    }
  }
};
</script>

<template>
  <div>
    <h2>Computed Properties Example</h2>
    
    <input type="text" v-model="firstName" placeholder="Enter First Name">
    <input type="text" v-model="lastName" placeholder="Enter Last Name">
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
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
      return this.firstName + ' ' + this.lastName;
    }
  }
};
</script>

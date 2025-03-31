<template>
  <div>
    <h2>Methods vs Computed Example</h2>
    <input type="text" v-model="firstName" placeholder="Enter First Name" />
    <input type="text" v-model="lastName" placeholder="Enter Last Name" />

    <p>Computed Full Name: {{ fullName }}</p>
    <p>Method Full Name: {{ getFullName() }}</p>

    <button @click="incrementCounter">Click Me</button>
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      counter: 0,
    };
  },
  computed: {
    fullName() {
      console.log('Computed executed');
      return `${this.firstName} ${this.lastName}`.trim();
    }
  },
  methods: {
    getFullName() {
      console.log('Method executed');
      return `${this.firstName} ${this.lastName}`.trim();
    },
    incrementCounter() {
      this.counter++;
    }
  }
};
</script>

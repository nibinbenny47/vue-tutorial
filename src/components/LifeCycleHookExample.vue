<template>
  <div>
    <h2>Vue Lifecycle Hooks</h2>
    <p>Message: {{ message }}</p>
    <button @click="updateMessage">Change Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!"
    };
  },
  methods: {
    updateMessage() {
      this.message = "Updated Message!";
    }
  },
  beforeCreate() {
    console.log("beforeCreate: Data not initialized yet.");
  },
  created() {
    console.log("created: Data is now available!", this.message);
  },
  beforeMount() {
    console.log("beforeMount: Template is compiled but not in DOM yet.");
  },
  mounted() {
    console.log("mounted: Component is now in the DOM!");
  },
  beforeUpdate() {
    console.log("beforeUpdate: Data is changing, but DOM is not updated yet.");
  },
  updated() {
    console.log("updated: DOM has been updated!");
  },
  beforeDestroy() {
    console.log("beforeDestroy: Component is about to be destroyed.");
  },
  destroyed() {
    console.log("destroyed: Component is now removed.");
  }
};
</script>

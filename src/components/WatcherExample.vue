<template>
  <div>
    <h2>Watcher Example - Counter</h2>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">Increase Counter</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(`Counter changed from ${oldValue} to ${newValue}`);
    }
  }
};
</script>

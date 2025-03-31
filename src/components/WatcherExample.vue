<template>
  <div>
    <h2>Watcher Example - Counter</h2>
    <p :class="{ active: isActive }">Counter: {{ counter }}</p>
    <button @click="counter++">Increase Counter</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      isActive: true

    };
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(`Counter changed from ${oldValue} to ${newValue}`);
    }
  }
};
</script>

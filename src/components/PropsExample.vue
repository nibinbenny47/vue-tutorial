<template>
  <div>
    <h4>Child Component</h4>
    <p :class="{ active: isActive }">Message from Parent: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    };
  },
  props: ["message"] // Receiving the prop from parent
};
</script>


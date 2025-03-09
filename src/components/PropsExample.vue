<template>
  <div>
    <h4>Child Component</h4>
    <p>Message from Parent: {{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ["message"] // Receiving the prop from parent
};
</script>

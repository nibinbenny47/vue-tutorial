<template>
  <div>
    <h2 :class="{ active: isActive }">Dynamic Class Example</h2>
    <button @click="isActive = !isActive">Toggle Class</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style scoped>
.active {
  color: white;
  background-color: rgb(5, 82, 46);
  padding: 10px;
}
</style>

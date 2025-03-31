<template>
  <div>
    <p>{{ userInfo }}</p>
    <button @click="asyncUpdateName('Jane Smith')">Update Name</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['name', 'age']),
    ...mapGetters( ['userInfo'])
  },
  methods: {
    ...mapActions( ['asyncUpdateName'])
  }
};
</script>

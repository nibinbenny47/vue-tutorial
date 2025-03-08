<template>
    <div id="app">
        <p>{{ message }}</p>
        <button @click="changeMessage">Click Me</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Welcome to Vue 2!'
        };
    },
    methods: {
        changeMessage() {
            this.message = 'You clicked the button!';
        }
    }
};
</script>

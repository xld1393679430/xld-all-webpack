<template>
  <div class="vue-container">
    <h2>vue</h2>
    <p class="message">{{ message }}</p>
  </div>
</template>

<script lang="typescript">
export default {
  data() {
    return { message: "Hello World" };
  },
};
</script>

<style lang="less">
.vue-container {
  color: red;
  .message {
    color: lightgreen;
  }
}
</style>

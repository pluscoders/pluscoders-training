<template>
  <nav class="access-panel__tabs">
    <router-link to="/login">Log in</router-link>
    <router-link to="/register">Register</router-link>
  </nav>
</template>

<script>
export default {
  name: "AccessView",
};
</script>

<style scoped lang="scss">
  @import "./scss/access-panel.scss";
</style>

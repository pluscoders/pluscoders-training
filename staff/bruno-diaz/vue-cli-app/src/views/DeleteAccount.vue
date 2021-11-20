<template>
  <form class="access-panel__content" @submit.prevent="onDeleting">
    <span class="form__feedback" v-if="$store.state.feedback">{{ $store.state.feedback }}</span>
    <span class="form__element">
      <label for="#password">Password</label>
      <input
        v-model="password"
        id="password"
        type="password"
        class="form__element--input"
        required
      />
    </span>
    <button type="submit" class="button button__danger">Delete account</button>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      password: null,
    };
  },

  methods: {
    async onDeleting() {      
      const { password } = this;

      await this.$store.dispatch("unregister", { password });

      sessionStorage.clear();
      this.$store.state.user = null;
      this.$router.push({ path: "/login" });
    }
  },

  computed: mapState({
    user: (state) => state.user,
    feedback: (state) => state.feedback,
  }),
};
</script>

<style scoped lang="scss">
  @import "./scss/access-panel.scss";
</style>

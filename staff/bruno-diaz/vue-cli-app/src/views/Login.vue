<template>
  <section class="access-panel">
    <AccessView />

    <form class="access-panel__content" @submit.prevent="onLogin">
      <span class="form__feedback" v-if="$store.state.feedback">{{ $store.state.feedback }}</span>
      <span class="form__element">
        <label for="#email">Email</label>
        <input
          v-model="email"
          id="email"
          type="email"
          class="form__element--input"
          required
        />
      </span>
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
      <button type="submit" class="button button__cta">Log in</button>
    </form>
  </section>
</template>

<script>
import { mapState } from "vuex";
import AccessView from "@/components/AccessView.vue";

export default {
  components: {
    AccessView,
  },

  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    async onLogin() {
      const { email, password } = this;

      await this.$store.dispatch("authenticate", { email, password });

      this.user && this.$router.push({ path: "/" });
    },
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

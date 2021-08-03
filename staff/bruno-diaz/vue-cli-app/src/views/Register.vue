<template>
  <section class="access-panel">
    <AccessView />

    <form class="access-panel__content" @submit.prevent="onRegister">
      <span class="form__feedback" v-if="$store.state.feedback">{{ $store.state.feedback }}</span>
      <span class="form__element">
        <label for="#fullname">Fullname</label>
        <input
          v-model="fullname"
          id="fullname"
          type="text"
          class="form__element--input"
          required
        />
      </span>
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
      <button type="submit" class="button button__cta">Register</button>
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
      fullname: null,
      email: null,
      password: null,
    };
  },

  methods: {
    async onRegister() {
      const { fullname, email, password } = this;

      await this.$store.dispatch("register", { fullname, email, password });

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
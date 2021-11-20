<template>
  <section>
    <form class="access-panel__content" @submit.prevent="onSaving">
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
      <span class="form__element">
        <label for="#newpassword">New password</label>
        <input
          v-model="newpassword"
          id="newpassword"
          type="password"
          class="form__element--input"
          required
        />
      </span>
      <button type="submit" class="button button__cta">Change password</button>
    </form>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
  },

  data() {
    return {
      password: null,
      newpassword: null,
    };
  },

  methods: {
    async onSaving() {
      const { password, newpassword } = this;

      await this.$store.dispatch("changepassword", { password, newpassword });
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

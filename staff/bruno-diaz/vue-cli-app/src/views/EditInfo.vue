<template>
  <section>
    <form class="access-panel__content" @submit.prevent="onSaving">
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
      <button type="submit" class="button button__cta">Save changes</button>
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
      fullname: null,
      email: null,
    };
  },

  methods: {
    async onSaving() {
      console.log('It Works!')
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

<template>
  <section>
    Edit password
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
  },

  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {},

  computed: mapState({
    user: (state) => state.user,
    feedback: (state) => state.feedback,
  }),
};
</script>

<style scoped lang="scss">
  // @import "./scss/access-panel.scss";
</style>

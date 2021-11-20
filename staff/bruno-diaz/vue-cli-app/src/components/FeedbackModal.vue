<template>
  <div class="feedback">
      <p class="feedback__text">{{ $store.state.alert }}</p>
      <button class="feedback__button" @click="$emit('closeFeedback')">X</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FeedbackModal",
  props: ['text'],

  mounted() {
		setTimeout(() => { 
        this.$emit('closeFeedback'); 
    }, 2500);
	},

  computed: mapState({
    user: (state) => state.user,
    feedback: (state) => state.feedback,
  }),
};
</script>

<style scoped lang="scss">
.feedback {
  position: fixed;
  top: 0;
  left: 16px;
  right: 16px;
  background-color: rgba(255, 250, 179, .95);
  border: 1px solid #BAB9A7;
  border-top: none;
  border-radius: 0 0 20px 20px;
  padding: 16px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__text {
    color: #5A5846;
  }

  &__button {
    background-color: transparent;
    border: 0;
    color: #7B7962;
    &:hover {
      color: #000000;
    }
  }
}
</style>

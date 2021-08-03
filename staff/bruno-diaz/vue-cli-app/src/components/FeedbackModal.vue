<template>
  <div class="modal">
    <div class="modal__wrapper">
      <h4 class="modal__title">Error</h4>
      <p class="modal__text">{{ text }}</p>
      <button class="modal__button" @click="$emit('close')">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackModal",
  props: ['text'],
};
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.25);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper{
    max-width: 500px;
    width: 50%;
    background-color: #FFFFFF;
    padding: 24px;
  }

  &__title {
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid pink;
  }

  &__text {
    margin-bottom: 24px;
  }

  &__button {
    padding: 4px 16px;
  }
}
</style>

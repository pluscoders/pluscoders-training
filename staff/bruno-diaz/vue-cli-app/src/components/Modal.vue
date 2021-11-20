<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__header">
        <h4 class="modal__title">Ejemplo</h4>
        <button class="modal__button modal__button--close" @click="$emit('closeModal')">X</button>
      </div>
      <div class="modal__body">
        <p class="modal__text">Esto es un texto de ejemplo.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ['text'],
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.25);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {
    position: relative;
    max-width: 500px;
    width: 50%;
    background-color: #FFFFFF;
    padding: 24px;
  }

  &__header {
    padding-bottom: 8px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(0,0,0,0.25);
  }

  &__body {
    padding: 8px 0;
  }

  &__text {
    margin-bottom: 24px;
  }

  &__button {
    &--close {
      border: none;
      background-color: transparent;
      padding: 16px;
      position: absolute;
      top: 4px;
      right: 8px;
      opacity: 0.5;

      &:hover { opacity: 1; }
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>

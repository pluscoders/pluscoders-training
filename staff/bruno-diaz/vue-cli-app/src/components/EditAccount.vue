<template>
  <div class="modal">
    <div class="tabs-panel">
      <div class="tabs-panel__header">
        <h4 class="tabs-panel__title">Edit account</h4>
        <button class="tabs-panel__button tabs-panel__button--close" @click="$emit('closeEditAccount')">X</button>
      </div>
      <div class="tabs-panel__body">
        <div class="tabs-panel__tabs">
          <button v-for="tab in tabs" :key="tab" @click="selected = tab;" class="tabs-panel__tab">
            {{ tab }}
          </button>
        </div>
        <component :is="selected"></component>
      </div>
    </div>
  </div>
</template>

<script>
import EditInfo from "../views/EditInfo";
import EditPassword from "../views/EditPassword";
import DeleteAccount from "../views/DeleteAccount";

export default {
  name: "EditAccount",

  components: {
    EditInfo,
    EditPassword,
    DeleteAccount,
  },

  data: function() {
    return {
      tabs: ["EditInfo", "EditPassword", "DeleteAccount"],
      selected: "EditInfo",
    }
  },
};
</script>

<style scoped lang="scss">
@import "./scss/modal.scss";
@import "./scss/tabs-panel.scss";
</style>

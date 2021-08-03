<template>
  <main>
    <header id="header">
      <h1 class="header__logo">Icon</h1>
      <span
        class="dropdownMenu"
        v-if="user"
        :class="{ dropdownMenu__opened: active }"
      >
        <span class="dropdownMenu__link" @click="active = !active">
          Hola {{ this.user && this.user.fullname }}
          <i class="fa fa-angle-down"></i>
        </span>
        <nav class="dropdownMenu__menu">
          <div class="dropdownMenu__item" @click="showEditAccount = true">
            Edit account
            <!-- <i class="fa fa-pencil-square-o"></i> -->
          </div>
          <div class="dropdownMenu__item" @click="onLogout">
            Log out
            <!-- <i class="fa fa-sign-out"></i> -->
          </div>
        </nav>
      </span>
    </header>

    <router-view />

    <Loading v-if="this.$store.state.loading" />
    <!-- <FeedbackModal v-if="this.$store.state.feedback" @close="this.$store.state.feedback = null" :text="this.$store.state.feedback" /> -->
    <EditAccount v-if="showEditAccount" @closeEditAccount="showEditAccount = null" />
    <Modal v-if="showModal" @closeModal="showModal = null" />
  </main>
</template>

<script>
import { mapState } from "vuex";
import Loading from '@/components/Loading.vue';
// import FeedbackModal from '@/components/FeedbackModal.vue';
import EditAccount from '@/components/EditAccount.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Loading,
    // FeedbackModal,
    EditAccount,
    Modal,
  },

  data() {
    return {
      active: false,
      showEditAccount: false,
      showModal: false,
    };
  },

  async beforeCreate() {
    if (!sessionStorage.token) {
      this.$router.replace("login");
    } else {
      if (!this.user) {
        try {
          const { token } = sessionStorage
          await this.$store.dispatch("retrieveUser", { token });
        } catch {
          sessionStorage.clear();
          this.$router.replace("login");
        }
      }
    }
    /* eslint-disable no-debugger */
    // debugger
  },

  created() {},

  methods: {
    onLogout() {
      sessionStorage.clear();
      this.active = false;
      this.$store.state.user = null;
      this.$router.push({ path: "/login" });
    },
  },

  computed: mapState({
    user: state => state.user,
    feedback: state => state.feedback,
  }),
};
</script>

<style lang="scss">
@import "./scss/reset.scss";
@import "./scss/basic.scss";

body,
* {
  font-family: "Roboto", sans-serif;
}

#header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: #f7f7f7;
  margin-bottom: 8px;
  padding: 8px 16px;
  border-bottom: 1px solid #cccccc;
}

.header__logo {
  font-size: 16px;
  color: #aaaaaa;
}

.dropdownMenu {
  position: relative;
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
}

.dropdownMenu__link {
  padding: 0 24px;
  color: $color-cta;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  &:hover {
    color: $color-cta-light;
  }

  & > i {
    color: $color-cta;
  }
}

.dropdownMenu:not(.dropdownMenu__opened) {
  .dropdownMenu__link .fa {
    transform: rotate(0);
    transition-duration: 0.25s;
  }
  .dropdownMenu__menu {
    transition: height 0.1s ease-in;
    height: 0px;
  }
}
.dropdownMenu.dropdownMenu__opened {
  .dropdownMenu__link .fa {
    transform: rotate(-180deg);
    transition-duration: 0.25s;
  }
  .dropdownMenu__menu {
    transition: height 0.1s ease-in;
    height: 87px;
  }
}

.dropdownMenu__menu {
  background-color: #f7f7f7;
  border: 1px solid #cccccc;
  border-top: none;
  border-radius: 0 0 8px 8px;
  position: absolute;
  right: 0;
  top: 100%;
  width: max-content;
  margin: 8px 0;
  overflow: hidden;
}

.dropdownMenu__item {
  margin: 4px 0;
  padding: 8px 16px;
  cursor: pointer;
  color: $color-cta;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: $color-cta-light;
  }
}

.dropdownMenu i {
  font-size: 21px;
  margin-left: 16px;
}
</style>

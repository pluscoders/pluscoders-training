import { createStore } from "vuex";
import { registerUser, authenticateUser, retrieveUser, updateUser, unregisterUser } from "../logic";

export default createStore({
  state: {
    user: null,
    loading: false,
    alert: null,
    feedback: null,
  },

  mutations: {
    loading(state, loading) {
      state.loading = loading;
    },
    user(state, user) {
      state.user = user;
    },
    alert(state, message) {
      state.alert = message;
    },
    feedback(state, message) {
      state.feedback = message;
    },
  },

  actions: {
    async register({ commit, dispatch }, { fullname, email, password }) {
      try {
        commit("loading", true);

        await registerUser(fullname, email, password);

        await dispatch("authenticate", { email, password });
      } catch (error) {
        commit("feedback", error.message);
      } finally {
        commit("loading", false);
      }
    },

    async authenticate({ commit, dispatch }, { email, password }) {
      try {
        commit("loading", true);

        const token = await authenticateUser(email, password);

        sessionStorage.token = token;

        await dispatch("retrieveUser", { token });
      } catch (error) {
        commit("feedback", error.message);
      } finally {
        commit("loading", false);
      }
    },

    async retrieveUser({ commit }, { token }) {
      const user = await retrieveUser(token);

      commit("user", user);
    },

    async update({ commit }, { fullname, email }) {
      try {
        commit("loading", true);

        await updateUser('info', fullname, email);

        commit("alert", "DONE: info updated");
      } catch (error) {
        commit("feedback", error.message);
      } finally {
        commit("loading", false);
      }
    },
    async changepassword({ commit }, { password, newpassword }) {
      try {
        await updateUser('password', password, newpassword);

        commit("alert", "DONE: password changed");
      } catch (error) {
        commit("feedback", error.message);
      } finally {
        commit("loading", false);
      }
    },
    async unregister({ commit }, { password }) {
      try {
        commit("loading", true);

        await unregisterUser(password);

        sessionStorage.clear();

        commit("alert", "DONE: account deleted");
      } catch (error) {
        commit("feedback", error.message);
      } finally {
        commit("loading", false);
      }
    },
  },

  modules: {},
  getters: {},
});

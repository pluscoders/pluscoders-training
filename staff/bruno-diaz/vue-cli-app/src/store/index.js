import { createStore } from "vuex";
import { registerUser, authenticateUser, retrieveUser } from "../logic";

export default createStore({
  state: {
    user: null,
    loading: false,
    feedback: null,
  },
  mutations: {
    loading(state, loading) {
      state.loading = loading;
    },
    user(state, user) {
      state.user = user;
    },
    feedback(state, message) {
      /* eslint-disable no-debugger */
      // debugger
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
  },
  modules: {},
  getters: {},
});

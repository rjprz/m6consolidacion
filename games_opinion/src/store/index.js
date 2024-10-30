import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [],
  },
  getters: {},
  mutations: {
    SET_JUEGOS(state, juegos) {
      state.juegos = juegos;
    },
  },
  actions: {
    async fetchJuegos({ commit }) {
      try {
        let response = await fetch("https://api.rawg.io/api/games?key=7b66d1083f8c4ff59bd44c4dcb691ce1");
        let juegos = await response.json();
        commit("SET_JUEGOS", juegos.results);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});

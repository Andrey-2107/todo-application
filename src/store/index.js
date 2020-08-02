import Vue from 'vue'
import Vuex from 'vuex'
import {notes} from '../mocks/notes'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes
        // JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.notes.push(task);

      // localStorage.setItem('tasks', JSON.stringify(state.notes));
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task);
    }
  },
  modules: {
  },

  getters: {
    notes: state => state.notes,
  },
});

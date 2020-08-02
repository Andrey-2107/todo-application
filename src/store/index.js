import Vue from 'vue'
import Vuex from 'vuex'
import {notes} from '../mocks/notes'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes
  },
  mutations: {
    createTask(state, note) {
      state.notes.push(note);
    },

    editTask(state, note) {
      const id = note.id;

      state.notes = state.notes.map(taskForEdit => {
        return taskForEdit.id === id ? note : taskForEdit
      })
    },

    deleteTask(state, id) {
      state.notes = state.notes.filter(note => note.id !== id)
    }
  },
  actions: {
    createTask({commit}, note) {
      commit('createTask', note);
    },

    removeTask({commit}, noteId) {
      commit('deleteTask', noteId)
    },

    editTask({commit}, note) {
      commit('editTask', note)
    }
  },
  modules: {

  },

  getters: {
    notes: state => state.notes,
  },
});

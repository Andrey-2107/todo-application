import Vue from 'vue'
import Vuex from 'vuex'
import {notes} from '../mocks/notes'
import VuexPersist from 'vuex-persist'
import { deepDataCopy } from "../utils/object-utils";

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes,
    history: []
  },
  mutations: {
    createTask(state, note) {
      state.notes.push(note);
      state.history.push(
        deepDataCopy(note)
      );
    },

    editTask(state, note) {
      const id = note.id;

      state.notes = state.notes.map(taskForEdit => {
        return taskForEdit.id === id ? note : taskForEdit
      });

      state.history.push(
        deepDataCopy(note)
      );
    },

    deleteTask(state, id) {
      state.notes = state.notes.filter(note => note.id !== id);
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
    historyBack: state => (id, timestamp) => 
      state.history.filter(
        note => note.id === id && note.updateDate < timestamp
      )
      .sort((a, b) => b.updateDate - a.updateDate)[0],
    historyForward: state => (id, timestamp) => 
      state.history.filter(
        note => note.id === id && note.updateDate > timestamp
      )
      .sort((a, b) => a.updateDate - b.updateDate)[0],
  },
  plugins: [vuexPersist.plugin]
});

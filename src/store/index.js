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
    },

    editTask(state, id, task) {
      this.state.notes = state.notes.forEach(taskForEdit => {
        taskForEdit.id === id ? taskForEdit = task : taskForEdit
      })
    },

    deleteTask(state, id) {
     this.state.notes = state.notes.filter(task => task.id !== id)
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task);
    },

    removeTask({commit}, taskId) {
      commit('deleteTask', taskId)
    },

    editTask({commit}, task) {
      commit('editTask', task)
    }
  },
  modules: {

  },

  getters: {
    notes: state => state.notes,
  },
});

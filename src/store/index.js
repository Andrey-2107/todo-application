import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        title: 'some title 1',
        todos: [
          {
            description: 'some description 1',
            isCompleted: false
          }
        ],
        id: Date.now(),
        createdDate: Date.now(),
        updateDate: Date.now()
      },
      {
        title: 'some title 2',
        todos: [
          {
            description: 'some description 2',
            isCompleted: false
          }
        ],
        id: Date.now(),
        createdDate: Date.now(),
        updateDate: Date.now()
      },
      {
        title: 'some title 3',
        todos: [
          {
            description: 'some description 3',
            isCompleted: false
          }
        ],
        id: Date.now(),
        createdDate: Date.now(),
        updateDate: Date.now()
      },
    ]
        // JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
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
    tasks: state => state.tasks,

    getTaskId: state => state.tasks.id,
  },
});

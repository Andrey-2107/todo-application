<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">{{ note.title }}</h3>
        <ul class="card-text">
          <li :key="todo.id" v-for="todo in getPreviewTodos()">
            <input type="checkbox" :checked="todo.isCompleted" disabled>
            <span>{{todo.description}}</span>
          </li>
        </ul>
      </div>
      <div class="card-btn">
        <button class="btn btn-danger" @click="deleteTask(note.id)">Delete</button>
        <button class="btn btn-success" @click="openEditTaskPage(note.id)">
          Edit task
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {APP_CONSTANTS} from "../utils/app-constants"

  export default {
    props: {
      note: {
        type: Object,
        required: true
      }
    },
    methods: {
      openEditTaskPage(taskId) {
        this.$router.push({name: 'create', params: {id: taskId}})
      },

      deleteTask(id) {
        this.$alertify.confirm(
          'Do you really want to delete this note?',
          () => {
            this.$store.dispatch('removeTask', id);
            this.$alertify.error('Note was deleted!');
          },
          () => {}
        );
      },

      getPreviewTodos() {
        let previewTodos = [];

        if (this.note !== undefined) {
          previewTodos = this.note.todos.slice(
            0, 
            APP_CONSTANTS.maxVisiblePreviewTodos
          );
        }

        return previewTodos;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .card-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;

    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 52%;
      margin: 0 20px;
      padding: 20px;
      background-color: rgba(39, 154, 186, .4);;
      border-radius: 5px;

      .card-text {
        list-style: none;
      }

      .card-btn {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    }
  }

</style>

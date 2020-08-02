<template>
  <div class="container">
    <div class="form-wrapper">
      <div class="card">
        <h2 class="form-title">
          Edit task
        </h2>
        <form @submit.prevent="">
          <div class="input-field">
            <input
              type="text"
              placeholder="Title"
              required
              @input="title = $event.target.value"
            >
          </div>
          <div class="input-field form-group" v-for="todo in getTodo(id)">
            <div class="todo">
              <input
                type="checkbox"
                :checked="todo.isCompleted"
                @input="isCompleted = $event.target.value"
              >

              <input
                type="text"
                id="task-text"
                placeholder="Task description"
                :value="todo.description"
                @input="description = $event.target.value"
              >
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-success" @click="getTodo(1)">Add note</button>
          </div>

          <button class="btn btn-success" type="submit" @click="changeTask">Add task</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
  import Task from "../components/Note";

  export default {
    name: 'create-task',
    components: {
      Task
    },
    data() {
      return {
        title: null,
        description: [],
        isCompleted: [],
        id: this.$route.params.id
      }
    },

    methods: {
      getTodo(id) {
        return this.$store.getters.notes.find(element => element.id === id).todos;
      },

      changeTask() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 50px;

    .card {
      width: 550px;
      padding: 20px;
      border: 1px solid #777;
      border-radius: 5px;

      .form-title {
        margin-top: 0;
        text-align: center;
        font-size: 40px;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;

        .input-field {
          display: flex;
          flex-direction: column;
          max-width: 470px;
          width: 100%;
          margin-bottom: 15px;

          input {
            padding: 7px;
            line-height: 25px;
            font-size: 21px;
            border: none;
            border-bottom: 2px solid #ccc;
            outline: none;
          }
        }
      }
    }
  }

</style>

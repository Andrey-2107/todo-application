<template>
  <div class="container">
    <div class="form-wrapper">
      <div class="card">
        <h2 class="form-title">
          Edit task
        </h2>
        <div class="form-title">
          <button class="btn btn-primary" @click="back()">
            Back
          </button>
          <button class="btn btn-success" @click="commitChanges()">
            Save
          </button>
          <button class="btn btn-danger" >
            Delete
          </button>
        </div>
        <form @submit.prevent="">
          <div class="input-field">
            <input
              type="text"
              placeholder="Title"
              required
              @input="title = $event.target.value"
              v-model="note.title"
            >
          </div>
          <div class="input-field form-group" v-for="todo in note.todos">
            <div class="todo">
              <input
                type="checkbox"
                class="todo-checkbox"
                :checked="todo.isCompleted"
                @change="todo.isCompleted = $event.target.checked"
              >

              <input
                type="text"
                class="todo-description"
                placeholder="Task description"
                :value="todo.description"
                @input="todo.description = $event.target.value"
              >

              <button class="btn btn-danger" @click="removeTodo(todo)">X</button>
            </div>
          </div>
          <div class="form-group">
            <button 
              class="btn btn-success" 
              type="submit"
              @click="addTodo()"
            >
              +
            </button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
  import { deepDataCopy } from "../utils/object-utils";
  import { Todo } from "../entities/Todo";

  export default {
    name: 'create-task',
    data() {
      return {
        note: this.getNoteById(this.$route.params.id),
        id: this.$route.params.id
      }
    },

    methods: {
      getNoteById(id) {
        const storedNote = this.$store.getters.notes.find(element => element.id === id);
        const note = deepDataCopy(storedNote);

        return note;
      },

      addTodo() {
        if (this.note !== undefined) {
          this.note.todos.push(new Todo());
        }
      },

      removeTodo(todoToRemove) {
        const index = this.note.todos.indexOf(todoToRemove);

        if (index >= 0) {
          this.note.todos.splice(index, 1);
        }
      },

      commitChanges() {
        this.$store.dispatch("editTask", this.note);
        this.$router.push("/");
      },

      back() {
        this.$router.push("/");
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

        .todo {
          display: flex;
          justify-content: center;
          align-items: center;

          .btn {
            flex: 0;
            margin: 0;
            width: 50px;
          }

          .todo-description {
            flex: 1;
            margin: 0 1em;
          }
        }

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

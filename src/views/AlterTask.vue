<template>
  <div class="container">
    <div class="form-wrapper">
      <div class="card">
        <h2 class="form-title">
          {{ pageHeading }}
        </h2>
        <div class="form-title form-controls">
          <button class="btn btn-primary" @click="confirmBack()">
            Back
          </button>
          <button class="btn btn-success" @click="commitChanges()">
            Save
          </button>
          <button 
            class="btn btn-danger"
            :disabled="isNew"
            @click="deleteTask()"
          >
            Delete
          </button>
          <button class="btn btn-info" :disabled="isNew" @click="historyBack()">
            &lt;-
          </button>
          <button class="btn btn-info" :disabled="isNew" @click="historyForward()">
            -&gt;
          </button>
        </div>
        <form @submit.prevent="">
          <div class="input-field">
            <input
              type="text"
              placeholder="Title"
              required
              v-model="note.title"
            >
          </div>
          <div 
            class="input-field form-group" 
            :key="todo.id" 
            v-for="todo in note.todos"
          >
            <div class="todo">
              <input
                type="checkbox"
                class="todo-checkbox"
                v-model="todo.isCompleted"
              >

              <input
                type="text"
                class="todo-description"
                placeholder="Task description"
                v-model="todo.description"
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
  import { Note } from "../entities/Note";
  import { Todo } from "../entities/Todo";

  export default {
    name: 'create-task',
    data() {
      return {
        note: null,
        id: null,
        pageHeading: null,
        isNew: false
      }
    },

    created() {
      switch(this.$route.params.id) {
        case "new":
          this.note = new Note("", Date.now());
          this.id = this.note.id;
          this.pageHeading = "Add Note";
          this.isNew = true;
          break;
        default:
          this.note = this.getNoteById(this.$route.params.id)
          this.id = this.$route.params.id
          this.pageHeading = "Edit Note"
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
        this.note.updateDate = Date.now()

        if (this.isNew) {
          this.$store.dispatch("createTask", this.note);
          this.isNew = false;
        } else {
          this.$store.dispatch("editTask", this.note);
        }
        
        this.$router.push("/");
      },

      deleteTask() {
        this.$alertify.confirm(
          'Do you really want to delete this note?',
          () => {
            this.$store.dispatch('removeTask', this.note.id);
            this.$alertify.error('Note was deleted!');
            this.back();
          },
          () => {}
        );
      },

      historyBack() {
        let oldNote = this.$store.getters.historyBack(this.note.id, this.note.updateDate);

        if (oldNote !== undefined) {
          this.note = oldNote;
        }
      },

      historyForward() {
        let futureNote = this.$store.getters.historyForward(this.note.id, this.note.updateDate);

        if (futureNote !== undefined) {
          this.note = futureNote;
        }
      },

      confirmBack() {
        this.$alertify.confirm(
          'Do you want to cancel editing?',
          () => {
            this.back();
          },
          () => {}
        );
        
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

    .form-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;

      button {
        margin: 0 1rem;
      }
    }

    .card {
      width: 550px;
      padding: 20px;
      border: 1px solid #777;
      border-radius: 5px;

      .form-title {
        margin: 0 0 1rem 0;
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

<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">{{ note.title }}</h3>
        <ul class="card-text">
          <li v-for="todo in note.todos">
            <input type="checkbox" :checked="todo.isCompleted" disabled>
            <span>{{todo.description}}</span>
          </li>
        </ul>
      </div>
      <div class="card-btn">
        <button class="btn btn-danger" @click="deleteTask(note.id)">Delete</button>
        <button class="btn btn-success" @click="openEditTaskPage(note.id)">Edit task</button>
        <button class="btn btn-info" @click="confirm">Alertify</button>
      </div>
    </div>
  </div>
</template>

<script>

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
        this.$store.dispatch('removeTask', id);
      },

      confirm() {
        this.$alertify.success('success');
      },
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

<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">{{ task.title }}</h3>
          <ul class="card-text">
            <li v-for="todo in task.todos">
              <input type="checkbox" :checked="todo.isCompleted" disabled>
              <span>{{todo.description}}</span>
            </li>
          </ul>
      </div>
      <div class="card-btn">
        <button class="btn delete-btn">Delete</button>
        <button class="btn edit-btn" @click="openEditTaskPage(task.id)">Edit task</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      tasks() {
        return this.$store.getters.tasks
      }
    },

    props: ['task'],
    methods: {
      openEditTaskPage(taskId) {
        this.$router.push({ name: 'create', params: { id: taskId }})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;

    .card {
      display: flex;
      justify-content: space-between;
      width: 52%;
      margin: 10px 20px;
      padding: 20px;
      background-color: rgba(151, 28, 189, .3);
      border-radius: 5px;

      .card-btn {
        display: flex;
        align-items: center;

        .btn {
          padding: 8px 19px;
          font-size: 16px;
          color: #ffffff;
          background-color: #F60000;
          border: none;
          border-radius: 4px;
          outline: none;
          transition: .3s;

          &:hover {
            background-color: #FF4800;
          }
        }
      }
    }
  }

</style>

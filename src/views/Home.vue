<template>
  <div>
    <div class="container">
      <Task
        v-for="task in tasks"
        :key="tasks.id"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
  import Task from "../components/Task";

  export default {
    name: 'Home',
    components: {
      Task
    },

    computed: {
      tasks() {
        return this.$store.getters.tasks
      }
    }
  }
</script>

<style lang="scss">
  .container {
    max-width: 1200px;
    width: 100%;
    margin: auto;
  }
</style>

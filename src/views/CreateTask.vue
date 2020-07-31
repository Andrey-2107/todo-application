<template>
  <div class="form-wrapper">
    <!--  <div class="card">-->
    <!--    <h2 class="form-title">-->
    <!--      Create task-->
    <!--    </h2>-->
    <!--    <form @submit.prevent="submitHandler">-->
    <!--      <div class="input-field">-->
    <!--        <input-->
    <!--          type="text"-->
    <!--          id="title"-->
    <!--          placeholder="Title"-->
    <!--          required-->
    <!--        >-->
    <!--      </div>-->
    <!--      <div class="input-field form-group">-->
    <!--        <div class="todo" v-for="todo in task.todos">-->
    <!--          <input-->
    <!--            type="checkbox"-->
    <!--            :checked="todo.isCompleted"-->
    <!--          >-->

    <!--          <input-->
    <!--            type="text"-->
    <!--            :value="todo.description"-->
    <!--            id="task-text"-->
    <!--            placeholder="Task description"-->
    <!--          >-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="form-group">-->
    <!--        <button class="btn"> +</button>-->
    <!--      </div>-->

    {{noteId}}
    <!--      <button class="btn" type="submit">Add task</button>-->
    <!--    </form>-->
    <!--  </div>-->
  </div>
</template>

<script>

  export default {
    name: 'create-task',
    data() {
      return {
        title: null,
        description: null,
        noteId: this.$route.params.id
      }
    },
    methods: {}
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

        .btn {
          padding: 10px 20px;
          font-size: 17px;
          color: #fff;
          background-color: #A132C3;
          border-radius: 21px;
          border: none;
          outline: none;
          transition: .3s;

          &:hover {
            background-color: #AD66C3;
          }
        }
      }
    }
  }

</style>

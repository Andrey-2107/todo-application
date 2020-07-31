<template>
  <nav class="navbar">
    <div class="nav-wrapper">
      <router-link
        to="/"
        href="#"
        class="logo"
      >
        Tasks
      </router-link>
      <ul class="nav-list">
        <router-link
          tag="li"
          to="/change-todo"
          active-class="active"
          class="router-link"
        >
          <a href="#" class="nav-navigate">Change todo</a>
        </router-link>

        <router-link
          tag="li"
          to="/create"
          active-class="active"
          class="router-link"
        >
          <a href="#" class="nav-navigate">Add</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .navbar {
    padding: 10px 23px;
    background-color: rgba(151, 28, 189, .9);

    .logo {
      font-size: 28px;
      color: #fff;
    }

    .nav-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav-list {
        display: flex;
        list-style: none;

        .router-link {
          padding: 10px 20px;

          .nav-navigate {
            font-size: 22px;
            color: #ffffff;
          }
        }
      }
    }
  }
</style>

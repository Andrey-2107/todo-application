<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
  import Navbar from "./components/Navbar";
  import Home from "./views/Home";


  export default {
    components: {
      Navbar,
      Home
    }
  }
</script>

<style lang="scss">
  * {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  .btn {
    margin-bottom: 10px;
    padding: 8px 19px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    outline: none;
    transition: .3s;
  }

  .btn-danger {
    color: #ffffff;
    background-color: rgba(212, 44, 44, 1);

    &:hover {
      background-color: rgba(240, 17, 17, 1);
    }
  }

  .btn-success {
    color: #ffffff;
    background-color: rgba(48, 167, 176, 1);

    &:hover {
      background-color: rgba(11, 120, 128, 1);
    }
  }

</style>

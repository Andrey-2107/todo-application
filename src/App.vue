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
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: boreder-box;
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
    transition: 200ms;
    cursor: pointer;
  }

  .btn-danger {
    color: #ffffff;
    background-color: #d42c2c;

    &:hover {
      background-color: #f01111;
    }
  }

  .btn-success {
    color: #ffffff;
    background-color: #30a7b0;

    &:hover {
      background-color: #0b7880;
    }
  }

  .btn-primary {
    color: #ffffff;
    background-color: #1136b1;

    &:hover {
      background-color: #0e2779;
    }
  }

  .btn-info {
    color: #fff;
    background-color: #9e9e9d;

    &:hover {
      background-color: #595959;
    }

    .btn-action {
      color: #000;
      background-color: #c4c3b5;

      &:hover {
        background-color: #7a796e;
      }
    }
  }
</style>

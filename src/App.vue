<template>
  <div id="app">
    <Navbar />
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

</style>

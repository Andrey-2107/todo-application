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

  #app {
    /*background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNs0a5Ri81ghUSC07C_eqx6eufGpVz2t0Q2Q&usqp=CAU") center center no-repeat;*/
    /*background-size: cover;*/
  }

  a {
    text-decoration: none;
  }

</style>

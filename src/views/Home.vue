<template>
  <div>
    <div class="container">
      <Note
        v-for="note in notes"
        :key="notes.id"
        :note="note"
      />
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import Note from "../components/Note";

  export default {
    name: 'Home',
    components: {
      Note,
    },

    computed: mapGetters(['notes'])
    // computed: {
    //   notes() {
    //     return this.$store.getters.notes
    //   }
    // },
  }
</script>

<style lang="scss">
  .container {
    max-width: 1200px;
    width: 100%;
    margin: auto;
  }
</style>

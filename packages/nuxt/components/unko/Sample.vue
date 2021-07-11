<template>
  <div>
    <div class="hello">unko</div>
    <button v-on:click="unko()">押して</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    unko(this: Vue) {
      console.log(this.$axios)
    },
  },
})
</script>

<style>
.hello {
  color: blue;
}
</style>

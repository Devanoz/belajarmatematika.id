<template>
  <div class="root">
    <PilihPeran />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PilihPeran from './PilihPeran/PilihPeran.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { PilihPeran }
})
</script>

<style>
  body{
    margin: 0px;
    padding: 0px;
    background-color: blue;
  }

  *{
    box-sizing: border-box;
  }
</style>

<template>
  <div
    class="overflow-y-auto h-full w-fit flex flex-col gap-5 my-5 p-5"
  >
    <topik v-for="topik in topikList" :key="topik.id" :name="topik.name" />
  </div>
</template>

<script>
import topik from './topik.vue'
import { topiks } from '~/static/topiks.js'

export default {
  name: 'TopikList',
  components: {
    topik
  },
  data () {
    return {
      topikList: topiks
    }
  }
}
</script>
<style scoped>
.root {
  height: 400px;
}
</style>

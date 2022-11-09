<template>
  <div
    class="overflow-y-auto h-full w-fit flex flex-col gap-5 my-5 p-5"
  >
    <topik v-for="val in topikList" :key="val.id" :name="val.nama" />
  </div>
</template>

<script>
import topik from './topik.vue'
import { dataSamples } from '~/static/dataSample.js'

export default {
  name: 'TopikList',
  components: {
    topik
  },
  data () {
    return {
      topikList: dataSamples[1].topik
    }
  }
}
</script>
<style scoped>
.root {
  height: 400px;
}
</style>

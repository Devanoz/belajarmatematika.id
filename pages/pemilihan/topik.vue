<template>
  <div
    class="relative h-screen flex flex-col justify-center items-center"
  >
    <div class="sticky top-5 pb-3  w-fit mx-auto">
      <h2 class="text-2xl">Pilih Topik</h2>
    </div>
    <topikList />
  </div>
</template>

<script lang="ts">
import topikList from '~/components/pemilihan/topik/topikList.vue'

export default {
  name: 'HalamanTopik',
  components: {
    topikList
  }
}
</script>

<style>
h2 {
  color: #56739d;
}
</style>

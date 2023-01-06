<template>

</template>

<script>
export default {
  name: 'detail-materi',
  middleware: 'isStudent',


  async asyncData({ store, route }) {
    await store.dispatch('siswa/materi/getDetailMateri', route.query.id )
  },
}
</script>

<style scoped>

</style>

<template>
  <nuxt-link to="/siswa/materi">
    <div
      class="topik text-center rounded-2xl flex flex-col justify-center items-center py-8 font-semibold shadow-md"
    >
      {{ name }}
    </div>

  </nuxt-link>
</template>

<script lang="ts">
export default {
  name: 'TopikComponents',
  props: {
    name: {
      type: String,
      default: 'topik'
    }
  }
}
</script>

<style scoped>
.topik {
  width: 20.438rem;
  /* max-height:94px; */
  background-color: #cceaff;
}
</style>

<template>
  <div class="bg-white rounded-t-xl shadow-md px-10 sm:px-20 py-6 max-h-[6rem] max-w-screen-sm fixed bottom-0 mx-auto w-full border border-slate-200">
    <div
      class="h-full flex justify-between items-center w-full"
    >
      <NuxtLink to="/materi">
        <div class="flex flex-col items-center gap-y-1">
          <img class="h-6 w-auto" src="~/assets/img/navbar/basic/materi.svg">
          <span class="text-slate-400">Materi</span>
        </div>
      </NuxtLink>

      <NuxtLink to="/video">
        <div class="flex flex-col items-center gap-y-1">
          <img class="h-6 w-auto" src="~/assets/img/navbar/basic/video.svg">
          <span class="text-slate-400">Video</span>
        </div>
      </NuxtLink>

      <div class="flex flex-col items-center gap-y-1">
        <img class="h-6 w-auto" src="~/assets/img/navbar/basic/tantangan.svg">
        <span class="text-slate-400">Tantangan</span>
      </div>

      <NuxtLink to="/leaderboard">
        <div class="flex flex-col items-center gap-y-1">
          <img class="h-6 w-auto" src="~/assets/img/navbar/basic/peringkat.svg">
          <span class="text-slate-400">Peringkat</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clicked: false
    }
  },
  methods: {
    doClick () {
      this.clicked = !this.clicked
    },
    getColor () {
      return (this.clicked) ? 'red' : ''
    }
  }
}
</script>

<style>
</style>

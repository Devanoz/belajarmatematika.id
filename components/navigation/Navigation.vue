<template>
  <div class="bg-white rounded-t-xl shadow-md px-20 py-6 max-h-[6rem] max-w-screen-sm fixed bottom-0 mx-auto w-full border border-slate-200">
    <div
      class="h-full flex justify-between items-center w-full"
    >
      <NuxtLink to="/home">
        <div class="materi" @click="doClick">
          <img class="h-6 w-auto" src="~/assets/img/navbar/basic/materi.svg" :style="{backgroundColor : getColor()}">
        </div>
      </NuxtLink>
      <div class="video">
        <img class="h-6 w-auto" src="~/assets/img/navbar/basic/video.svg">
      </div>
      <div class="tantangan">
        <img class="h-6 w-auto" src="~/assets/img/navbar/basic/tantangan.svg">
      </div>

      <NuxtLink to="/leaderboard">
        <div class="pering">
          <img class="h-6 w-auto" src="~/assets/img/navbar/basic/peringkat.svg">
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clicked: false,
      val: '~/assets/img/navbar/basic/peringkat.svg'
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

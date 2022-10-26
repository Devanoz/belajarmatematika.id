<template>
  <div class="wrapper h-full relative">
    <div
      class="navbar bg-slate-600 fixed bottom-0 flex flex-row justify-evenly items-center w-full"
    >
      <div class="materi" @click="doClick">
        <img class="nav-image1" src="~/assets/img/navbar/basic/materi.svg" :style="{backgroundColor : getColor()}">
      </div>
      <div class="video">
        <img class="nav-image" src="~/assets/img/navbar/basic/video.svg">
      </div>
      <div class="tantangan">
        <img class="nav-image" src="~/assets/img/navbar/basic/tantangan.svg">
      </div>
      <div class="pering">
        <img class="nav-image" src="~/assets/img/navbar/basic/peringkat.svg">
      </div>
    </div>
  </div>
</template>

<script language="ts">

export default {
  name: 'Home',
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
.navbar {
  height: 6rem;
  background-color: #ffffff;
}

.wrapper {
  background-color: red;
}

.nav-image {
  width: 32px;
  height: 28px;
}
</style>

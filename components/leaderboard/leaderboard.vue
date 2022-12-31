<template>
  <div class="person h-14 w-[90%] mx-auto mb-7 flex flex-row gap-1">
    <div class="no-peringkat h-14 w-14">
      <div class="circle w-7 h-7 border-solid border-2 border-[#838FD0]  relative top-[25%] left-[25%] rounded-full z-0 flex justify-center items-center">
        <p class="no z-10 text-[#828282]">
          {{ no }}
        </p>
      </div>
    </div>
    <div class="profile h-14 w-14 relative">
      <img class="h-14 w-14 rounded-full absolute" :src="image" alt="">
      <img class="absolute -bottom-2 -right-2" src="~/assets/img/peringkat/lencana/juara1.svg" alt="juara1">
    </div>
    <div class="profile-detail h-14 w-20 mx-4">
      <p class="name text-[#333333]">
        {{ name }}
      </p>
      <p class="poin text-[#828282]">
        {{ point }} pts
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LeaderBoard',
  props: {
    no: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: 'Murid'
    },
    point: {
      type: String,
      default: 0
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>

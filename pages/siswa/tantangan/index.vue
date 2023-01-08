<template>
  <div class="flex flex-col h-full px-4 py-4">
    <div class="grid grid-cols-3 gap-3 place-content-between">
      <div class="flex col-span-2 flex-col">
        <span class="text-2xl text-gray-700 font-semibold col-start-1 col-span-3">Ayo Bermain</span>
        <span class=" text-lg text-gray-400 font-normal">Sambil belajar!</span>
      </div>
      <nuxt-link to="/tantangan/history" class="justify-end col-end-4 place-self-end self-start">
        <img class="text-3xl rounded-full  h-7 w-7"
             src="@/assets/img/tantangan/history.svg" alt=""
        >
      </nuxt-link>

    </div>

    <!-- ongoing -->
    <div class="mt-5 flex flex-col">
      <span class="text-cyan-700 font-semibold">Sedang dikerjakan</span>
      <div class="p-3 mt-2 bg-green-200 drop-shadow-md rounded-2xl grid grid-cols-4">
        <img class="col-span-1" src="@/assets/img/tantangan/balok.svg" alt="">
        <div class="content ml-2 col-span-2 self-center flex flex-col">
                    <span class="text-gray-500 font-normal text-md">
                        Lanjutkan Kuis
                    </span>
          <span class=" text-xl">
                        Volume Balok
                    </span>
        </div>
        <img class="self-center place-self-end" src="@/assets/img/tantangan/progress.svg" alt="">
      </div>

    </div>

    <div class="mt-5 flex flex-col">
      <span class="text-cyan-700 font-semibold">Tantangan Lainnya</span>
      <div v-for="challenge in challenges"
           class="p-3 mt-2 border-2 border-cyan-600 drop-shadow-md rounded-2xl grid grid-cols-4"
           @click="onEditClicked(challenge)"
      >
        <img class="col-span-1" src="@/assets/img/tantangan/balok.svg" alt="">
        <div class="content ml-2 col-span-2 self-center flex flex-col">
                    <span class="font-normal text-md">
                        {{ challenge.title }}
                    </span>
          <span class="text-gray-400 text-md">
                        5 soal
                    </span>
        </div>
      </div>


    </div>


  </div>
</template>

<script>
export default {
  layout: 'app',
  async asyncData ({
    store
  }) {
    await store.dispatch('siswa/challenge/getChallengesData')
  },

  computed: {
    challenges () {
      return this.$store.state.siswa.challenge.challenges
    }
  },

  methods: {
    onEditClicked (challenge) {
      let currentPath = this.$router.currentRoute.path
      this.$router.push({
        path: currentPath + '/quiz',
        query: {
          id: challenge.id,
          title: challenge.title
        }
      })
    },
  }
}
</script>

<style lang="ts">

</style>

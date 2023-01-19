<template>
  <div class="flex flex-col h-full px-4 py-4">
    <div class="grid grid-cols-3 gap-3 place-content-between">
      <div class="flex col-span-2 flex-col">
        <span class="text-2xl text-gray-700 font-semibold col-start-1 col-span-3">Ayo Bermain</span>
        <span class=" text-lg text-gray-400 font-normal">Sambil belajar!</span>
      </div>
      <nuxt-link to="/siswa/tantangan/history" class="justify-end col-end-4 place-self-end self-start">
        <img class="text-3xl rounded-full  h-7 w-7"
             src="@/assets/img/tantangan/history.svg" alt=""
        >
      </nuxt-link>

    </div>

    <!-- ongoing -->
    <div class="mt-5 flex flex-col">
      <div
          class="relative z-20 flex items-center w-full h-10 mt-4 mb-4 rounded-3xl focus-within:shadow-lg bg-sky-100 overflow-hidden"
      >
        <div class="grid place-items-center ml-2 h-full w-12 text-cyan-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input @keyup="onSearching" v-model="search"
               class="peer h-full w-full outline-none font-light text-gray-300 pr-2 bg-sky-100"
               type="text"
               id="search"
               placeholder="Cari Tantangan"
        />

      </div>

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
      <div v-for="materi in challenges">
        <h2 v-if="materi.challenges.length > 0" class="text-xl mt-4 text-cyan-700">{{ materi.title }}</h2>

        <div v-for="challenge in materi.challenges"
             class="p-3 mt-2 border-2 border-cyan-600 drop-shadow-md rounded-2xl grid grid-cols-4"
             @click="onEditClicked(challenge)"
        >
          <img class="col-span-1" src="@/assets/img/tantangan/balok.svg" alt="">
          <div class="content ml-2 col-span-2 self-center flex flex-col">
                    <span class="font-normal text-md">
                        {{ challenge.title }}
                    </span>
            <span class="text-gray-400 text-md">
                        {{ challenge.questions_count }} soal
                    </span>
          </div>
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

  data () {
    return {
      search: ''
    }
  },

  computed: {
    challenges () {
      return this.$store.state.siswa.challenge.challenges
    }
  },

  methods: {
    async onSearching () {
      console.log(this.search)
      await this.$store.dispatch('siswa/challenge/getChallengesData', this.search)

    },
    onEditClicked (challenge) {
      let currentPath = this.$router.currentRoute.path
      this.$router.push({
        path: currentPath + '/quiz',
        query: {
          id: challenge.id,
          title: challenge.title,
          page: 1
        }
      })
    },
  }
}
</script>

<style lang="ts">

</style>

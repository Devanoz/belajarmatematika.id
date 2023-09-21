<template>
  <div class="flex items-stretch flex-col h-full px-4 py-4">
    <div class="grid grid-cols-3 gap-3 place-content-between">
      <nuxt-link class="flex col-span-1 flex-col mx-3 my-3" to="/siswa/tantangan">
        <img src="@/assets/img/general/exit.svg" class="mt-1 h-6 w-6" alt="">
      </nuxt-link>

      <div class="tittle col-span-2 my-3">
              <span class=" text-2xl font-semibold">
                Hasil Belajar
              </span>
      </div>


    </div>

    <div class="challenge-exist">
      <div v-for="materi in challenges.challenges">
        <h2 v-if="materi.challenges.length > 0" class="text-xl mt-4 text-cyan-700">{{ materi.title }}</h2>
        <div v-for="challenge in materi.challenges"
             @click="onEditClicked(challenge)"
             class="p-3 mt-2 border-2 border-cyan-600 drop-shadow-md rounded-2xl grid grid-cols-4"
        >
          <img class="col-span-1 self-center" src="@/assets/img/tantangan/balok.svg" alt="">
          <div class="content ml-2 col-span-2 self-center flex flex-col">
                    <span class="font-normal text-md text-gray-700">
                        {{ challenge.title }}
                    </span>
            <!-- <span class="text-gray-400 text-md">
                        {{ challenge.updated_at }}
                    </span> -->
          </div>
          <div class="col-span-1 py-3">
            <client-only class="bg-green-300 ">
              <Progress class=" grid justify-items-center" :transitionDuration="2000" :radius="35"
                        strokeColor="#659E8D"
                        :strokeWidth="6"
                        :value="challenge.student_challenges[0].score"
              >
                <div class=" text-[#659E8D] justify-self-center">
              <span class="">
              {{ challenge.student_challenges[0].score }}pts

              </span>
                </div>

              </Progress>
            </client-only>

          </div>

        </div>

      </div>

    </div>


    <div class="empty-history" v-if="challenges.length == 0">
      <div class="package-img place-self-center mt-56 flex flex-col">
        <img src="@/assets/img/tantangan/package.svg" class=" h-40 w-40 self-center" alt="">
      </div>
      <div class="place-self-center grid justify-items-stretch text-gray-500 h-auto mt-2 w-full">
        <p class="justify-self-center mx-auto">
          Kosong! Ayo kerjakan tantangan!

        </p>
      </div>

    </div>


  </div>
</template>

<script>

export default {

  components: {},

  data () {
    return {
      fill: { gradient: ['red', 'green', 'blue'] },
    }
  },

  async asyncData ({
    store,
    route
  }) {
    await store.dispatch('siswa/challenge/getChallengesDoneData')
  },

  computed: {
    challenges () {
      return this.$store.state.siswa.challenge.doneChallenges
    }
  },

  methods: {
    onEditClicked (challenge) {
      let currentPath = this.$router.currentRoute.path
      this.$router.push({
        path: currentPath + '/detail',
        query: {
          id: challenge.id,
        }
      })
    },

  }
}
</script>

<style>

</style>

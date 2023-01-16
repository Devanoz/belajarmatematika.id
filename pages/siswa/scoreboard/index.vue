<template>
  <div class="root">
    <div class="title text-center my-3">
      <h1>Papan Peringkat</h1>
    </div>
    <hr class="bg-gray-300 h-0.5">
    <div
      class="progress-section h-64 flex justify-center items-center"
    >
      <div
        class="progress-wrapper  h-2/3 w-1/2 flex flex-col justify-start items-center gap-1"
      >
        <p class="progress-percentage text-center">
          {{ userProgress }}%
        </p>
        <div
          class="circular-progress rounded-full  w-28 h-28 flex flex-col justify-center items-center"
        >
          <!--          <radial-progress-bar :completed-steps="studentProgress" :total-steps="totalSteps" :diameter="diameter" :fps="fps" inner-stroke-color="#E0E0E0" start-color="#84B2F3" stop-color="#84B2F3">-->
          <!--            <img src="~/assets/img/peringkat/rocket.svg">-->
          <!--          </radial-progress-bar>-->
          <client-only>
            <Progress class="flex justify-center items-center" :transitionDuration="2000" :radius="50"
                      strokeColor="#84B2F3"
                      :strokeWidth="8"
                      :value="userProgress"
            >
              <template>
                <img src="~/assets/img/peringkat/rocket.svg" class="mx-auto" alt="rocket">
              </template>
            </Progress>

          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Leaderboard from '~/components/leaderboard/leaderboard.vue'

export default {
  middleware: 'isStudent',
  name: 'leaderboard',
  layout: 'app',
  components: {
    Leaderboard
  },
  data () {
    return {
      leaderboardCounter: 0,
      completedSteps: 20,
      totalSteps: 100,
      diameter: 120,
      fps: 60,
      //leaderboard number
      no: 1
    }
  },

  async asyncData ({
    store
  }) {
    await store.dispatch('siswa/leaderboard/getStudentsData')
  },

  computed: {
    userProgress () {
      return parseFloat(this.$auth.user.progress.toFixed(2))
    },
    students () {
      return this.$store.state.siswa.leaderboard.students
    },
    student () {
      return this.$auth.user
    },

    // getLeaderUrl () {
    //   if (this.student.rank === 1) {
    //     return require('~/assets/img/peringkat/lencana/juara1.svg')
    //   } else if (this.student.rank === 2) {
    //     return require('~/assets/img/peringkat/lencana/juara2.svg')
    //   } else if (this.student.rank === 3) {
    //     return require('~/assets/img/peringkat/lencana/juara3.svg')
    //   } else {
    //     return require('~/assets/img/peringkat/lencana/no-rank.svg')
    //   }
    // }
  },

}
</script>

<style scoped>

</style>

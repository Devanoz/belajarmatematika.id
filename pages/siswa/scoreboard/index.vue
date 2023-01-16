<template>
  <div class="root">
    testing
  </div>
</template>

<script>
// import Leaderboard from '~/components/leaderboard/leaderboard.vue'

export default {
  middleware: 'isStudent',
  name: 'leaderboard',
  layout: 'app',
  components: {},
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

  // async asyncData ({
  //   store
  // }) {
  //   await store.dispatch('siswa/leaderboard/getStudentsData')
  // },

  computed: {
    // userProgress () {
    //   return parseFloat(this.$auth.user.progress.toFixed(2))
    // },
    // students () {
    //   return this.$store.state.siswa.leaderboard.students
    // },
    // student () {
    //   return this.$auth.user
    // },

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

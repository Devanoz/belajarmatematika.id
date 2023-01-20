<template>
  <div class="root">
    <div class="title text-center my-3">
      <h1>Papan Peringkat</h1>
    </div>
    <hr class="bg-gray-300 h-0.5">
    <div
      class="leaderboard-section bg-white h-[90vh] my-5 mx-auto rounded-2xl py-5"
    >

      <div
        class="leaderboard-list h-full w-[90%] bg-[#d5dff1] mx-auto rounded-2xl overflow-y-scroll py-5"
      >
        <Leaderboard v-for="(student,student_idx) in students" :key="student.id" :no="++student_idx"  :name="student.student.name"
                     :image="student.student.image" :point="student.score"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Leaderboard from '~/components/leaderboard/leaderboard.vue'

export default {
  name: 'leaderboard',
  middleware: 'isTeacher',
  layout: 'guru',
  components: {
    Leaderboard,
  },
  data () {
    return {
      leaderboardCounter: 0,
      completedSteps: 20,
      totalSteps: 100,
      diameter: 120,
      fps: 60,
      //leaderboard number
      no: 1,
    }
  },


  created () {
    this.$store.dispatch('teacher/leaderboard/getStudentsData')
  },
  computed: {
    userProgress () {
      return parseFloat(this.$auth.user.progress.toFixed(2))
    },
    student () {
      return this.$auth.user
    },
    students () {
      return this.$store.state.teacher.leaderboard.students
    },
    getLeaderUrl () {
      if (this.student.rank === 1) {
        return require('~/assets/img/peringkat/lencana/juara1.svg')
      } else if (this.student.rank === 2) {
        return require('~/assets/img/peringkat/lencana/juara2.svg')
      } else if (this.student.rank === 3) {
        return require('~/assets/img/peringkat/lencana/juara3.svg')
      } else {
        return require('~/assets/img/peringkat/lencana/no-rank.svg')
      }
    }
  },
}
</script>

<style scoped>

.leaderboard-section {
  width: 90%;
  box-shadow: 0px 0px 10px #c0daff;
}

.detail-peringkat p {
  font-size: 0.813rem;
}

.detail-peringkat .lencana, .peringkat, .poin, .poin-pts, .no-peringkat {
  color: #CBD0D6;
}

</style>

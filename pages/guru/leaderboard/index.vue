<template>
  <div class="root flex-col h-full py-4">
    <div class="header">
      <h2 class="text-center text-2xl text-green-primary font-semibold">
        Leaderboard
      </h2>
      <hr class="mt-3"/>
    </div>
    <div
      class="relative z-20 flex items-center w-[90%] mx-auto h-10 mt-4 mb-4 rounded-3xl focus-within:shadow-lg bg-sky-100 overflow-hidden"
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
             placeholder="Cari Murid"
      />

    </div>
    <div
      class="leaderboard-section bg-white h-[90vh] my-5 mx-auto rounded-2xl py-5"
    >

      <div
        class="leaderboard-list h-full w-[90%] bg-[#d5dff1] mx-auto rounded-2xl overflow-y-scroll py-5"
      >
        <Leaderboard v-for="student in students" :key="student.id" :no="student.ranking"  :name="student.name"
                     :image="student.image" :point="student.score"
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
      search: '',
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
  methods : {
    onSearching () {
      this.$store.dispatch("teacher/leaderboard/getStudentsData", this.search)
    },
  }
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

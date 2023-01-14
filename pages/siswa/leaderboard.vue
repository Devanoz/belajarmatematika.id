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
                  {{ studentProgress }}%
                </p>
        <div
          class="circular-progress rounded-full  w-28 h-28 flex flex-col justify-center items-center"
        >
          <!--          <radial-progress-bar :completed-steps="studentProgress" :total-steps="totalSteps" :diameter="diameter" :fps="fps" inner-stroke-color="#E0E0E0" start-color="#84B2F3" stop-color="#84B2F3">-->
          <!--            <img src="~/assets/img/peringkat/rocket.svg">-->
          <!--          </radial-progress-bar>-->
          <Progress class="flex justify-center items-center" :transitionDuration="2000" :radius="50"
                    strokeColor="#84B2F3"
                    :strokeWidth="8"
                    :value="studentProgress"
          >
            <template>
              <img src="~/assets/img/peringkat/rocket.svg" class="mx-auto">
            </template>
          </Progress>
        </div>
      </div>
    </div>
    <div
      class="leaderboard-section bg-white h-[31.60rem] my-10 mx-auto rounded-2xl"
    >
      <div
        class="detail-peringkat w-72 h-32 mx-auto relative -top-14 rounded-2xl grid grid-cols-3 grid-rows-2 justify-items-center items-center py-4"
      >
        <div class="poin  h-auto w-16 flex flex-col text-center  items-center gap-1">
          <div class="poin-ikon w-5  h-5" />
          <p>Poin</p>
        </div>
        <div class="lencana  h-auto w-16 flex flex-col text-center items-center gap-1">
          <div class="lencana-ikon w-3  h-5" />
          <p>Lencana</p>
        </div>
        <div class="peringkat  h-auto w-16 flex flex-col text-center items-center gap-1">
          <div class="peringkat-ikon w-6  h-5" />
          <p>Peringkat</p>
        </div>
                <div class="poin-pts  h-3 w-20 text-center">
                  {{ student.score }} Pts
                </div>
                <div  class="lencana-img  h-3 w-16">
                  <img class="mx-auto h-9 w-9" :src="getLeaderUrl">
                </div>
                <div class="no-peringkat  h-3 w-16 text-center">
                  #{{ student.rank }}
                </div>
      </div>
      <div
        class="leaderboard-list h-[24.875rem] mx-auto -mt-10 rounded-2xl overflow-y-scroll py-5"
      >
                <Leaderboard v-for="student in students" :key="student.id" :no="no++" :name="student.student.name" :image="student.student.image" :point="student.score" />
      </div>
    </div>
  </div>
</template>

<script>
import Leaderboard from '~/components/leaderboard/leaderboard.vue'
export default {
  name: 'leaderboard',
  layout :'app',
  components: {
    Leaderboard,
  },
  data () {
    return {
      leaderboardCounter:0,
      completedSteps: 20,
      totalSteps: 100,
      diameter:120,
      fps:60,
      //leaderboard number
      no:1
    }
  },
  created () {
    this.$store.dispatch("student/getStudentData")
    this.$store.dispatch('siswa/leaderboard/getStudentsData')
  },
  computed: {
    students () {
      return this.$store.getters['siswa/leaderboard/getStudentList']
    },
    student () {
      return this.$store.getters['student/getStudent']
    },
    studentProgress () {
      return parseFloat(this.$store.getters['student/getStudent'].progress.toFixed(2))
    },
    getLeaderUrl () {
      if(this.student.rank === 1){
        return require("~/assets/img/peringkat/lencana/juara1.svg");
      }else if(this.student.rank === 2 ){
        return require("~/assets/img/peringkat/lencana/juara2.svg");
      }else if(this.student.rank === 3 ){
        return require("~/assets/img/peringkat/lencana/juara3.svg");
      }else {
        return require("~/assets/img/peringkat/lencana/no-rank.svg");
      }
    }
  },

}
</script>

<style scoped>
.leaderboard-list {
  width: 90%;
  background: #d5dff1;
}
.leaderboard-section {
  width: 90%;
  box-shadow: 0px 0px 10px #c0daff;
}
.detail-peringkat {
  background: #5781bd;
}
.detail-peringkat p {
  font-size: 0.813rem;
}
.detail-peringkat .lencana,.peringkat,.poin,.poin-pts,.no-peringkat {
  color: #CBD0D6;
}
.poin-ikon {
  background: url("@/assets/img/peringkat/poin.svg");
}
.lencana-ikon {
  background: url("@/assets/img/peringkat/lencana.svg");
}
.peringkat-ikon {
  background: url("@/assets/img/peringkat/peringkat.svg");
}
.progress-percentage {
  color: #84B2F3;
;
}
</style>

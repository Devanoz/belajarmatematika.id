<template>
  <div class="flex flex-col h-full px-4 py-4 bg-[#F6F8FF]">
    <div class="header">
      <h2 class="text-center text-2xl font-semibold">
        Judul Quiz
      </h2>
      <hr class=" mt-3">
    </div>
    <div id="quiz-content" class="w-full h-full pt-3 mb-3">
      <div id="quiz-detail" class="py-5 flex flex-col justify-center items-center w-full h-auto bg-white rounded-2xl mt-5 relative min-h-[11.063rem] max-h-[18.625rem]">
          <div id="" class="text-[#56739D] w-[5.625rem] h-[2.25rem] bg-[#DAE5FF] mx-auto absolute -top-4 left-0 right-0 rounded-2xl flex flex-col justify-center text-center" >
              <div>2/3</div>
          </div>
          <img class="w-[11.938rem] h-[8.313rem]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Simpele_kubus.svg/1280px-Simpele_kubus.svg.png" alt/>
          <p>Akar pangkat 3 dari 125 adalah</p>
      </div>
      <div id="poin" class="w-[5.625rem] h-[2.25rem] bg-[#FFF3B6] text-[#C4AE3B] my-3 mx-auto rounded-2xl flex flex-col justify-center items-center" >
        3 poin
      </div>
      <div id="question" class="w-full h-72  py-5">
          <div id="multiple-choiches"  v-if="!essay">
              <div id="choice-a" class="w-[20.438rem] h-[2.875rem] my-3 bg-white rounded-2xl border-solid border-2 border-[#6D9DE0] flex flex-col justify-center items-center">
                8
              </div>
              <div id="choice-b" class="w-[20.438rem] h-[2.875rem] my-3 bg-white rounded-2xl border-solid border-2 border-[#6D9DE0] flex flex-col justify-center items-center">
                6
              </div>
              <div id="choice-c" class="w-[20.438rem] h-[2.875rem] my-3 bg-white rounded-2xl border-solid border-2 border-[#6D9DE0] flex flex-col justify-center items-center">
                5
              </div>
              <div id="choice-d" class="w-[20.438rem] h-[2.875rem] my-3 bg-white rounded-2xl border-solid border-2 border-[#6D9DE0] flex flex-col justify-center items-center">
                7
              </div>
          </div>
          <div id="essay">
            <input type="text" class="w-[20.438rem] h-[2.875rem] my-3 bg-white rounded-2xl border-solid border-2 border-[#6D9DE0] flex flex-col justify-center items-center px-3" placeholder="Ketik jawaban">
          </div>
      </div>
    </div>
    <div id="navigate" class="w-full h-20  flex justify-between items-center px-3">
      <button id="kembali" class="w-[6.25rem] h-[2.75rem] bg-white rounded-2xl text-[#6D9DE0] border-solid border-2 border-[#6D9DE0]">
          Kembali
      </button>
      <button id="lanjut/kumpulkan" class=" w-[6.25rem] h-[2.75rem] bg-[#6D9DE0] rounded-2xl text-white">
          lanjut
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index.vue',
  data () {
    return {
      essay: true
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>

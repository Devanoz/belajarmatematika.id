<template>
  <div class="flex flex-col h-full px-4 py-4">
    <div class="grid grid-cols-3 gap-3 place-content-between">
      <nuxt-link class="flex col-span-1 flex-col mx-3 my-3" to="/siswa/tantangan/history">
        <img src="@/assets/img/general/exit.svg" class="mt-1 h-6 w-6" alt="">
      </nuxt-link>

      <div class="tittle col-span-2 my-3">
              <span class=" text-2xl font-semibold">
                Tinjauan Kuis
              </span>
      </div>

    </div>

    <div class="resume-result w-full bg-[#e0e4fc] h-50 mt-5 rounded-xl px-4">
      <div class="flex flex-col mt-5">
        <span class="text-gray-600 text-xl">Materi kuis</span>
        <span class="text-sky-800 text-xl font-semibold">{{ questions.materi.title }}</span>
      </div>

      <div class="inner-box mt-2 bg-[#ffb47c] w-full h-auto grid grid-cols-7 rounded-tl-xl rounded-tr-2xl">
        <div class="col-span-2 py-3 pl-3">
          <client-only class="bg-green-300 col-span-2">
            <Progress class=" grid justify-items-center" :transitionDuration="2000" :radius="35"
                      strokeColor="#65e3c3"
                      :strokeWidth="6"
                      :value="questions.score"
            >
              <div class=" text-white justify-self-center">
              <span class="">
              {{ questions.score }} pts

              </span>
              </div>

            </Progress>
          </client-only>

        </div>
        <div class="result-text text-[#8d3f3e] col-span-5 mt-8 font-semibold text-lg ml-2">
          <p>Kamu berhasil menjawab</p>
          <p>{{ questions.correct_answer }} dari {{ questions.total_question }} pertanyaan</p>
        </div>
      </div>

    </div>
    <span class="mt-4 text-lg font-semibold text-gray-700">
        Jawaban Kamu
      </span>
    <div class="detail-answers bg-[#e8e5fa] w-full px-4 rounded-xl mt-2 py-4">
      <div id="multiple-choiches">
        <div v-for="(item, index) in questions.questions" :key="item.id">
          <div class="grid grid-cols-7 mb-2">
            <div
              class="number grid bg-white border-2 border-gray-400  col-span-1 h-10 w-10 text-center rounded-full"
            >
              <span class="place-self-center">
              {{ index + 1 }}

              </span>
            </div>
            <div class="title col-span-6 grid">
              <span class="self-center text-lg text-gray-700 font-semibold">
            {{ item.title }}

              </span>
            </div>
          </div>


          <div v-if="item.is_pilihan_ganda == 1" class="options ml-4">
            <label

              :for="'option' + item.options[0].A"
              class="option w-[20.438rem] "
              :class="{ selected: isAselected, disabled: item.student_answers.length>0, matched:item.student_answers.length > 0 ? (item.student_answers[0].answer === 'A' ? item.answer_key === 'A': false)|| item.answer_key ==='A':false , wrong:item.student_answers.length > 0 ? (item.student_answers[0].answer === 'A' ? item.answer_key != 'A': false):false }"
            >
              <input
                :disabled="item.student_answers.length>0"
                type="radio"
                :id="'option' + item.options[0].A"
                :name="item.id"
                :value="item.options[0].A"
                @change="()=>{isAselected=true; isBselected=false; isCselected=false; isDselected=false}"

              />
              <span>{{ item.options[0].A }}</span>
            </label>

            <label

              :for="'option' + item.options[0].B"
              class="option w-[20.438rem] "
              :class="{ selected: isBselected,disabled: item.student_answers.length>0, matched:item.student_answers.length > 0 ? (item.student_answers[0].answer === 'B' ? item.answer_key === 'B': false)|| item.answer_key ==='B':false , wrong:item.student_answers.length > 0 ? (item.student_answers[0].answer === 'B' ? item.answer_key != 'B': false):false}"

            >
              <input
                :disabled="item.student_answers.length>0"
                type="radio"
                :id="'option' + item.options[0].B"
                :name="item.id"
                :value="item.options[0].B"
                @change="()=>{isAselected=false; isBselected=true; isCselected=false; isDselected=false}"


              />
              <span>{{ item.options[0].B }}</span>
            </label>


            <label

              :for="'option' + item.options[0].C"
              class="option w-[20.438rem] "
              :class="{ selected: isCselected, disabled: item.student_answers.length>0, matched:item.student_answers.length > 0 ? (item.student_answers[0].answer === 'C' ? item.answer_key === 'C': false)|| item.answer_key ==='C':false , wrong:item.student_answers.length > 0 ? (item.student_answers[0].answer === 'C' ? item.answer_key != 'C': false):false}"

            >
              <input
                :disabled="item.student_answers.length>0"
                type="radio"
                :id="'option' + item.options[0].C"
                :name="item.id"
                :value="item.options[0].C"
                @change="()=>{isAselected=false; isBselected=false; isCselected=true; isDselected=false}"


              />
              <span>{{ item.options[0].C }}</span>
            </label>


            <label

              :for="'option' + item.options[0].D"
              class="option w-[20.438rem] "
              :class="{ selected: isDselected, disabled: item.student_answers.length>0, matched:item.student_answers.length > 0 ? (item.student_answers[0].answer === 'D' ? item.answer_key === 'D': false)|| item.answer_key ==='D':false , wrong:item.student_answers.length > 0 ? (item.student_answers[0].answer === 'D' ? item.answer_key != 'D': false):false}"

            >
              <input
                :disabled="item.student_answers.length>0"
                type="radio"
                :id="'option' + item.options[0].D"
                :name="item.id"
                :value="item.options[0].D"
                @change="()=>{isAselected=false; isBselected=false; isCselected=false; isDselected=true}"


              />
              <span>{{ item.options[0].D }}</span>
            </label>
          </div>
          <div v-else id="essay mb-2">
            <input v-if="item.student_answers.length >0" type="text"
                   :value="item.student_answers[0].answer"
                   :disabled="item.student_answers[0].answer"
                   :class="{matched: item.student_answers[0].answer === item.answer_key, wrong:item.student_answers[0].answer !== item.answer_key}"
                   class="w-[20.438rem] h-[2.875rem] mb-2  ml-4 rounded-xl border-solid essay flex flex-col justify-center items-center px-3"
                   placeholder="Ketik jawaban"
            >
            <input v-else type="text"
                   class="w-[20.438rem] h-[2.875rem] mb-2  ml-4 bg-white rounded-2xl border-solid border-2 border-[#6D9DE0] flex flex-col justify-center items-center px-3"
                   placeholder="Ketik jawaban"
            >

            <div v-if="item.student_answers.length >0 ? (item.student_answers[0].answer !== item.answer_key): false"
                 class="correct-answer ml-4"
            >
              <p class="text-green-600 text-lg font-semibold">Jawaban benar : {{ item.answer_key }}</p>
            </div>
          </div>


        </div>
      </div>

    </div>

    <NuxtLink to="/siswa/tantangan/history"

    >
      <button class="btn-selesai text-white my-4 py-3 rounded-xl w-full"
              style="background: linear-gradient(180deg, #6D9DE0 0%, #5D86BF 100%);"
      >
        SELESAI
      </button>
    </NuxtLink>

  </div>
</template>

<script>
export default {
  name: 'detail-result',

  async asyncData ({
    store,
    route
  }) {
    await store.dispatch('siswa/question/getQuestionsData', route.query.id)
  },

  data () {
    return {
      isAselected: false,
      isBselected: false,
      isCselected: false,
      isDselected: false,
    }
  },

  computed: {
    questions () {
      return this.$store.state.siswa.question.questions
    }
  },
}
</script>

<style scoped>
.inner-box {
  background-image: url("@/assets/img/result-history/bg.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: right;
}

.options {
  margin-bottom: 1rem;
}

.option {
  padding: 0.8rem;
  display: block;
  background-color: white;
  margin-bottom: 0.5rem;
  border-radius: 0.8rem;
  border: 0.15rem solid #6D9DE0;
  cursor: pointer;
}

.option:hover {
  background-color: #FFF3B6;
}

.option.selected {
  background-color: #2ed054;
}

.option.selected.disabled {
  background-color: #8fe1a2;

}

.option.disabled.matched {
  background-color: #DFFCDD;
  border: 2px solid #50BA48;
  opacity: 0.8;

}


.option.disabled.wrong {
  background-color: #FFD0D0;
  border: 2px solid #E40000;
  opacity: 0.8;

}

input.essay.wrong {
  background-color: #FFD0D0;
  border: 2px solid #E40000;
  opacity: 0.8;
}

input.essay.matched {
  background-color: #DFFCDD;
  border: 2px solid #50BA48;
  opacity: 0.8;
}

.option.disabled {
  background-color: #7899bd;

}


.option.wrong {
  background-color: #ff5a5f;
}

.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}
</style>

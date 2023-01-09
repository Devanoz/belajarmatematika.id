<template>
  <div class="flex flex-col h-full px-4 py-4 bg-[#F6F8FF]">
    <div class="header">
      <h2 class="text-center text-2xl font-semibold">
        {{ challenge.title }}
      </h2>
      <hr class=" mt-3">
    </div>
    <div id="quiz-content" class="w-full h-full pt-3 mb-3">
      <div id="quiz-detail"
           class="py-5 flex flex-col justify-center items-center w-full h-auto bg-white rounded-2xl mt-5 relative min-h-[11.063rem] max-h-[18.625rem]"
      >

        <div v-for="item in pageOfItems" :key="item.id">
          <img v-if="item.image != null" class="w-[11.938rem] h-[8.313rem]"
               :src="item.image"
               alt
          />
          <p class="text-center">
            {{ item.title }}

          </p>


        </div>

      </div>
      <div id="poin"
           class="w-[5.625rem] h-[2.25rem] bg-[#FFF3B6] text-[#C4AE3B] my-3 mx-auto rounded-2xl flex flex-col justify-center items-center"
      >
        3 poin
      </div>
      <div id="question" class="w-full h-72  py-5 grid justify-items-center">
        <div id="multiple-choiches">
          <div v-for="item in pageOfItems" :key="item.id">


            <div v-if="item.is_pilihan_ganda == 1" class="options">
              <label

                :for="'option' + item.options[0].A"
                class="option w-[20.438rem] "
                :class="{ selected: isAselected, disabled: item.student_answers.length>0, historySelected:item.student_answers.length > 0 ? (item.student_answers[0].answer == 'A'? true: false): false}"
              >
                <input
                  :disabled="item.student_answers.length>0"
                  type="radio"
                  :id="'option' + item.options[0].A"
                  :name="item.id"
                  :value="item.options[0].A"
                  v-model="answer"
                  @change="()=>{isAselected=true; isBselected=false; isCselected=false; isDselected=false}"

                />
                <span>{{ item.options[0].A }}</span>
              </label>

              <label

                :for="'option' + item.options[0].B"
                class="option w-[20.438rem] "
                :class="{ selected: isBselected,disabled: item.student_answers.length>0, historySelected:item.student_answers.length > 0 ? (item.student_answers[0].answer == 'B'? true: false): false}"

              >
                <input
                  :disabled="item.student_answers.length>0"
                  type="radio"
                  :id="'option' + item.options[0].B"
                  :name="item.id"
                  :value="item.options[0].B"
                  v-model="answer"
                  @change="()=>{isAselected=false; isBselected=true; isCselected=false; isDselected=false}"


                />
                <span>{{ item.options[0].B }}</span>
              </label>


              <label

                :for="'option' + item.options[0].C"
                class="option w-[20.438rem] "
                :class="{ selected: isCselected, disabled: item.student_answers.length>0, historySelected:item.student_answers.length > 0 ? (item.student_answers[0].answer == 'C'? true: false): false}"

              >
                <input
                  :disabled="item.student_answers.length>0"
                  type="radio"
                  :id="'option' + item.options[0].C"
                  :name="item.id"
                  :value="item.options[0].C"
                  v-model="answer"
                  @change="()=>{isAselected=false; isBselected=false; isCselected=true; isDselected=false}"


                />
                <span>{{ item.options[0].C }}</span>
              </label>


              <label

                :for="'option' + item.options[0].D"
                class="option w-full "
                :class="{ selected: isDselected, disabled: item.student_answers.length>0, historySelected:item.student_answers.length > 0 ? (item.student_answers[0].answer == 'D'? true: false): false}"

              >
                <input
                  :disabled="item.student_answers.length>0"
                  type="radio"
                  :id="'option' + item.options[0].D"
                  :name="item.id"
                  :value="item.options[0].D"
                  v-model="answer"
                  @change="()=>{isAselected=false; isBselected=false; isCselected=false; isDselected=true}"


                />
                <span>{{ item.options[0].D }}</span>
              </label>
            </div>
            <div v-else id="essay">
              <input v-if="item.student_answers.length >0" type="text"
                     :value="item.student_answers[0].answer"
                     :disabled="item.student_answers[0].answer"
                     class="w-[20.438rem] h-[2.875rem] my-3 disabled:bg-[#8fe1a2] disabled:opacity-50 bg-white rounded-xl border-solid border-2 border-[#6D9DE0] flex flex-col justify-center items-center px-3"
                     placeholder="Ketik jawaban"
              >
              <input v-else type="text"
                     v-model="answer"
                     class="w-[20.438rem] h-[2.875rem] my-3 bg-white rounded-2xl border-solid border-2 border-[#6D9DE0] flex flex-col justify-center items-center px-3"
                     placeholder="Ketik jawaban"
              >
            </div>


          </div>
        </div>
      </div>
    </div>
    <!--    <div id="navigate" class="w-full h-20  flex justify-between items-center px-3">-->
    <!--      <button id="kembali"-->
    <!--              class="w-[6.25rem] h-[2.75rem] bg-white rounded-2xl text-[#6D9DE0] border-solid border-2 border-[#6D9DE0]"-->
    <!--      >-->
    <!--        Kembali-->
    <!--      </button>-->
    <!--      <button id="lanjut/kumpulkan" class=" w-[6.25rem] h-[2.75rem] bg-[#6D9DE0] rounded-2xl text-white">-->
    <!--        lanjut-->
    <!--      </button>-->
    <!--    </div>-->

    <pagination :items="questions" :initial-page="1" :page-size="1" @changePage="changePage"/>


  </div>
</template>

<script>


export default {
  name: 'quiz',
  components: {},
  data () {
    return {
      essay: true,
      challenge: {
        title: ''
      },
      isAselected: false,
      isBselected: false,
      isCselected: false,
      isDselected: false,
      pageOfItems: [],
      search: '',
      answer: '',
      validation: []

    }
  },

  async asyncData ({
    store,
    route
  }) {
    await store.dispatch('siswa/question/getQuestionsData', route.query.id)
  },

  //computed
  computed: {

    questions () {
      return this.$store.state.siswa.question.questions.questions
    }

  },

  watch: {
    pageOfItems (newData, oldData) {
      console.log(this.answer)
      console.log(newData)
      console.log(oldData)
      console.log('hehe')
      if (this.answer != '') {
        if (oldData[0].id <= newData[0].id) {
          this.submitAnswer(oldData[0].id)

          if (oldData[0].id === newData[0].id) {
            this.submitChallenge()
          }

        }

      } else {

      }
    }
  },

  methods: {
    async submitAnswer (data) {

      //define formData
      let formData = new FormData()

      formData.append('question_id', data)
      if (this.isAselected == true) {
        formData.append('answer', 'A')
      } else if (this.isBselected == true) {
        formData.append('answer', 'B')
      } else if (this.isCselected == true) {
        formData.append('answer', 'C')
      } else if (this.isDselected == true) {
        formData.append('answer', 'D')
      } else {
        formData.append('answer', this.answer)
      }

      //sending data to action "storeCategory" vuex
      await this.$store.dispatch('siswa/question/submitAnswer', formData)

        //success
        .then(() => {
          this.isAselected = false
          this.isBselected = false
          this.isCselected = false
          this.isDselected = false
          this.answer = ''

          this.$swal.fire({
            title: 'BERHASIL!',
            text: 'Soal Dikerjakan!',
            icon: 'success',
            showConfirmButton: false,
            timer: 500
          })

        })

        //error
        .catch(error => {

          //assign error to state "validation"
          this.validation = error.response.data
          if (this.validation) {
            this.$swal.fire({
              title: 'Tidak!',
              text: 'Pertanyaan Harus Dijawab dulu!',
              icon: 'warning',
              showConfirmButton: false,
              timer: 500
            })
          }
        })
    },
    async submitChallenge () {

      //define formData
      let formData = new FormData()

      formData.append('challenge_id', this.$route.query.id)

      //sending data to action "storeCategory" vuex
      await this.$store.dispatch('siswa/question/submitChallenge', formData)

        //success
        .then(() => {

          this.$swal.fire({
            title: 'Horee!',
            text: 'Tantangan Selesai!',
            icon: 'success',
            showConfirmButton: false,
            timer: 500
          })

        })

        //error
        .catch(error => {

          //assign error to state "validation"

        })
    },

    changePage (page) {
      this.pageOfItems = page
      //commit to mutation "SET_PAGE"
      this.$store.commit('siswa/question/SET_PAGE', page)
      console.log(page)

      //dispatch on action "getCategoriesData"
      // this.$store.dispatch('siswa/question/getQuestionsData', this.$route.query.id)
    },
  },
  mounted () {
    this.challenge.title = this.$route.query.title
    console.log(this.questions)
  }
}
</script>

<style>
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

.option.disabled.historySelected {
  background-color: #8fe1a2;

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

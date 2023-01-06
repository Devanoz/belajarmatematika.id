<template>

  <div>
    <!--  edit quetion modal   -->
    <transition name="fade">
      <div v-if="isModalVisible">
        <div
          @click="onToggle"
          class="absolute bg-black opacity-70 w-full h-full inset-0 z-20"
        ></div>
        <div
          class="w-full max-w-lg p-3 absolute mx-auto mt-52 my-auto rounded-xl shadow-lg bg-white z-30"
        >
          <div>
            <div class="text-center p-3 flex-auto justify-center leading-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-16 h-16 flex items-center text-purple-500 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <h2 class="text-2xl font-bold py-4">Are you sure?</h2>
              <p class="text-md text-gray-500 px-8">
                Do you really want to exit without saving your work?
              </p>
            </div>
            <div class="p-3 mt-2 text-center space-x-4 md:block">
              <button
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
              >
                Save
              </button>
              <button
                @click="onToggle"
                class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="flex flex-col px-4 py-4">

      <div class="title h-16 grid grid-cols-4 items-center">
        <button class="ml-8 text-[1.4em] col-span-1">
          <nuxt-link to="/guru/tantangan">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.4718 9.01357L16.6655 2.81987C16.7688 2.72365 16.8516 2.60762 16.909 2.47871C16.9665 2.34979 16.9973 2.21062 16.9998 2.06951C17.0023 1.92839 16.9764 1.78822 16.9235 1.65736C16.8707 1.5265 16.792 1.40762 16.6922 1.30782C16.5924 1.20802 16.4735 1.12935 16.3426 1.07649C16.2118 1.02363 16.0716 0.997674 15.9305 1.00016C15.7894 1.00265 15.6502 1.03354 15.5213 1.09098C15.3924 1.14842 15.2763 1.23124 15.1801 1.3345L8.98643 7.5282L2.79273 1.3345C2.5935 1.14886 2.32999 1.04779 2.05772 1.05259C1.78545 1.0574 1.52567 1.1677 1.33311 1.36025C1.14056 1.55281 1.03026 1.81259 1.02545 2.08486C1.02065 2.35713 1.12172 2.62064 1.30736 2.81987L7.50106 9.01357L1.30736 15.2073C1.11055 15.4043 1 15.6714 1 15.95C1 16.2285 1.11055 16.4956 1.30736 16.6926C1.50442 16.8895 1.77154 17 2.05004 17C2.32855 17 2.59567 16.8895 2.79273 16.6926L8.98643 10.4989L15.1801 16.6926C15.3772 16.8895 15.6443 17 15.9228 17C16.2013 17 16.4684 16.8895 16.6655 16.6926C16.8623 16.4956 16.9729 16.2285 16.9729 15.95C16.9729 15.6714 16.8623 15.4043 16.6655 15.2073L10.4718 9.01357Z"
                fill="#56739D" stroke="#56739D" stroke-width="0.5"
              />
            </svg>
          </nuxt-link>
        </button>
        <h1 class="text-[1.4em] col-span-2 text-gray-700 font-medium text-center">
          Edit Tantangan
        </h1>
      </div>


      <div class="form-challenge z-0">
        <form @submit.prevent="updateChallenge">
          <div class="materi-section mt-6 px-4 h-auto">
            <label class=" font-bold text-gray-500 mb-2">Judul Tantangan</label><br>
            <input id="judul" v-model="challenge.title" type="text"
                   class="w-full text-gray-500 h-11 rounded-2xl border-2 border-gray-400 px-5 disabled:text-gray-400 "
            >
            <div v-if="validation.title" class=" text-center py-4 px-2 w-full">
              <div class="p-2 bg-yellow-100  items-center text-yellow-700 leading-none rounded-full inline-flex"
                   role="alert"
              >
                <span class="flex rounded-full bg-yellow-600 text-white uppercase px-2 py-1 text-xs font-bold mr-3">Warning</span>
                <span class="font-semibold mr-2 text-left flex-auto">{{ validation.title[0] }}</span>
                <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="materi-section px-4 mt-4">
            <label class=" font-bold text-gray-500 mb-2">Materi</label><br>
            <multiselect
              v-model="materi_id"
              :options="materis"
              :searchable="true"
              placeholder="Materi"
              selected-label=""
              select-label=""
              deselect-label=""
              track-by="title"
              label="title"
            />


            <div v-if="validation.materi_id" class=" text-center py-4 px-2 w-full">
              <div class="p-2 bg-yellow-100  items-center text-yellow-700 leading-none rounded-full inline-flex"
                   role="alert"
              >
                <span class="flex rounded-full bg-yellow-600 text-white uppercase px-2 py-1 text-xs font-bold mr-3">Warning</span>
                <span class="font-semibold mr-2 text-left flex-auto">{{ validation.materi_id[0] }}</span>
                <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="button-tambahkan flex flex-row justify-center">
            <button type="submit" class="bg-orange-400 w-3/4 text-white font-bold py-2 mt-7 px-4 rounded-xl">
              Update
            </button>
          </div>
        </form>
      </div>


      <div class="px-3">
        <div class="
                relative
                z-0
                grid grid-cols-6
                card-image
                drop-shadow-lg
                border-b-2
                mb-2
                rounded-xl
                bg-white
                py-3
                px-3
                my-3" v-for="question in questions"
        >

          <div class="body col-span-5">
            <p class="question">
              {{ question.title }}

            </p>
            <div v-if="question.is_pilihan_ganda ==1" class="optionA ml-2 mt-2">

              <div class="grid grid-cols-2 ">
                <div class="form-group justify-self-start">
                  <input type="radio" :name="'opsi' + question.title" class="checked:text-green-600"
                         :checked="question.answer_key=='A'"
                  >
                  <label>{{ question.options[0].A }}</label>
                </div>
                <div v-if="question.answer_key=='A'" class="checked justify-self-end">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01667 9.35 5.75 9.35C5.48333 9.35 5.25 9.45 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.25 7.81667 15.25 7.55C15.25 7.28333 15.15 7.05 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                      fill="#0FA958"
                    />
                  </svg>
                </div>
              </div>

              <div class="grid grid-cols-2 ">
                <div class="form-group justify-self-start">
                  <input type="radio" :name="'opsi' + question.title" class="checked:text-green-600"
                         :checked="question.answer_key=='B'"
                  >
                  <label>{{ question.options[0].B }}</label>
                </div>
                <div v-if="question.answer_key=='B'" class="checked justify-self-end">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01667 9.35 5.75 9.35C5.48333 9.35 5.25 9.45 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.25 7.81667 15.25 7.55C15.25 7.28333 15.15 7.05 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                      fill="#0FA958"
                    />
                  </svg>
                </div>
              </div>

              <div class="grid grid-cols-2 ">
                <div class="form-group justify-self-start">
                  <input type="radio" :name="'opsi' + question.title" class="checked:text-green-600"
                         :checked="question.answer_key=='C'"
                  >
                  <label>{{ question.options[0].C }}</label>
                </div>
                <div v-if="question.answer_key=='C'" class="checked justify-self-end">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01667 9.35 5.75 9.35C5.48333 9.35 5.25 9.45 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.25 7.81667 15.25 7.55C15.25 7.28333 15.15 7.05 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                      fill="#0FA958"
                    />
                  </svg>
                </div>
              </div>

              <div class="grid grid-cols-2 ">
                <div class="form-group justify-self-start">
                  <input type="radio" :name="'opsi' + question.title" class="checked:text-green-600"
                         :checked="question.answer_key=='D'"
                  >
                  <label>{{ question.options[0].D }}</label>
                </div>
                <div v-if="question.answer_key=='D'" class="checked justify-self-end">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01667 9.35 5.75 9.35C5.48333 9.35 5.25 9.45 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.25 7.81667 15.25 7.55C15.25 7.28333 15.15 7.05 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                      fill="#0FA958"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div v-else class="text-green-600">
              Jawaban Benar: {{ question.answer_key }}
            </div>
          </div>
          <div class="btn-edit justify-self-end self-end">
            <button @click="onEdit(question)">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 20.525C1.45 20.525 0.979 20.329 0.587 19.937C0.195667 19.5457 0 19.075 0 18.525V4.525C0 3.975 0.195667 3.504 0.587 3.112C0.979 2.72067 1.45 2.525 2 2.525H10.925L8.925 4.525H2V18.525H16V11.575L18 9.575V18.525C18 19.075 17.8043 19.5457 17.413 19.937C17.021 20.329 16.55 20.525 16 20.525H2ZM13.175 3.1L14.6 4.5L8 11.1V12.525H9.4L16.025 5.9L17.45 7.3L10.25 14.525H6V10.275L13.175 3.1ZM17.45 7.3L13.175 3.1L15.675 0.6C16.075 0.2 16.5543 0 17.113 0C17.671 0 18.1417 0.2 18.525 0.6L19.925 2.025C20.3083 2.40833 20.5 2.875 20.5 3.425C20.5 3.975 20.3083 4.44167 19.925 4.825L17.45 7.3Z"
                  fill="#E4A951"
                />
              </svg>

            </button>
          </div>


        </div>

      </div>


    </div>

  </div>

</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
  name: 'update-tantangan',
  components: {
    Multiselect
  },

  data () {
    return {
      tempQuestion: {},
      isOpen: false,
      materi_id: '',
      challenge_id: '',
      challenge: {
        id: '',
        title: ''
      },

      materi: {
        id: '',
        title: ''
      },

      validation: []
    }
  },

  //hook "asyncData"
  async asyncData ({
    store,
    route
  }) {
    await store.dispatch('teacher/materi/getMaterisData')
    await store.dispatch('teacher/challenge/getDetailChallenge', route.query.challenge)
    await store.dispatch('teacher/question/getQuestionsData', route.query.challenge)
    await store.dispatch('teacher/materi/getDetailMateri', route.query.materi)
  },

  //computed
  computed: {
    isModalVisible () {
      return this.isOpen
    },

    materis () {
      return this.$store.state.teacher.materi.materis.data
    },

    questions () {
      return this.$store.state.teacher.question.questions.data
    }

  },

  mounted () {
    this.materi_id = this.$route.query.materi
    this.challenge.id = this.$route.query.challenge
    this.materi_id = this.$store.state.teacher.materi.materi
    this.challenge.title = this.$store.state.teacher.challenge.challenge.title

  },

  methods: {
    onEdit (data) {
      this.tempQuestion = data
      this.isOpen = !this.isOpen
      console.log(this.tempQuestion)
    },
    onToggle () {
      this.isOpen = !this.isOpen
    },
    async updateChallenge () {
      //define formData
      const formData = new FormData()

      formData.append('title', this.challenge.title)
      formData.append('materi_id', this.materi_id.id)
      formData.append('_method', 'PATCH')

      //sending data to action "updateCategory" vuex
      await this.$store.dispatch('teacher/challenge/updateChallenge', {
        challengeId: this.$route.query.challenge,
        payload: formData
      })

        //success
        .then(() => {

          //sweet alert
          this.$swal.fire({
            title: 'BERHASIL!',
            text: 'Data Berhasil Diupdate!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })

          //redirect route "admin-categories"

        })

        //error
        .catch(error => {

          //assign error to state "validation"
          this.validation = error.response.data
        })

    }
  }

}
</script>

<style scoped>

</style>

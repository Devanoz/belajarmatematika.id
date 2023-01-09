<template>
  <div class="flex flex-col h-full px-4 py-4">
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
      <h1 class="text-[1.4em] col-span-2 text-gray-700 font-bold text-center">
        Tambah Tantangan
      </h1>
    </div>

    <div class="input-video">
      <form @submit.prevent="storeChallenge">
        <div class="materi-section mt-6 px-4 h-auto">
          <label class=" font-bold text-gray-500 mb-2">Judul Tantangan</label><br>
          <input id="judul" v-model="challenge.judul" type="text" :disabled="challenge.id !=''"
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
            v-model="challenge.materi"
            :disabled="challenge.id !=''"
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

        <div v-if="challenge.id ==''" class="button-tambahkan flex flex-row justify-center">
          <button type="submit" class="bg-orange-400 w-3/4 text-white font-bold py-2 mt-7 px-4 rounded-xl">
            Tambahkan
          </button>
        </div>
      </form>

      <div v-if="challenge.id" class="make-question">
        <form @submit.prevent="storeQuestion">
          <ul id="tabs-tab"
              class="nav nav-tabs grid grid-cols-4 mx-4 mt-6 list-none border-b-0 mb-4 px-2 bg-slate-400 rounded-2xl"
              role="tablist"
          >
            <li class="nav-item col-span-2 text-center grid" role="presentation">
              <button
                id="tabs-home-tab"
                href="#tabs-home"
                type="button"
                :class="{'bg-gray-100 rounded-2xl': isPilihanGanda}"
                class="
      nav-link
      block
      justify-self-center
      font-medium
      text-xs
      text-center
      leading-tight
      uppercase
      hover:rounded-2xl
      border-x-0 border-t-0 border-b-2 border-transparent
      px-8
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
                data-bs-toggle="pill"
                data-bs-target="#tabs-home"
                role="tab"
                aria-controls="tabs-home"
                aria-selected="true" @click="isPilihanGanda = true"
              >
                Pilihan Ganda
              </button>
            </li>
            <li class="nav-item col-span-2 grid" role="presentation">
              <button
                type="button"
                href="#tabs-profile"
                :class="{'bg-gray-100 rounded-2xl': !isPilihanGanda}"
                id="tabs-profile-tab"
                class="
      nav-link
      block
      text-xs
      mr-2
      justify-self-center
      leading-tight
      uppercase
      hover:rounded-2xl
      border-x-0 border-t-0 border-b-2 border-transparent
      px-14
      py-3
      font-semibold
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
                @click="isPilihanGanda = false"
                data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab" aria-controls="tabs-profile"
                aria-selected="false"
              >
                <span class="text-center font-semibold">Essay</span>
              </button>
            </li>
          </ul>
          <div id="tabs-tabContent" class="tab-content px-4">
            <div v-if="isPilihanGanda == true" id="tabs-home" class="tab-pane fade show active" role="tabpanel"
                 aria-labelledby="tabs-home-tab"
            >
              <label class=" font-bold text-gray-500 mb-2">Deskripsi Soal</label><br>
              <textarea id="" v-model="question.title" cols="42" rows="2"
                        class="w-full text-gray-500 mb-2 border-gray-500 rounded-2xl px-2 py-1 border-2"
              />
              <label class="mt-4 font-bold text-gray-500">Uploud Gambar Soal (Opsional)</label><br>
              <div v-if="question.file == ''" class="flex items-center justify-center w-full mb-2  px-2">
                <label for="dropzone-file"
                       class="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 "
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">

                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Klik untuk melampirkan file</span>
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" @change="handleFileChange">

                </label>
              </div>
              <div v-if="question.file !=''" class="file-preview px-4 mt-6">
                <span class=" font-semibold text-gray-500 mb-3">
                  Terlampir
                </span>
                <div class="grid grid-cols-4">
                  <img src="~/assets/img/general/pdf.svg" alt="">
                  <span class=" col-span-2">
                    {{ question.file.name }}
                  </span>
                  <button class="place-self-end self-center" @click="onFileDeleted">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10385 7.01018L12.7491 2.3649C12.8266 2.29274 12.8887 2.20572 12.9318 2.10903C12.9748 2.01234 12.998 1.90797 12.9999 1.80213C13.0017 1.6963 12.9823 1.59117 12.9426 1.49302C12.903 1.39487 12.844 1.30571 12.7691 1.23087C12.6943 1.15602 12.6051 1.09701 12.507 1.05737C12.4088 1.01772 12.3037 0.998255 12.1979 1.00012C12.092 1.00199 11.9877 1.02516 11.891 1.06824C11.7943 1.11132 11.7073 1.17343 11.6351 1.25087L6.98982 5.89615L2.34454 1.25087C2.19512 1.11164 1.99749 1.03584 1.79329 1.03945C1.58908 1.04305 1.39425 1.12577 1.24983 1.27019C1.10542 1.41461 1.02269 1.60944 1.01909 1.81364C1.01549 2.01785 1.09129 2.21548 1.23052 2.3649L5.8758 7.01018L1.23052 11.6555C1.08291 11.8032 1 12.0036 1 12.2125C1 12.4213 1.08291 12.6217 1.23052 12.7695C1.37831 12.9171 1.57865 13 1.78753 13C1.99641 13 2.19675 12.9171 2.34454 12.7695L6.98982 8.1242L11.6351 12.7695C11.7829 12.9171 11.9832 13 12.1921 13C12.401 13 12.6013 12.9171 12.7491 12.7695C12.8967 12.6217 12.9796 12.4213 12.9796 12.2125C12.9796 12.0036 12.8967 11.8032 12.7491 11.6555L8.10385 7.01018Z"
                        fill="#BDBDBD" stroke="#828282" stroke-width="0.4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <label class="mt-6 font-bold text-gray-500 mb-2">Pilihan A</label><br>
              <input id="judul" v-model="question.options[0].body" type="text"
                     class="w-full h-11 mb-2 rounded-2xl border-2 text-gray-500 border-gray-400 px-5"
              >
              <label class="mt-6 font-bold text-gray-500 mb-2">Pilihan B</label><br>
              <input id="judul" v-model="question.options[1].body" type="text"
                     class="w-full h-11 mb-2 rounded-2xl border-2 text-gray-500 border-gray-400 px-5"
              >
              <label class="mt-6 font-bold text-gray-500 mb-2">Pilihan C</label><br>
              <input id="judul" v-model="question.options[2].body" type="text"
                     class="w-full h-11 mb-2 rounded-2xl border-2 text-gray-500 border-gray-400 px-5"
              >
              <label class="mt-6 font-bold text-gray-500 mb-2">Pilihan D</label><br>
              <input id="judul" v-model="question.options[3].body" type="text"
                     class="w-full h-11 mb-2 rounded-2xl border-2 text-gray-500 border-gray-400 px-5"
              >

              <label class=" font-bold text-gray-500 mb-2">Kunci Jawaban</label><br>
              <multiselect
                v-model="question.answerKey"
                :options="question.options"
                :searchable="true"
                placeholder="Kunci"
                selected-label=""
                select-label=""
                deselect-label=""
                track-by="body"
                label="body"
              />

              <div
                v-if="question.options[0].body !='' & question.options[1].body !='' & question.options[2].body !='' & question.options[3].body !=''"
                class="button-tambahkan flex flex-row justify-center"
              >
                <button type="submit" class="bg-orange-400 w-3/4 text-white font-bold py-2 mt-7 px-4 rounded-xl">
                  Tambahkan
                </button>
              </div>

              <div v-if="is_question_submitted == true" class="button-tambahkan flex flex-row justify-center ">
                <NuxtLink to="/guru/tantangan"
                          class="flex flex-row justify-center mx-auto bg-green-400 w-3/4 text-white font-bold py-2 mt-7 px-4 rounded-xl"
                >
                  <button>
                    Selesai
                  </button>
                </NuxtLink>
              </div>
            </div>
            <div v-if="isPilihanGanda == false" id="tabs-profile" class="tab-pane fade" role="tabpanel"
                 aria-labelledby="tabs-profile-tab"
            >
              <label class="mt-4 font-bold text-gray-500">Uploud Gambar Soal (Opsional)</label><br>

              <div v-if="question.file == ''" class="flex items-center justify-center w-full mb-2  px-2">
                <label for="dropzone-file"
                       class="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 "
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">

                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Klik untuk melampirkan file</span>
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" @change="handleFileChange">

                </label>
              </div>
              <div v-if="question.file !=''" class="file-preview px-4 mt-6">
                <span class=" font-semibold text-gray-500 mb-3">
                  Terlampir
                </span>
                <div class="grid grid-cols-4">
                  <img src="~/assets/img/general/pdf.svg" alt="">
                  <span class=" col-span-2">
                    {{ question.file.name }}
                  </span>
                  <button class="place-self-end self-center" @click="onFileDeleted">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10385 7.01018L12.7491 2.3649C12.8266 2.29274 12.8887 2.20572 12.9318 2.10903C12.9748 2.01234 12.998 1.90797 12.9999 1.80213C13.0017 1.6963 12.9823 1.59117 12.9426 1.49302C12.903 1.39487 12.844 1.30571 12.7691 1.23087C12.6943 1.15602 12.6051 1.09701 12.507 1.05737C12.4088 1.01772 12.3037 0.998255 12.1979 1.00012C12.092 1.00199 11.9877 1.02516 11.891 1.06824C11.7943 1.11132 11.7073 1.17343 11.6351 1.25087L6.98982 5.89615L2.34454 1.25087C2.19512 1.11164 1.99749 1.03584 1.79329 1.03945C1.58908 1.04305 1.39425 1.12577 1.24983 1.27019C1.10542 1.41461 1.02269 1.60944 1.01909 1.81364C1.01549 2.01785 1.09129 2.21548 1.23052 2.3649L5.8758 7.01018L1.23052 11.6555C1.08291 11.8032 1 12.0036 1 12.2125C1 12.4213 1.08291 12.6217 1.23052 12.7695C1.37831 12.9171 1.57865 13 1.78753 13C1.99641 13 2.19675 12.9171 2.34454 12.7695L6.98982 8.1242L11.6351 12.7695C11.7829 12.9171 11.9832 13 12.1921 13C12.401 13 12.6013 12.9171 12.7491 12.7695C12.8967 12.6217 12.9796 12.4213 12.9796 12.2125C12.9796 12.0036 12.8967 11.8032 12.7491 11.6555L8.10385 7.01018Z"
                        fill="#BDBDBD" stroke="#828282" stroke-width="0.4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <label class=" font-bold text-gray-500 mb-2">Deskripsi Soal</label><br>
              <textarea id="" v-model="question.title" cols="42" rows="2"
                        class="w-full text-gray-500 mb-2 border-gray-500 rounded-2xl px-2 py-1 border-2"
              />
              <label class=" font-bold text-gray-500 mb-2">Jawaban Benar</label><br>
              <textarea id="" v-model="question.answerKey" cols="42" rows="2"
                        class="w-full text-gray-500 mb-2 border-gray-500 rounded-2xl px-2 py-1 border-2"
              />
              <div v-if="question.title != '' & question.answerKey != ''"
                   class="button-tambahkan flex flex-row justify-center"
              >

                <button type="submit" class="bg-orange-400 w-3/4 text-white font-bold py-2 mt-7 px-4 rounded-xl">
                  Tambahkan
                </button>
              </div>

              <div v-if="is_question_submitted == true" class="button-tambahkan flex flex-row justify-center ">
                <NuxtLink to="/guru/tantangan"
                          class="flex flex-row justify-center mx-auto bg-green-400 w-3/4 text-white font-bold py-2 mt-7 px-4 rounded-xl"
                >
                  <button>
                    Selesai
                  </button>
                </NuxtLink>
              </div>
            </div>


          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
  components: {
    Multiselect
  },

  middleware: 'isTeacher',

  async asyncData ({
    store
  }) {
    await store.dispatch('teacher/materi/getMaterisData')
  },
  data () {
    return {

      is_question_submitted: true,

      challenge: {
        id: '',
        judul: '',
        materi: ''
      },

      options: ['A', 'B', 'C', 'D'],

      question: {
        title: '',
        file: '',
        is_pilihan_ganda: '',
        answerKey: '',
        options: [
          {
            id: 'A',
            body: ''
          },
          {
            id: 'B',
            body: ''
          }, {
            id: 'C',
            body: ''
          }, {
            id: 'D',
            body: ''
          }
        ]
      },

      isPilihanGanda: true,
      isEssay: '',
      validation: []
    }
  },

  // computed
  computed: {
    materis () {
      return this.$store.state.teacher.materi.materis.data
    }
  },

  methods: {
    pilihanGanda () {
      this.isPilihanGanda = true
    },
    // handle file upload
    handleFileChange (e) {
      // get image
      const image = this.question.file = e.target.files[0]
      // check fileType
      if (!image.type.match('image.*')) {
        console.log('error')
        this.$swal.fire({
          title: 'OOPS!',
          text: 'Format File Tidak Didukung!',
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        })

        // if fileType not allowed, then clear value and set null
        e.target.value = ''

        // set state "category.image" to null
        this.question.file = ''
      }

      console.log('yee berhasil')
    },

    onFileDeleted () {
      this.question.file = ''
    },

    async storeQuestion () {
      const formData = new FormData()
      formData.append('title', this.question.title)

      let isPilihanGanda = this.isPilihanGanda == true ? 1 : 0

      if (isPilihanGanda == 1) {
        formData.append('answer_key', this.question.answerKey ? this.question.answerKey.id : '')

      } else {
        console.log('ini bukan pilgan')
        formData.append('answer_key', this.question.answerKey)
      }

      if (this.question.file !== '') {
        formData.append('image', this.question.file)
      }
      formData.append('challenge_id', this.challenge.id)
      formData.append('is_pilihan_ganda', this.isPilihanGanda == true ? 1 : 0)
      formData.append('A', this.question.options[0].body)
      formData.append('B', this.question.options[1].body)
      formData.append('C', this.question.options[2].body)
      formData.append('D', this.question.options[3].body)

      await this.$axios.post('/api/teacher/questions', formData)
        // success
        .then((response) => {
          this.$swal.fire({
            title: 'BERHASIL!',
            text: 'Pertanyaan Berhasil Ditambahkan!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })
          this.is_question_submitted = true
          console.log(response.data)
          this.challenge.id = response.data.data.challenge_id
          this.question.title = ''
          this.question.answerKey = ''
          this.question.file = ''
          this.question.options[0].body = ''
          this.question.options[1].body = ''
          this.question.options[2].body = ''
          this.question.options[3].body = ''
        })
        // error
        .catch((error) => {
          // assign error to state "validation"
          this.validation = error.response ? this.response.data : ''
        })
    },
    // method "storeChallenge"
    async storeChallenge () {
      // define formData
      const formData = new FormData()

      formData.append('title', this.challenge.judul)
      formData.append('materi_id', this.challenge.materi ? this.challenge.materi.id : '')
      // formData.append('content', this.materi.file)

      await this.$axios.post('/api/teacher/challenges', formData)
        // success
        .then((response) => {
          this.$swal.fire({
            title: 'BERHASIL!',
            text: 'Challenge Berhasil Ditambahkan!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })
          console.log(response.data)
          this.challenge.id = response.data.data.id
        })
        // error
        .catch((error) => {
          // assign error to state "validation"
          this.validation = error.response.data
        })
    }
  }

}
</script>

<style>
.multiselect__tags {
  min-height: 30px;
  display: block;
  padding: 8px 0px 0 34px !important;
  border-radius: 23px;
  border: 2px solid rgb(156 163 175);
  background: #ffffff !important;
  font-size: 14px;
}

.multiselect__input,
.multiselect__single {
  background: #ffffff;
}

.multiselect--disabled {
  background: #ededed00 !important;
  pointer-events: none;
  opacity: .6;
}

.multiselect__element {
  display: block;
  background: rgb(255, 255, 255);
}

.multiselect--disabled .multiselect__select {
  background: #d7d8d800 !important;
  color: #a6a6a6;
}

.multiselect__option--selected.multiselect__option--highlight {
  background: #fbb92c;
  color: #fff;
}

.multiselect__option--highlight {
  background: #438cf3;
  outline: none;
  color: white;
}
</style>

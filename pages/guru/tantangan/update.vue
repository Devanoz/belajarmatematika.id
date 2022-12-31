<template>

  <div class="flex flex-col h-full px-4 py-4">
    <div class="title h-16 grid grid-cols-4 items-center">
      <button class="ml-8 text-[1.4em] col-span-1">
        <nuxt-link to="/guru/tantangan">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4718 9.01357L16.6655 2.81987C16.7688 2.72365 16.8516 2.60762 16.909 2.47871C16.9665 2.34979 16.9973 2.21062 16.9998 2.06951C17.0023 1.92839 16.9764 1.78822 16.9235 1.65736C16.8707 1.5265 16.792 1.40762 16.6922 1.30782C16.5924 1.20802 16.4735 1.12935 16.3426 1.07649C16.2118 1.02363 16.0716 0.997674 15.9305 1.00016C15.7894 1.00265 15.6502 1.03354 15.5213 1.09098C15.3924 1.14842 15.2763 1.23124 15.1801 1.3345L8.98643 7.5282L2.79273 1.3345C2.5935 1.14886 2.32999 1.04779 2.05772 1.05259C1.78545 1.0574 1.52567 1.1677 1.33311 1.36025C1.14056 1.55281 1.03026 1.81259 1.02545 2.08486C1.02065 2.35713 1.12172 2.62064 1.30736 2.81987L7.50106 9.01357L1.30736 15.2073C1.11055 15.4043 1 15.6714 1 15.95C1 16.2285 1.11055 16.4956 1.30736 16.6926C1.50442 16.8895 1.77154 17 2.05004 17C2.32855 17 2.59567 16.8895 2.79273 16.6926L8.98643 10.4989L15.1801 16.6926C15.3772 16.8895 15.6443 17 15.9228 17C16.2013 17 16.4684 16.8895 16.6655 16.6926C16.8623 16.4956 16.9729 16.2285 16.9729 15.95C16.9729 15.6714 16.8623 15.4043 16.6655 15.2073L10.4718 9.01357Z" fill="#56739D" stroke="#56739D" stroke-width="0.5" />
          </svg>
        </nuxt-link>
      </button>
      <h1 class="text-[1.4em] col-span-2 text-gray-700 font-bold text-center">
        Edit Tantangan
      </h1>
    </div>


    <div class="form-challenge">
      <form @submit.prevent="updateChallenge">
        <div class="materi-section mt-6 px-4 h-auto">
          <label class=" font-bold text-gray-500 mb-2">Judul Tantangan</label><br>
          <input id="judul" v-model="challenge.title" type="text"  class="w-full text-gray-500 h-11 rounded-2xl border-2 border-gray-400 px-5 disabled:text-gray-400 ">
          <div v-if="validation.title" class=" text-center py-4 px-2 w-full">
            <div class="p-2 bg-yellow-100  items-center text-yellow-700 leading-none rounded-full inline-flex" role="alert">
              <span class="flex rounded-full bg-yellow-600 text-white uppercase px-2 py-1 text-xs font-bold mr-3">Warning</span>
              <span class="font-semibold mr-2 text-left flex-auto">{{ validation.title[0] }}</span>
              <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
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
            <div class="p-2 bg-yellow-100  items-center text-yellow-700 leading-none rounded-full inline-flex" role="alert">
              <span class="flex rounded-full bg-yellow-600 text-white uppercase px-2 py-1 text-xs font-bold mr-3">Warning</span>
              <span class="font-semibold mr-2 text-left flex-auto">{{ validation.materi_id[0] }}</span>
              <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
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

  data(){
    return{
      materi_id:"",
      challenge_id:"",
      challenge:{
        id: '',
        title:''
      },

      materi:{
        id:'',
        title:''
      },

      validation:[]
    }
  },

  //hook "asyncData"
  async asyncData({ store, route }) {
    await store.dispatch('teacher/materi/getMaterisData')
    await store.dispatch('teacher/challenge/getDetailChallenge', route.query.challenge)
    await store.dispatch('teacher/materi/getDetailMateri', route.query.materi)
  },

  //computed
  computed: {

    materis(){
      return this.$store.state.teacher.materi.materis.data
    }

  },



  mounted () {
    this.materi_id = this.$route.query.materi
    this.challenge.id = this.$route.query.challenge
    this.materi_id = this.$store.state.teacher.materi.materi
    this.challenge.title = this.$store.state.teacher.challenge.challenge.title

  },

  methods:{
    async updateChallenge(){
      //define formData
      const formData = new FormData()

      formData.append('title', this.challenge.title)
      formData.append('materi_id', this.materi_id.id)
      formData.append("_method", "PATCH")

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
            text: "Data Berhasil Diupdate!",
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

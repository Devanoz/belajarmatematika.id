<template>
  <div class="flex flex-col h-full px-4 py-4">
    <div class="z-20 grid grid-cols-5 gap-3 place-content-between">
      <div class="flex col-span-4">
        <span class="text-2xl text-cyan-700 font-light col-start-1 col-span-2 self-center">Halo, </span>
        <span class="text-2xl text-cyan-700 self-center ml-1"> {{ user.name }}</span>

      </div>
      <nuxt-link class="z-20 rounded-full justify-end col-end-6 place-self-end" to="/siswa/profile">
        <img
          class="rounded-full"
          :src="`https://ui-avatars.com/api/?name=${user.name}&amp;background=4e73df&amp;color=ffffff&amp;size=50`"
          alt=""
        >
      </nuxt-link>

    </div>

    <!-- search bar -->
    <div
      class="relative z-20 flex items-center w-full h-10 mt-4 rounded-3xl focus-within:shadow-lg bg-sky-100 overflow-hidden"
    >
      <div class="grid place-items-center ml-2 h-full w-12 text-cyan-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input class="peer h-full w-full outline-none font-light text-gray-300 pr-2 bg-sky-100" type="text" id="search"
             placeholder="Cari Materi"
      />

    </div>

    <!-- bar select -->
    <div class="bar-select grid grid-cols-10 mt-4 z-20">
      <button @click="changeMateriToFlex" class="text-sky-800 drop-shadow-md z-20"
              :class="{ 'text-gray-500': isMateriFlex }"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.71429 1H2.14286C1.83975 1 1.54906 1.12041 1.33474 1.33474C1.12041 1.54906 1 1.83975 1 2.14286V6.71429C1 7.01739 1.12041 7.30808 1.33474 7.52241C1.54906 7.73674 1.83975 7.85714 2.14286 7.85714H6.71429C7.01739 7.85714 7.30808 7.73674 7.52241 7.52241C7.73674 7.30808 7.85714 7.01739 7.85714 6.71429V2.14286C7.85714 1.83975 7.73674 1.54906 7.52241 1.33474C7.30808 1.12041 7.01739 1 6.71429 1ZM2.14286 6.71429V2.14286H6.71429V6.71429H2.14286Z"
            fill="currentColor" stroke="currentColor" stroke-width="0.5"
          />
          <path
            d="M15.8569 1H11.2854C10.9823 1 10.6916 1.12041 10.4773 1.33474C10.263 1.54906 10.1426 1.83975 10.1426 2.14286V6.71429C10.1426 7.01739 10.263 7.30808 10.4773 7.52241C10.6916 7.73674 10.9823 7.85714 11.2854 7.85714H15.8569C16.16 7.85714 16.4507 7.73674 16.665 7.52241C16.8793 7.30808 16.9997 7.01739 16.9997 6.71429V2.14286C16.9997 1.83975 16.8793 1.54906 16.665 1.33474C16.4507 1.12041 16.16 1 15.8569 1ZM11.2854 6.71429V2.14286H15.8569V6.71429H11.2854Z"
            fill="currentColor" stroke="currentColor" stroke-width="0.5"
          />
          <path
            d="M6.71429 10.1428H2.14286C1.83975 10.1428 1.54906 10.2632 1.33474 10.4776C1.12041 10.6919 1 10.9826 1 11.2857V15.8571C1 16.1602 1.12041 16.4509 1.33474 16.6652C1.54906 16.8796 1.83975 17 2.14286 17H6.71429C7.01739 17 7.30808 16.8796 7.52241 16.6652C7.73674 16.4509 7.85714 16.1602 7.85714 15.8571V11.2857C7.85714 10.9826 7.73674 10.6919 7.52241 10.4776C7.30808 10.2632 7.01739 10.1428 6.71429 10.1428ZM2.14286 15.8571V11.2857H6.71429V15.8571H2.14286Z"
            fill="currentColor" stroke="currentColor" stroke-width="0.5"
          />
          <path
            d="M15.8569 10.1428H11.2854C10.9823 10.1428 10.6916 10.2632 10.4773 10.4776C10.263 10.6919 10.1426 10.9826 10.1426 11.2857V15.8571C10.1426 16.1602 10.263 16.4509 10.4773 16.6652C10.6916 16.8796 10.9823 17 11.2854 17H15.8569C16.16 17 16.4507 16.8796 16.665 16.6652C16.8793 16.4509 16.9997 16.1602 16.9997 15.8571V11.2857C16.9997 10.9826 16.8793 10.6919 16.665 10.4776C16.4507 10.2632 16.16 10.1428 15.8569 10.1428ZM11.2854 15.8571V11.2857H15.8569V15.8571H11.2854Z"
            fill="currentColor" stroke="currentColor" stroke-width="0.5"
          />
        </svg>

      </button>

      <button @click="changeMateriToList" class="text-sky-800 drop-shadow-md z-20"
              :class="{ 'text-gray-500': isMateriVertical }"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 9C17 9.18186 16.9462 9.35628 16.8504 9.48487C16.7547 9.61347 16.6248 9.68571 16.4894 9.68571H1.51064C1.37521 9.68571 1.24533 9.61347 1.14956 9.48487C1.0538 9.35628 1 9.18186 1 9C1 8.81814 1.0538 8.64372 1.14956 8.51513C1.24533 8.38653 1.37521 8.31429 1.51064 8.31429H16.4894C16.6248 8.31429 16.7547 8.38653 16.8504 8.51513C16.9462 8.64372 17 8.81814 17 9ZM1.51064 2.37143H16.4894C16.6248 2.37143 16.7547 2.29918 16.8504 2.17059C16.9462 2.04199 17 1.86758 17 1.68571C17 1.50385 16.9462 1.32944 16.8504 1.20084C16.7547 1.07224 16.6248 1 16.4894 1H1.51064C1.37521 1 1.24533 1.07224 1.14956 1.20084C1.0538 1.32944 1 1.50385 1 1.68571C1 1.86758 1.0538 2.04199 1.14956 2.17059C1.24533 2.29918 1.37521 2.37143 1.51064 2.37143ZM16.4894 15.6286H1.51064C1.37521 15.6286 1.24533 15.7008 1.14956 15.8294C1.0538 15.958 1 16.1324 1 16.3143C1 16.4961 1.0538 16.6706 1.14956 16.7992C1.24533 16.9278 1.37521 17 1.51064 17H16.4894C16.6248 17 16.7547 16.9278 16.8504 16.7992C16.9462 16.6706 17 16.4961 17 16.3143C17 16.1324 16.9462 15.958 16.8504 15.8294C16.7547 15.7008 16.6248 15.6286 16.4894 15.6286Z"
            fill="currentColor" stroke="currentColor" stroke-width="0.5"
          />
        </svg>

      </button>

      <!-- dropdown kelas -->

      <div class="relative inline-block text-left col-span-4 mr-2 z-20">


        <multiselect v-model="filter.kelas" :options="provinces" :searchable="true" placeholder="Select one"
                     selected-label="" select-label="" deselect-label=""
        >

        </multiselect>


      </div>

      <!-- <div class="col-span-1"></div> -->

      <!-- dropdown materi -->
      <div class="relative inline-block text-left shadow-2xl col-span-4 z-20 row-end-11">
        <multiselect v-model="filter.materi" :options="provinces" :searchable="true" placeholder="Select one"
                     selected-label="" select-label="" deselect-label=""
        >

        </multiselect>
      </div>

    </div>

    <!-- title materi -->

    <!-- materi vertical -->
    <div class="flex flex-col " :class="{ 'hidden': isMateriVertical }">
      <div v-for="data in dataSample" class="z-10">
        <div v-for="topik in data.topik">

          <h2 class="text-xl mt-4 text-cyan-700">{{ topik.nama }}</h2>

          <!-- card materi -->
          <div v-for="materi in topik.materi" :key="materi.id + 'index' + topik.nama+materi.nama"
               class="grid grid-cols-6 drop-shadow-lg border-b-2 mb-2 rounded-xl z-10 bg-white py-3 px-2"
               @click="toggleSlide"
          >
            <div class="card-image col-span-1">
              <img src="@/assets/img/materi/book.svg" alt="">
            </div>
            <div class="card-content col-span-5 flex flex-col">
              <p class="font-light ">{{ materi.nama }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- materi horizontal -->
    <div class="grid grid-cols-6 mt-2" :class="{ 'hidden': isMateriFlex }">
      <div v-for="index in materis" :key="index.id + 'index2'"
           class="flex flex-col col-span-2 bg-white mx-1 mt-2 z-10 drop-shadow-xl rounded-xl px-2 py-2"
           @click="slideMateri(index)"
      >
        <div class="image place-self-center">
          <img src="@/assets/img/materi/book.svg" class=" w-14 h-14" alt="">

        </div>
        <div class="title place-self-center text-sm font-normal leading-4 mt-2 text-gray-700 text-center">
          {{ index.title }}
        </div>
      </div>

    </div>

    <div class="relative z-0 opacity-0 easy-in-out duration-500"
         :class="{ 'opacity-100': slideOver, 'z-30': slideOver }" aria-labelledby="slide-over-title" role="dialog"
         aria-modal="true"
    >

      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity hidden"></div>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">

            <div
              class="pointer-events-auto relative w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 translate-x-full"
              :class="{ 'translate-x-0': slideOver }"
            >
              <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                <button @click="toggleSlide" type="button"
                        class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span class="sr-only">Close panel</span>
                  <!-- Heroicon name: outline/x-mark -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <div class="flex h-full flex-col overflow-y-scroll bg-sky-100 pt-4 shadow-xl">
                <div class="px-4 grid grid-cols-4 sm:px-6">
                  <div class="back-button col-span-1 justify-self-start place-self-center" @click="toggleSlide">
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 1L1 9L9 17" stroke="#56739D" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <h2 class="text-lg text-center col-start-2 col-span-2 place-self-center text-cyan-800 font-semibold"
                      id="slide-over-title"
                  >Materi</h2>
                  <div class="img-decor">
                    <img src="@/assets/img/materi/giraffe.svg" alt="">
                  </div>
                </div>
                <div class="relative flex-1 sm:pt-6 flex-wrap">
                  <div class="h-full bg-white drop-shadow-lg px-4 py-4 relative rounded-tl-2xl rounded-tr-2xl">
                    <h3 class="title text-cyan-800 font-semibold">{{ tempMateri.title }}</h3>
                    <!--                    <pdf :src="tempMateri.content" :page="1">-->

                    <!--                    <object type="application/pdf" v-if="tempMateri.content" class="mt-3"-->
                    <!--                            :data="tempMateri.content" width="100%"-->
                    <!--                            height="100%"-->
                    <!--                    ></object>-->

                    <iframe width="100%" height="100%"
                            :src="'https://docs.google.com/viewer?url='+tempMateri.content+'&embedded=true'"
                    ></iframe>


                    <!--                    <vue-pdf-embed :source="tempMateri.content"/>-->
                    <!--                    <pdf :src="tempMateri.content"></pdf>-->


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  dataSamples
} from '@/static/dataSample'
import {
  materi
} from '@/static/listMateri'
import {
  topiks
} from '@/static/topiks'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
// import VuePdfEmbed from 'vue-pdf-embed'
// import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'
// import pdf from 'vue-pdf'

export default {
  middleware: 'isStudent',
  components: {
    Multiselect,

  },
  layout: 'app',
  async asyncData ({
    store
  }) {
    await store.dispatch('siswa/materi/getMaterisData')
  },
  data () {
    return {
      filter: {
        kelas: '',
        materi: ''
      },
      tempMateri: {},
      topiks: topiks,
      dataSample: dataSamples,
      nama: 'ihsan',
      dropdownClassClicked: false,
      dropdownMateriClicked: false,
      isMateriVertical: true,
      isMateriFlex: false,
      slideOver: false,
      materi4: [],
      provinces: [
        'hehe', 'haha'
      ]
    }
  },

  computed: {
    materis () {
      return this.$store.state.siswa.materi.materis
    },
    user () {
      return this.$auth.user
    }
  },

  mounted () {
    this.materi4 = this.dataSample.filter(function (el) {
      return el.kelas == '4'
    })
    console.log(this.materi4)
    console.log('hallao')
  },

  methods: {
    slideMateri (data) {
      this.tempMateri = data
      console.log(this.tempMateri)
      this.slideOver = !this.slideOver

    },
    toggleSlide () {

      this.slideOver = !this.slideOver

      // if (this.slideOver) {
      //   this.slideOver = false
      // } else {
      //   this.slideOver = true
      // }
    },
    onDropdownClassClicked () {
      if (this.dropdownClassClicked) {
        this.dropdownClassClicked = false
      } else {
        this.dropdownClassClicked = true
      }
    },

    onDetailClicked (id) {
      let currentPath = this.$router.currentRoute.path
      this.$router.push({
        path: currentPath + '/detail',
        query: {
          id: id
        }
      })
    },

    onDropdownMateriClicked () {
      if (this.dropdownMateriClicked) {
        this.dropdownMateriClicked = false
      } else {
        this.dropdownMateriClicked = true
      }
    },

    changeMateriToList () {
      if (this.isMateriVertical) {
        this.isMateriVertical = !this.isMateriVertical
        this.isMateriFlex = !this.isMateriFlex
      }
    },

    changeMateriToFlex () {
      if (this.isMateriFlex) {
        this.isMateriFlex = !this.isMateriFlex
        this.isMateriVertical = !this.isMateriVertical
      }
    }

  },
}
</script>

<style>
.multiselect__tags {
  min-height: 40px;
  display: block;
  padding: 8px 0px 0 34px !important;
  border-radius: 23px;
  border: 1px solid rgb(192, 192, 192);
  background: #e0f2fd;
  font-size: 14px;
}

.multiselect__input,
.multiselect__single {
  background: #e0f2fd;
}


.multiselect__element {
  display: block;
  background: rgb(189, 231, 238);
}


.multiselect__option--highlight {
  background: #438cf3;
  outline: none;
  color: white;
}

.iframe-container {
  overflow: hidden;
  padding-top: 62.5%;
  position: relative;
  height: 100%;
}

.iframe-container iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}


</style>

<template>


  <div @click="onRootClicked($event)" class="divide-gray-500 lex flex-col h-full px-4 py-4">
    <div class="header">
      <h2 class="text-center text-2xl text-green-primary font-semibold">Materi</h2>
      <hr class=" mt-3">
    </div>
    <div id="video-list" class="p-2.5">
      <div class="list-materi">
        <div class="z-10">
          <div>
            <div v-for="(topik,topik_index) in materis" :key="topik.id">
              <h1 class="text-[1em] text-cyan-700">{{ topik.title }}</h1>

              <div class="flex
                justify-center
                card-image
                drop-shadow-lg
                border-b-2
                mb-2
                rounded-xl
                z-10
                bg-white
                py-3
                px-2
                my-3
                z-30" v-if="topik.materis.length==0"
              >
                Yahh, Materi untuk topik ini belum ada
              </div>
              <!-- card materi -->
              <div v-for="(materi, materi_index) in topik.materis" :key="materi.id"
                   class="
                flex
                card-image
                drop-shadow-lg
                border-b-2
                mb-2
                rounded-xl
                z-10
                bg-white
                py-3
                px-2
                my-3
                z-30
              "
              >
                <img src="@/assets/img/materi/book.svg" alt=""/>
                <div class="mx-3">
                  <div>{{ materi.title }}</div>
                </div>
                <button class="absolute right-3 top-3" @click="handleToogleClick(topik_index,materi_index)">
                  <img id="toogle" src="@/assets/img/guru/video/tridot.svg"/>
                </button>

                <transition name="fade">
                  <div
                    :key="materi_index"
                    v-if="show[topik_index][materi_index]"
                    class="
                    bg-white
                    w-20
                    h-14
                    absolute
                    right-0
                    -top-5
                    z-10
                    rounded-md
                    flex flex-col
                    shadow-lg
                    p-2
                    items-center
                  "
                  >
                    <button @click="onEditClicked(materi.id,topik.id)">edit</button>
                    <button @click="onHapusClicked(materi.id)">hapus</button>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <NuxtLink to="/guru/materi/add">
      <div
        id="floating-button"
        class="
          bg-[#6D9DE0]
          w-[3.375rem]
          h-[3.375rem]
          z-10
          fixed
          shadow-xl
          bottom-[6rem]
          right-[1.5rem]
          rounded-full
          flex
          justify-center
          items-center
        "
      >
        <img src="@/assets/img/guru/video/plusSign.svg" alt=""/>
      </div>
    </NuxtLink>
  </div>
</template>


<script>
import {
  dataSamples
} from '@/static/dataSample'

export default {
  layout: 'guru',
  middleware: 'isTeacher',

  async asyncData ({
    store
  }) {
    await store.dispatch('teacher/materi/getMaterisWithTopikData')
  },

  //computed
  computed: {

    // materis(){
    //   return this.$store.state.teacher.materi.materis
    // }

  },

  data () {
    return {
      materis: [],
      show: [],
      dataSample: dataSamples
    }
  },

  created () {
    this.$store.dispatch('teacher/materi/getMaterisWithTopikData').then(() => {
      this.materis = this.$store.state.teacher.materi.materisWithTopik
      this.show = Array.from({ length: this.materis.length }, () => {
        return [false]
      })
    })
  },

  methods: {
    handleToogleClick (topik_index, materi_index) {
      this.show[topik_index] = Array.from({ length: this.materis[topik_index].materis.length }, () => false)
      this.show[topik_index] = this.show[topik_index].map((show, idx) => {
        if (materi_index == idx) {
          return true
        } else {
          return false
        }
      })
      this.$forceUpdate()
    },
    onRootClicked (event) {
      if (event.target.id != 'toogle') {
        this.show = this.show.map(() => false)
        this.$forceUpdate()
      }
    },
    onEditClicked (materi_id, topik_id) {
      let currentPath = this.$router.currentRoute.path
      this.$router.push({
        path: currentPath + '/update',
        query: {
          topik: topik_id,
          materi: materi_id,
        }
      })
    },
    onHapusClicked (materi) {

      this.$swal.fire({
        title: 'INGIN MENGHAPUS DATA INI?',
        text: 'DATA YANG BERKAITAN JUGA AKAN DIHAPUS',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'YA, HAPUS!',
        cancelButtonText: 'TIDAK',
      }).then((result) => {
        if (result.isConfirmed) {

          //dispatch to action "deleteCategory" vuex
          this.$store.dispatch('teacher/materi/destroyMateri', materi)
            .then(() => {

              //feresh data
              this.$nuxt.refresh()

              //alert
              this.$swal.fire({
                title: 'BERHASIL!',
                text: 'Data Berhasil Dihapus!',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
              })

              const currentPath = this.$router.currentRoute.path
              this.$router.go(currentPath)

            })
        }
      })
    }

  }
}
</script>


<style>

</style>

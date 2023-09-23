<template>
  <div @click="onRootClicked($event)" class="divide-gray-500 lex flex-col h-full px-4 py-4">
    <div class="header">
      <h2 class="text-center text-2xl text-green-primary font-semibold">
        Video Pembelajaran
      </h2>
      <hr class="mt-3"/>
    </div>
    <div
      class="relative z-20 flex items-center w-full h-10 mt-4 mb-4 rounded-3xl focus-within:shadow-lg bg-sky-100 overflow-hidden"
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
             placeholder="Cari Video"
      />

    </div>
    <div id="video-list" class="p-2.5">
      <div class="list-materi">
        <div class="z-10">
          <div>
            <div v-for="(item,materi_index) in materis" :key="item.id">
              <h1 v-if="item.videos.length > 0" class="text-[1em] text-cyan-700">{{ item.title }}</h1>
              <!-- card materi -->
              <div @click="onVideoClicked(video.id)" v-if="item.videos.length > 0" v-for="(video,video_index) in item.videos" :key="video.id"
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
                  <div>{{ video.title }}</div>
                  <!-- <div>{{ getVideoTimeStamp(video.updated_at) }}</div> -->
                </div>
                <button class="absolute right-3 top-3" @click="handleToogleClick(materi_index,video_index)">
                  <img id="toogle" src="@/assets/img/guru/video/tridot.svg"/>
                </button>
                <transition name="fade">
                  <div
                    :key="video_index"
                    v-if="show[materi_index][video_index]"
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
                    <button @click="onEditClicked(video.id,item.id)">edit</button>
                    <button @click="onHapusClicked(video.id)">hapus</button>
                  </div>
                </transition>
              </div>
              <!--              else no content-->

            </div>
          </div>
        </div>
      </div>
    </div>

    <NuxtLink to="/guru/video/add">
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
import moment from 'moment'

export default {
  name: 'IndexVideo',
  layout: 'guru',
  middleware: 'isTeacher',
  data () {
    return {
      materis: [],
      show: [],
      search: ''
    }
  },
  computed: {},
  created () {
    this.$store.dispatch('teacher/video/getVideosData').then(() => {
      this.materis = this.$store.state.teacher.video.videos
      this.show = Array.from({ length: this.materis.length }, () => {
        return [false]
      })
    })
  },

  methods: {
    onVideoClicked(video_id) {
      let currentPath = this.$router.currentRoute.path
      this.$router.push({
        path: currentPath+'/detail',
        query: {
          id:video_id
        }
      })
    },
    getVideoTimeStamp (updated_timeStamp) {
      return moment(updated_timeStamp, 'YYYY-MM-DD hh:mm:ss', 'id').fromNow()
    },
    onSearching () {
      this.$store.dispatch('teacher/video/getVideosData', this.search).then((response) => {
        this.materis = this.$store.state.teacher.video.videos
      })
    },
    handleToogleClick (materi_index, video_index) {
      this.show[materi_index] = Array.from({ length: this.materis[materi_index].videos.length }, () => false)
      this.show[materi_index] = this.show[materi_index].map((show, idx) => {
        if (video_index == idx) {
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
    onEditClicked (video_id, materi_id) {
      let currentPath = this.$router.currentRoute.path
      this.$router.push({
        path: currentPath + '/update',
        query: {
          materi: materi_id,
          video: video_id,
        }
      })
    },
    onHapusClicked (video_id) {
      const currentPath = this.$router.currentRoute.path
      this.$swal.fire({
        title: 'APAKAH ANDA YAKIN ?',
        text: 'INGIN MENGHAPUS DATA INI !',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'YA, HAPUS!',
        cancelButtonText: 'TIDAK',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.delete(`api/teacher/videos/${video_id}`).then((response) => {
            this.$swal.fire({
              title: 'BERHASIL!',
              text: 'Data Berhasil Dihapus!',
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            }).then(() => {
              this.$router.go(currentPath)
            })
          }).catch((err) => {
            this.$swal.fire({
              title: 'GAGAL!',
              text: 'Data GAGAL Dihapus!',
              icon: 'error',
              showConfirmButton: false,
              timer: 2000
            })
          })
        }
      })
    }
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

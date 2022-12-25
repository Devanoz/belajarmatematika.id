<template>
  <div class="h-full divide-y divide-gray-500">
    <div class="title h-16 flex flex-row justify-between items-center">
      <div class="ml-8 text-[1.4em]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4718 9.01357L16.6655 2.81987C16.7688 2.72365 16.8516 2.60762 16.909 2.47871C16.9665 2.34979 16.9973 2.21062 16.9998 2.06951C17.0023 1.92839 16.9764 1.78822 16.9235 1.65736C16.8707 1.5265 16.792 1.40762 16.6922 1.30782C16.5924 1.20802 16.4735 1.12935 16.3426 1.07649C16.2118 1.02363 16.0716 0.997674 15.9305 1.00016C15.7894 1.00265 15.6502 1.03354 15.5213 1.09098C15.3924 1.14842 15.2763 1.23124 15.1801 1.3345L8.98643 7.5282L2.79273 1.3345C2.5935 1.14886 2.32999 1.04779 2.05772 1.05259C1.78545 1.0574 1.52567 1.1677 1.33311 1.36025C1.14056 1.55281 1.03026 1.81259 1.02545 2.08486C1.02065 2.35713 1.12172 2.62064 1.30736 2.81987L7.50106 9.01357L1.30736 15.2073C1.11055 15.4043 1 15.6714 1 15.95C1 16.2285 1.11055 16.4956 1.30736 16.6926C1.50442 16.8895 1.77154 17 2.05004 17C2.32855 17 2.59567 16.8895 2.79273 16.6926L8.98643 10.4989L15.1801 16.6926C15.3772 16.8895 15.6443 17 15.9228 17C16.2013 17 16.4684 16.8895 16.6655 16.6926C16.8623 16.4956 16.9729 16.2285 16.9729 15.95C16.9729 15.6714 16.8623 15.4043 16.6655 15.2073L10.4718 9.01357Z"
            fill="#56739D"
            stroke="#56739D"
            stroke-width="0.5"
          />
        </svg>
      </div>
      <h1 class="text-[1.4em] text-gray-700 font-bold">Edit video</h1>
      <div class="button-tambah mr-8 text-[1.4em]">
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.9125 10.9999H4.00046L2.02345 3.13481C2.01079 3.0891 2.00308 3.04217 2.00045 2.99481C1.97845 2.27381 2.77245 1.7738 3.46046 2.1038L22.0006 10.9999L3.46046 19.8959C2.78045 20.2229 1.99645 19.7369 2.00045 19.0289C2.00247 18.9657 2.01359 18.903 2.03345 18.8429L3.50046 13.9999"
            stroke="#56739D"
            stroke-width="2.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="input-video">
      <div class="topik-section mt-6 px-10 h-auto">
        <label class="font-bold mb-2">Materi</label><br />
        <input
          id="materi"
          type="text"
          class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
          @click="onInputMateriClicked"
          v-model="materi_placeholder"
        />
      </div>
      <div class="topik-section mt-6 px-10 h-auto">
        <label class="font-bold mb-2">Judul</label><br />
        <input
          id="judul"
          type="text"
          class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
          v-model="title"
        />
      </div>
      <!-- <div class="topik-section mt-6 px-10 h-auto">
        <label class="font-bold mb-2">Deskripsi</label><br />
        <input
          id="deskripsi"
          type="text"
          class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        />
      </div> -->
      <div class="topik-section mt-6 px-10 h-auto">
        <label class="font-bold mb-2">Link Youtube</label><br />
        <input
          id="link-youtube"
          type="text"
          class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
          v-model="videoUrl"
        />
      </div>

      <div class="button-tambahkan flex flex-row justify-center">
        <button
          class="
            bg-orange-400
            w-3/4
            text-white
            font-bold
            py-2
            mt-7
            px-4
            rounded-xl
          "
          @click="onTambahkanClick"
        >
          Update
        </button>
      </div>
    </div>
    <div
      v-if="popupClicked"
      id="popup-topik"
      class="
          bg-gray-500
          h-full
          absolute
          top-0
          max-w-screen-sm
          w-full
          flex flex-col
          justify-center
          items-center
          opacity-95
        "
    >
      <div id="topik-list" class="bg-white w-3/4 h-1/2 p-7 rounded-md">
        <div v-for="materi in materis" :key="materi.id" class="mt-4">
          <input
            @click="onListMateriClicked($event,materi.title)"
            :id="materi.id"
            class="border-2"
            type="radio"
            name="age"
            :value="materi.id"
          />
          <label  :for="materi.id" class="ml-4 font-bold"
          >{{ materi.title }}</label>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'update-video',
  data() {
    return {
      video:null,
      video_id:null,
      popupClicked: false,
      materis: [],
      materi_placeholder:"pilih materi",
      materi_id:0,
      title: "",
      videoUrl: "",
    };
  },
  created () {
    const video_id = this.$route.query.video
    const materi_id = this.$route.query.materi
    this.$store.dispatch("teacher/materi/getMaterisData").then(()=>{
      this.materis = this.$store.state.teacher.materi.materis.data
    })

    this.$axios.get(`api/teacher/materis/${materi_id}`).then((response)=>{
      const materi = response.data.data
      this.materi_id = materi.id
      this.materi_placeholder = materi.title
    })
    this.$axios.get(`api/teacher/videos/${video_id}`).then((response)=>{
      const video = response.data.data
      this.video = video
      this.title = video.title
      this.videoUrl = video.url
    })
  },
  methods: {
    onListMateriClicked(event,title) {
      this.materi_id = event.target.value
      this.materi_placeholder = title
      setTimeout(() => {
        this.popupClicked = !this.popupClicked;
      }, 50);
    },
    onTambahkanClick () {
      let formData = new FormData()
      formData.append('title',this.title)
      formData.append('url',this.videoUrl)
      formData.append('materi_id',this.materi_id)

      this.$axios.post('/api/teacher/videos',formData).then(()=>{
        console.log("sukses menambahkan data video")
      }).catch((err)=>{
        console.log("gagal menambahkan data video" + err.message())
      })
    },
    onInputMateriClicked () {
      this.materi_placeholder = "pilih materi"
      this.popupClicked = !this.popupClicked
    }
  },
}
</script>

<style scoped>

</style>

<template>
  <div class="">
    <div class="border-b-2 bg-white border-slate-200 py-5 sticky top-0 w-full">
      <div class="flex justify-center items-center">
        <h1 class="text-2xl font-bold">
          Video Pembelajaran
        </h1>
      </div>
    </div>

    <div class="p-4">
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
      <h2 v-if="thereIsLastPlayed" class="text-xl text-cs-blue-500 font-bold">
        Tontonan Terakhir
      </h2>

      <div v-if="thereIsLastPlayed" class="mt-4">
        <iframe
          loading="lazy"
          height="200"
          class="w-full rounded-lg drop-shadow-lg"
          :src="currentVideosUrl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div class="video-section my-5">
        <div v-for="materi in materis" :key="materi.id" class="group my-5">
          <h2 v-if="materi.videos.length > 0" class="text-xl text-cs-blue-500 font-bold">
            {{ materi.title }}
          </h2>
          <div v-if="materi.videos.length > 0" @click="onVideoClicked(video.id)" v-for="video in materi.videos" :key="video.id" class="grid grid-flow-row grid-cols-1 gap-8 mt-8 items-center justify-items-center place-items-center">
            <div :class="getVideoColor(video.student_videos_count)">
              <div class="h-28 w-28 rounded-xl overflow-hidden">
                <iframe
                  loading="lazy"
                  class="object-cover object-center"
                  :src="video.url"
                  alt="random house"
                  frameborder="0"
                  height="315"
                  title="YouTube video player"
                />
              </div>
              <div class="h-full flex flex-col">
                  <span class="text-lg font-semibold mx-5">
                    {{ video.title }}
                  </span>
                <!-- <span class="text-lg mx-5">
                  {{ getVideoTimeStamp(video.updated_at) }}
                </span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script language="ts">
import moment from 'moment'

export default {
  name: 'Video',
  layout: 'app',
  middleware:'isStudent',
  data () {
    return {
      clicked: false,
      val: '~/assets/img/navbar/basic/peringkat.svg',
      search :'',
      thereIsLastPlayed:false,
    }
  },
  beforeCreate () {
    this.$store.dispatch("siswa/video/getVideosData").then((response)=>{
      if(response.currentVideos) {
        this.thereIsLastPlayed = true
      }
    })
  },
  computed:{
    currentVideosUrl () {
      const currentVideosUrl = this.$store.state.siswa.video.currentVideos.url
      if(currentVideosUrl){
        return currentVideosUrl
      }
      return ''
    },
    materis () {
      return this.$store.state.siswa.video.videos
    },
  },
  methods: {
    getVideoColor (videos_count) {
      if(videos_count > 0) {
        return "w-full h-36 flex justify-start p-4 items-center  bg-[#9df2b7] rounded-md shadow-lg border-2 border-slate-200"
      }
      return "w-full h-36 flex justify-start p-4 items-center  bg-[#fffff] rounded-md shadow-lg border-2 border-slate-200"
    },
    getVideoTimeStamp (videoTimeStamp) {
      return moment(videoTimeStamp, 'YYYY-MM-DD hh:mm:ss', 'id').fromNow()
    },
    doClick () {
      this.clicked = !this.clicked
    },
    getColor () {
      return (this.clicked) ? 'red' : ''
    },
    onVideoClicked(video_id) {
      let currentPath = this.$router.currentRoute.path
      this.$router.push({
        path: currentPath+'/detail',
        query: {
         id:video_id
        }
      })
    },
    async onSearching () {
      await this.$store.dispatch("siswa/video/getVideosDataFilteredByTitle",this.search)
    },
  }
}
</script>

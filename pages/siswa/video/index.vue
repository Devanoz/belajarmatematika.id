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
      <h2 class="text-xl text-cs-blue-500 font-bold">
        Tontonan Terakhir
      </h2>

      <div class="mt-4">
        <iframe
          height="315"
          class="w-full rounded-lg drop-shadow-lg"
          src="https://www.youtube.com/embed/fZz0OW8USZw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>

      <div class="video-section my-5">
        <div v-for="topik in videoList" :key="topik.id" class="group my-5">
          <h2 class="text-xl text-cs-blue-500 font-bold">
            {{ topik.nama }}
          </h2>
          <div v-for="materi in topik.materi" :key="materi.id" class="grid grid-flow-row grid-cols-1 gap-8 mt-8 items-center justify-items-center place-items-center">
            <div class="w-full h-36 flex justify-start p-4 items-center  bg-slate-200 rounded-md shadow-lg">
              <div class="h-28 w-28 rounded-md overflow-hidden">
                <iframe
                  class="object-cover object-center"
                  :src="materi.videoUrl"
                  alt="random house"
                  height="315"
                  title="YouTube video player"
                />
              </div>

              <div class="h-full flex flex-col">
                <NuxtLink to="/video/detail">
                  <span class="text-lg font-semibold mx-5">
                    {{ materi.nama }}
                  </span>
                </NuxtLink>
                <span class="text-lg mx-5">
                  {{ materi.date }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script language="ts">
import { dataSamples } from '~/static/dataSample'

export default {
  name: 'Video',
  layout: 'app',
  data () {
    return {
      clicked: false,
      val: '~/assets/img/navbar/basic/peringkat.svg',
      videoList: dataSamples[0].topik
    }
  },
  created () {

  },
  methods: {
    doClick () {
      this.clicked = !this.clicked
    },
    getColor () {
      return (this.clicked) ? 'red' : ''
    }
  }
}
</script>

<template>
  <div class="h-full  divide-gray-500 lex flex-col h-full px-4 py-4">
    <div class="header">
      <h2 class="text-center text-2xl text-green-primary font-semibold">Video Pembelajaran</h2>
      <hr class=" mt-3">
    </div>
    <div id="video-list" class="p-2.5">
      <div class="list-materi">
        <div v-for="data in dataSample" class="z-10">
          <div v-for="topik in data.topik">

            <h2 class="text-xl mt-4 capitalize underline underline-offset-2 text-green-primary">{{ topik.nama }}</h2>

            <!-- card materi -->
            <div v-for="materi in topik.materi" :key="materi.id + 'index'"
                 class="grid grid-cols-6 drop-shadow-lg border-b-2 mb-2 rounded-xl z-10 bg-white py-3 px-2"
                 @click="toggleSlide"
            >
              <div class="card-image col-span-1">
                <img src="@/assets/img/materi/book.svg" alt="">
              </div>
              <div class="card-content col-span-5 flex flex-col">
                <p class="font-light ">{{ materi.nama }}</p>
                <span class="text-gray-500 text-sm">13.00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <NuxtLink to="/guru/topik/add">
      <div id="floating-button"
           class="bg-[#6D9DE0] w-[3.375rem] h-[3.375rem] z-10 fixed shadow-xl bottom-[6rem] right-[1.5rem] rounded-full flex justify-center items-center"
      >
        <img src="@/assets/img/guru/video/plusSign.svg" alt="">
      </div>
    </NuxtLink>

  </div>

</template>

<script>
export default {
  name: 'index.vue',
  layout :'guru',
  middleware :"isTeacher"
}
</script>

<style scoped>

</style>

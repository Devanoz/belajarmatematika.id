<template>
  <div class="h-full divide-y divide-gray-500">
    <div class="title h-16 flex flex-row justify-between items-center">
      <div class="ml-8 text-[1.4em]">X</div>
      <h1 class="text-[1.4em] font-bold">Tambah Topik</h1>
      <div class="button-tambah mr-8 text-[1.4em]">></div>
    </div>
    <div class="input-video">
      <div class="topik-section mt-6 px-10 h-auto">
        <label class="font-bold mb-2">Judul</label><br />
        <input
          id="judul"
          type="text"
          class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
          v-model="judul"
        />
      </div>


     <div class="topik-section mt-6 px-10 h-auto">
       <label for="kelas" class="font-bold mb-2">Kelas</label><br />
       <select id="kelas"
               type="text"
               class="w-full h-11 rounded-2xl border-2 border-gray-400 px-10">

       </select>
     </div>


      <div class="button-tambahkan flex flex-row justify-center">
        <button
          class="bg-orange-400 w-3/4 text-white font-bold py-2 mt-7 px-4 rounded-xl"
          @click="onTambahkanClick"
        >
          Tambahkan
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      judul: null,
      kelasList: null
    }
  },
  methods : {
    onTambahkanClick () {
      console.log(this.judul)
    }
  },
  mounted () {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3RlYWNoZXIvbG9naW4iLCJpYXQiOjE2NjkxNzU0MTUsImV4cCI6MTY2OTE3OTAxNSwibmJmIjoxNjY5MTc1NDE1LCJqdGkiOiJ3NUZxY05Lc3M4QWRTbVlQIiwic3ViIjoiMSIsInBydiI6ImIyN2JlZTIzYmFmNTQyOWY1YjlhMjE2OTZmZGUwM2MyNzcwNDRlYTUifQ.XTt4nGfvWClHyjSZ1iEnscp2Rc6bQ9pxYDzbE-NKfHw"
    const url = "https://backend.belajarmatematika.id/api/teacher/kelas";

    const config = {
      headers : {
        "Content-type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    }

    this.$axios.get(url,null, config)
      .then(response => {
        this.kelasList = response.data
      })
      .catch(err => {
        console.log(err)
      })
    console.log(this.kelasList)
  }

}
</script>

<style scoped>

</style>

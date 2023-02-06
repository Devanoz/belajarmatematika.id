<template>
  <div @click="onRootClicked($event)" class="divide-gray-500 flex-col h-full px-4 py-4">
    <div class="header py-4">
      <h2 class="text-center text-2xl text-green-primary font-semibold">
        Kelola Akun Siswa
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
             placeholder="Cari nama siswa"
      />

    </div>

    <div id="akun-list" class="p-2.5">
      <div class="list-akun">
        <div class="z-10">
          <div>
            <div v-for="(akun,akun_index) in akuns" :key="akun.id" class="flex card-image drop-shadow-lg border-b-2 mb-2 rounded-xl z-10 bg-white py-3 px-2 my-3 z-30">
              <img :src="getProfileImage(akun.image)" alt="" class="h-14 w-14 rounded-full"/>
              <div class="mx-3">
                <div class="font-bold">{{ akun.name }}</div>
                <div class="italic">{{ akun.email }}</div>
                <div>{{ akun.updated_at }}</div>
                <button class="absolute right-3 top-3" @click="handleToogleClick(akun_index)">
                  <img id="toogle" src="~/assets/img/guru/video/tridot.svg"/>
                </button>
                <transition name="fade">
                  <div :key="akun_index" v-if="show[akun_index]" class=" bg-white w-20 h-auto absolute right-0 -top-5 z-10 rounded-md flex flex-col shadow-lg p-2 items-center
                  "
                  >
                    <button @click="onHapusClicked(akun.id)">hapus</button>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <NuxtLink to="/guru/akun/add">
      <div
        id="floating-button"
        class="
          bg-[#6D9DE0]
          w-[3.375rem]
          h-[3.375rem]
          z-10
          fixed
          shadow-xl
          bottom-[7rem]
          right-[1.5rem]
          rounded-full
          flex
          justify-center
          items-center
        "
      >
        <img src="~/assets/img/guru/video/plusSign.svg" alt=""/>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'index',
  layout: 'guru',
  middleware:'isAdmin',
  data () {
    return {
      show: [],
      search: ''
    }
  },
  computed : {
    akuns () {
      return this.$store.state.siswa.akun.akuns
    }
  },
  created () {
    this.$store.dispatch('siswa/akun/getAkunData').then((response)=>{
      this.show = Array.from({length:response.length},()=>false)
    })
  },
  methods : {
    onSearching () {
      this.$store.dispatch("siswa/akun/getAkunData", this.search)
    },
    getProfileImage (imageUrl) {
      if (!imageUrl) {
        return require('~/assets/img/murid/profilepic/defaultUser.svg')
      }
      return imageUrl
    },
    onHapusClicked (akun_id) {
      // this.$axios.delete(`/api/teacher/teachers/${akun_id}`).then(()=>{
      this.$swal.fire({
        text: 'Apakah anda yakin untuk menghapus akun ini',
        icon: 'warning',
        confirmButtonText: 'Ya,Hapus',
        showCancelButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire({
            text: 'Berhasil Menghapus Data',
            icon: 'success',
            timer: 1000
          })
          this.$axios.delete(`/api/teacher/students/${akun_id}`).then(()=>{
            this.$store.dispatch('siswa/akun/getAkunData').then(()=>{
              this.$swal.fire({
                text: 'Berhasil Menghapus Data',
                icon: 'success',
                timer: 1000
              })
            })
          })
            .catch(()=>{
              this.$swal.fire({
                text: 'Gagal menghapus data',
                icon: 'warning',
                timer: 1000
              })
            })
        }
      })
    },
    handleToogleClick (akun_index) {
      this.show = this.show.map((val,idx)=>{
        if(akun_index === idx) {
          return !val
        }
        return val
      })
      this.$forceUpdate()
    },
    onRootClicked (event) {
      if(event.target.id !== 'toogle' ) {
        this.show = this.show.map((val)=>false)
        this.$forceUpdate()
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

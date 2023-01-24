<template>
  <div id="root" @click="onRootClicked($event)" class="h-full">
    <div class="header py-4">
      <h2 class="text-center text-2xl text-green-primary font-semibold">
        Kelola Akun
      </h2>
      <hr class="mt-3"/>
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
                  <img id="toogle" src="@/assets/img/guru/video/tridot.svg"/>
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
        <img src="@/assets/img/guru/video/plusSign.svg" alt=""/>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import moment from 'moment/moment'

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
      return this.$store.state.teacher.akun.akuns
    }
  },
  created () {
    this.$store.dispatch('teacher/akun/getAkunData').then((response)=>{
      this.show = Array.from({length:response.length},()=>false)
    })
  },
  methods : {
    getProfileImage (imageUrl) {
      if (!imageUrl) {
        return require('@/assets/img/murid/profilepic/defaultUser.svg')
      }
      return imageUrl
    },
    onHapusClicked (akun_id) {
      this.$axios.delete(`/api/teacher/teachers/${akun_id}`).then(()=>{
        this.$swal.fire({
          text: 'Sukses menghapus data',
          icon: 'success',
          timer: 1000
        })
        this.$store.dispatch('teacher/akun/getAkunData')
      }).catch((err)=>{
        this.$swal.fire({
          text: 'Gagal menghapus data',
          icon: 'warning',
          timer: 1000
        })
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
      if(event.target.id != 'toogle' ) {
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

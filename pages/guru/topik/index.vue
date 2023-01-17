<template>
  <div  @click="onRootClicked($event)" class="divide-gray-500 lex flex-col h-full px-4 py-4">
    <div class="header">
      <h2 class="text-center text-2xl text-green-primary font-semibold">
        Topik
      </h2>
      <hr class="mt-3" />
    </div>
    <div id="video-list" class="p-2.5">
      <div class="list-materi">
        <div class="z-10">
          <div>
            <div v-for="(item,materi_index) in materis" :key="item.id">
              <h1 class="text-[1em]">{{item.title}}</h1>
              <!-- card materi -->
              <div v-if="item.topiks.length > 0" v-for="(video,video_index) in item.topiks" :key="video.id"
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
                <img src="@/assets/img/materi/book.svg" alt="" />
                <div class="mx-3">
                  <div>{{ video.title }}</div>
                  <div>{{ video.created_at }}</div>
                </div>
                <button class="absolute right-3 top-3" @click="handleToogleClick(materi_index,video_index)">
                  <img id="toogle"  src="@/assets/img/guru/video/tridot.svg" />
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
                    <button @click="onEditClicked(video.id,item.id)" >edit</button>
                    <button @click="onHapusClicked(video.id)" >hapus</button>
                  </div>
                </transition>
              </div>
              <!--              else no content-->
              <div v-if="item.topiks.length === 0" class="flex
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
                z-30">
                yahh, video untuk materi ini belum ada
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <NuxtLink to="/guru/topik/add">
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
        <img src="@/assets/img/guru/video/plusSign.svg" alt="" />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'index.vue',
  layout: "guru",
  middleware: "isTeacher",
  data() {
    return {
      materis: [],
      show:[]
    };
  },
  computed:{

  },
  created() {
    this.$store.dispatch("teacher/topik/getTopiksData").then(() => {
      this.materis = this.$store.state.teacher.topik.topiks
      this.show = Array.from({length:this.materis.length},()=>{
        return [false]
      })
    })
  },
  methods: {
    //done
    handleToogleClick(materi_index,topik_index){
      this.show[materi_index] = Array.from({length:this.materis[materi_index].topiks.length},()=>false)
      this.show[materi_index] = this.show[materi_index].map((show,idx)=>{
        if(topik_index == idx) {
          return true
        }else {
          return false
        }
      })
      this.$forceUpdate()
    },
    //done
    onRootClicked(event){
      if(event.target.id != 'toogle'){
        this.show = this.show.map(()=>false)
        this.$forceUpdate()
      }
    },
    //done
    onEditClicked (video_id,topik_id) {
      let currentPath = this.$router.currentRoute.path
      this.$router.push({
        path: currentPath+'/update',
        query: {
          topik:topik_id
        }
      })
    },
    onHapusClicked (topik_id) {
      const currentPath = this.$router.currentRoute.path
      this.$swal.fire({
        title: 'APAKAH ANDA YAKIN ?',
        text: "INGIN MENGHAPUS DATA INI !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'YA, HAPUS!',
        cancelButtonText: 'TIDAK',
      }).then((result)=>{
        if(result.isConfirmed){
          this.$axios.delete(`api/teacher/topiks/${topik_id}`).then((response)=>{
            this.$swal.fire({
              title: 'BERHASIL!',
              text: "Data Berhasil Dihapus!",
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            }).then(()=>{
              this.$store.dispatch("teacher/topik/getTopiksData").then(() => {
                this.materis = this.$store.state.teacher.topik.topiks
                this.show = Array.from({length:this.materis.length},()=>{
                  return [false]
                })
                this.$forceUpdate()
              })
            })
          }).catch((err)=>{
            this.$swal.fire({
              title: 'GAGAL!',
              text: "Data GAGAL Dihapus!",
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

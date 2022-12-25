<template>
  <div  @click="onRootClicked($event)" class="divide-gray-500 lex flex-col h-full px-4 py-4">
    <div class="header">
      <h2 class="text-center text-2xl text-green-primary font-semibold">
        Video Pembelajaran
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
              <div v-for="(video,video_index) in item.videos" :key="video.id"
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
        <img src="@/assets/img/guru/video/plusSign.svg" alt="" />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "IndexVideo",
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
    this.$store.dispatch("teacher/video/getVideosData").then(() => {
      this.materis = this.$store.state.teacher.video.videos.data;
      this.show = Array.from({length:this.materis.length},()=>{
        return [false]
      })
    })
  },
  methods: {
    handleToogleClick(materi_index,video_index){
      this.show[materi_index] = Array.from({length:this.materis[materi_index].videos.length},()=>false)
      this.show[materi_index] = this.show[materi_index].map((show,idx)=>{
        if(video_index == idx) {
          return true
        }else {
          return false
        }
      })
      this.$forceUpdate()
    },
    onRootClicked(event){
      if(event.target.id != 'toogle'){
        this.show = this.show.map(()=>false)
        this.$forceUpdate()
      }
    },
    onEditClicked (video_id,materi_id) {
      let currentPath = this.$router.currentRoute.path
      this.$router.push({
        path: currentPath+'/update',
        query: {
          materi:materi_id,
          video:video_id,
        }
      })
    },
    onHapusClicked (video_id) {
        const currentPath = this.$router.currentRoute.path
        this.$axios.delete(`api/teacher/videos/${video_id}`).then((response)=>{
          console.log("berhasil menghapus data")
          this.$router.go(currentPath)
        }).catch((err)=>{
          console.log("gagal menghapus data")
        })
    }
  },
};
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

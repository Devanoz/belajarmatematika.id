<template>
  <div class="h-full divide-y divide-gray-500">
    <div class="title h-16 flex flex-row justify-between items-center">
      <div class="ml-8 text-[1.4em]">X</div>
      <h1 class="text-[1.4em] font-bold">Edit Topik</h1>
      <div class="button-tambah mr-8 text-[1.4em]">></div>
    </div>
    <div class="input-video">
      <div class="topik-section mt-6 px-10 h-auto">
        <label class="font-bold mb-2">Judul</label><br />
        <input
          id="judul"
          type="text"
          class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
          v-model="title"
        />
      </div>
      <div class="topik-section mt-6 px-10 h-auto">
        <label for="kelas" class="font-bold mb-2">Kelas</label><br />
        <select
          @change="onOptionChange($event)"
          id="kelas"
          type="text"
          v-model="kelas_id"
          class="w-full h-11 rounded-2xl border-2 border-gray-400 px-10">
          <option v-for="item in kelass" :key="item.id" :value="item.id">{{item.title}}</option>
        </select>
      </div>
      <div class="button-tambahkan flex flex-row justify-center">
        <button
          class="bg-orange-400 w-3/4 text-white font-bold py-2 mt-7 px-4 rounded-xl"
          @click="onTambahkanClick"
        >
          Update
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'update',
  middleware:'isTeacher',
  data () {
    return {
      title: "",
      kelas_id:null,
      kelass: null,
      topik_id:null,
    }
  },
  created () {
    this.topik_id = this.$route.query.topik
    this.$axios.get("/api/teacher/kelas").then((response)=>{
      this.kelass = response.data.data.data
    })
    this.$axios.get(`/api/teacher/topiks/${this.topik_id}`).then((response)=>{
      const topik = response.data.data
      this.topik_id = topik.id
      this.title = topik.title
      this.kelas_id = topik.kelas_id
    })
  },
  methods : {
    onTambahkanClick () {
      if(!this.title.isEmpty && this.kelas_id){
        const formData = new FormData()
        formData.append('title',this.title)
        formData.append('kelas_id',this.kelas_id)
        formData.append('_method','PATCH')
        this.$axios.post(`/api/teacher/topiks/${this.topik_id}`,formData).then(()=>{
          this.$swal.fire({
            title: "data berhasil diupdate",
            icon: "success",
            timer: 1000,
            showConfirmButton : false
          }).then(()=>{
            this.$router.go(-1)
          })
        }).catch((err)=>{
          this.$swal.fire({
            title: "gagal mengupdate topik",
            icon:'error',
            text: err.message,
            timer: 1000
          })
        })
      }else {
        this.$swal.fire({
          title: "Field tidak boleh kosong",
          icon: "warning",
          timer: 1000
        })
      }
    },
    onOptionChange (event) {
      const value = event.target.value
      this.kelas_id = value
    }
  },
}
</script>

<style scoped>

</style>

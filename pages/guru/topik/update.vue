<template>
  <div class="h-full divide-y divide-gray-500">
    <div class="title h-16 grid grid-cols-4 items-center">
      <button class="ml-8 text-[1.4em] col-span-1">
        <nuxt-link to="/guru/topik">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.4718 9.01357L16.6655 2.81987C16.7688 2.72365 16.8516 2.60762 16.909 2.47871C16.9665 2.34979 16.9973 2.21062 16.9998 2.06951C17.0023 1.92839 16.9764 1.78822 16.9235 1.65736C16.8707 1.5265 16.792 1.40762 16.6922 1.30782C16.5924 1.20802 16.4735 1.12935 16.3426 1.07649C16.2118 1.02363 16.0716 0.997674 15.9305 1.00016C15.7894 1.00265 15.6502 1.03354 15.5213 1.09098C15.3924 1.14842 15.2763 1.23124 15.1801 1.3345L8.98643 7.5282L2.79273 1.3345C2.5935 1.14886 2.32999 1.04779 2.05772 1.05259C1.78545 1.0574 1.52567 1.1677 1.33311 1.36025C1.14056 1.55281 1.03026 1.81259 1.02545 2.08486C1.02065 2.35713 1.12172 2.62064 1.30736 2.81987L7.50106 9.01357L1.30736 15.2073C1.11055 15.4043 1 15.6714 1 15.95C1 16.2285 1.11055 16.4956 1.30736 16.6926C1.50442 16.8895 1.77154 17 2.05004 17C2.32855 17 2.59567 16.8895 2.79273 16.6926L8.98643 10.4989L15.1801 16.6926C15.3772 16.8895 15.6443 17 15.9228 17C16.2013 17 16.4684 16.8895 16.6655 16.6926C16.8623 16.4956 16.9729 16.2285 16.9729 15.95C16.9729 15.6714 16.8623 15.4043 16.6655 15.2073L10.4718 9.01357Z"
              fill="#56739D" stroke="#56739D" stroke-width="0.5"
            />
          </svg>
        </nuxt-link>
      </button>
      <h1 class="text-[1.4em] col-span-2 text-gray-700 font-bold text-center">
        Edit Topik
      </h1>
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
      this.kelass = response.data.data
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
      if(this.title && this.kelas_id){
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

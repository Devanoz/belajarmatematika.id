<template>
  <div :style="image" class="flex flex-col h-full pt-10 px-6">
    <h1 class="text-3xl font-semibold text-cyan-700">
      Daftar Akun
    </h1>
    <span class="text-lg font-light text-slate-400">Buat akun baru untuk bergabung</span>

    <form class="mt-10 h-full flex flex-col gap-y-5">
      <TextInput label="Nama Lengkap" placeholder="nama lengkap" type="text" @data="handleFullName"/>
      <TextInput label="Alamat Email" placeholder="alamat email" type="email" @data="handleEmail" />
      <TextInput label="Password" placeholder="password" type="password" @data="handlePassword" />
      <TextInput label="Konfirmasi Password" placeholder="konfirmasi password" @data="handlePassswordConfirmation" type="password" />

      <!-- <div class="flex justify-between">
        <CheckBox label="Ingat Saya" />
        <NuxtLink to="/auth/forget" class="underline text-lg text-cyan-700">
          Lupa Kata Sandi?
        </NuxtLink>
      </div> -->

      <div class="mt-auto mb-16">
          <button @click.prevent="onSumbit" class="bg-cs-blue-500 w-full py-3 text-center text-white rounded-2xl shadow-md">
          Daftar
        </button>
        <span class="text-center w-full inline-block mt-8">Sudah punya Akun?
          <NuxtLink to="/" class="underline text-lg text-cyan-700">
            Masuk
          </NuxtLink>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import TextInput from '~/components/form/TextInput.vue'
import CheckBox from '~/components/form/CheckBox.vue'

export default{
  name: 'RegisterPage',
  components: { TextInput, CheckBox },
  data() {
    return {
      url: require('~/assets/img/general/bg.jpeg'),
      image: ` backgroundImage: url(${require('~/assets/img/general/bg.jpeg')}); backgroundSize: cover; opacity: 0.9 `,
      //form
      fullName: "",
      email: "",
      password: "",
      passwordConfirmation:""
    }
  },
  methods: {
    handleFullName (value) {
      this.fullName = value
    },
    handleEmail (value) {
      this.email = value
    },
    handlePassword(value){
      this.password = value
    },
    handlePassswordConfirmation (value) {
      this.passwordConfirmation = value
    },
    onSumbit () {
      const formData = new FormData()
      formData.append('name',this.fullName)
      formData.append('email',this.email)
      formData.append('password',this.password)
      formData.append('password_confirmation',this.passwordConfirmation)
      this.$axios.post('/api/student/register',formData).then((response)=>{
        this.$swal.fire({
          title : "Pendaftaran sukses",
          icon : "success",
          showConfirmButton : false,
          timer: 2000
        }).then((result)=>{
          this.$router.go(-1)
        })
      }).catch((error)=>{
        console.log(error.response)
         const errorData = error.response.data
        let errorHtml = ""
        if(errorData.name){
          errorHtml += `<p class="text-red-500" >${errorData.name[0]}</p><br>`
        }
        if(errorData.password){
          errorHtml +=`<p class="text-blue-500" >${errorData.password}</p><br>`
        }
        if(errorData.email){
          errorHtml += `<p class="text-green-500 " >${errorData.email}</p><br>`
        }
        this.$swal.fire({
          title : "lengkapi data",
          html :errorHtml,
          width: "fullscreen",
          icon : 'warning',
        })
      })
    }
  }

}
</script>

<template>
  <div id="root">
    <div class="header py-4">
      <h2 class="text-center text-2xl text-green-primary font-semibold">
        Kelola Akun
      </h2>
      <hr class="mt-3"/>
    </div>
    <div id="icon-section" class="w-full h-52 flex justify-center items-center">
      <img src="@/assets/img/guru/akun/tambah-akun.svg" class="w-40 h-40">
    </div>
<!--    input section-->
    <div class="profile-section mt-6 px-10 h-auto">
      <label for="email" class="ml-2 mb-2 font-bold">Email</label>
      <input
        id="email"
        type="email"
        class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        placeholder="email"
        v-model="email"
        :disabled="isInputDisabled"
      />
    </div>
    <div class="profile-section mt-6 px-10 h-auto">
      <label for="username" class="ml-2 mb-2 font-bold">Username</label>
      <input
        id="username"
        type="text"
        class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        placeholder="username"
        v-model="username"
        :disabled="isInputDisabled"
      />
    </div>
    <div class="profile-section mt-6 px-10 h-auto">
      <label for="password" class="ml-2 mb-2 font-bold">Password</label>
      <input
        id="password"
        type="password"
        class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        placeholder="password"
        v-model="password"
        :disabled="isInputDisabled"
      />
    </div>
    <div class="profile-section mt-6 px-10 h-auto">
      <label for="password-confirmation" class="ml-2 mb-2 font-bold">Password Confirmation</label>
      <input
        id="password-confirmation"
        type="text"
        class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        placeholder="password confirmation"
        v-model="passwordConfirmation"
        :disabled="isInputDisabled"
      />
    </div>
    <div id="button-upate-profile" class="w-full h-auto mt-5 flex flex-col justify-center items-center gap-3">
      <button v-if="submit" @click="onSubmit" type="submit" class="bg-cs-blue-500 w-3/4 py-3 text-center text-white rounded-2xl shadow-md">
        Submit
      </button>
      <button v-else @click="onTambahAkun" type="submit" class="bg-cs-blue-500 w-3/4 py-3 text-center text-white rounded-2xl shadow-md">
        Tambah Akun
      </button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'add',
  data () {
    return {
      submit: false,
      isInputDisabled: true,
      //input
      email: '',
      username:'',
      password: '',
      passwordConfirmation: '',
    }
  },
  methods : {
    onSubmit () {
      const resetSubmitButtonCondition = ()=>{
        this.isInputDisabled = !this.isInputDisabled
        this.submit = !this.submit
      }
      const formData = new FormData()
      formData.append('name',this.username)
      formData.append('email',this.email)
      formData.append('password',this.password)
      formData.append('password_confirmation',this.passwordConfirmation)
      this.$axios.post('/api/teacher/teachers',formData).then(()=>{
        this.$swal.fire({
          text: 'succes',
          icon: 'success',
          showConfirmButton: false
        })
        resetSubmitButtonCondition()
      }).catch((err)=>{
        this.$swal.fire({
          text: 'Gagal menambahkan akun, mohon periksa field kembali',
          icon: 'warning',
          timer: 1000
        })
      })
    },
    onTambahAkun () {
      this.isInputDisabled = !this.isInputDisabled
      this.submit = !this.submit
    }
  }
}
</script>

<style scoped>

</style>

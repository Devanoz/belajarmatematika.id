<template>
  <div class="flex flex-col h-full pt-10 px-6">
    <h1 class="text-3xl font-semibold text-cyan-700">
      Selamat Datang <br>Kembali!
    </h1>
    <span class="text-lg font-light text-slate-400">Masuk ke akun untuk melanjutkan</span>

    <form @submit.prevent="login" class="mt-10 h-full flex flex-col gap-y-5">
      <label class="flex flex-col">
            <input v-model="user.email" class="bg-white px-5 py-3 font-light text-lg rounded-full" type="email" placeholder="Email">
        </label>
        <label class="flex flex-col">
            <input v-model="user.password" class="bg-white px-5 py-3 font-light text-lg rounded-full" type="password" placeholder="Password">
        </label>


      <div class="flex justify-between">
        <CheckBox label="Ingat Saya" />
        <NuxtLink to="/auth/forget" class="underline text-lg text-cyan-700">
          Lupa Kata Sandi?
        </NuxtLink>
      </div>

      <div class="mt-auto mb-16">
        <button @click="" type="submit" class="bg-cs-blue-500 w-full py-3 text-center text-white rounded-2xl shadow-md">
          Masuk
        </button>

        <span class="text-center w-full inline-block mt-8">Belum Punya Akun?
          <NuxtLink to="/auth/forget" class="underline text-lg text-cyan-700">
            Daftar
          </NuxtLink>
        </span>
      </div>
    </form>
  </div>
</template>

<script >
import Vue from 'vue'
import TextInput from '~/components/form/TextInput.vue'
import CheckBox from '~/components/form/CheckBox.vue'

export default {
  name: 'RegisterPage',
  components: { TextInput, CheckBox },
  data() {
    return {
      user:{
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async login() {

        await this.$auth.loginWith('teacher', {
        data: {
            email: this.user.email,
            password: this.user.password
        }
    })

    .then(() => {

        //redirect
        this.$router.push({
            name: 'guru-materi'
        })

    })
    .catch(error => {
        //assign validation
        this.$swal.fire({
          text: 'Email atau password salah',
          icon : 'warning'
        })
    })
    }
  },

}
</script>

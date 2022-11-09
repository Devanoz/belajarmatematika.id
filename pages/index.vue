<template>
  <div :style="image" class="flex flex-col h-full pt-10 px-6">
    <h1 class="text-3xl font-semibold text-cyan-700">
      Selamat Datang <br>Kembali!
    </h1>
    <span class="text-lg font-light text-slate-400">Masuk ke akun untuk melanjutkan</span>

    <form method="post" class="mt-10 h-full flex flex-col gap-y-5">
      <TextInput label="Alamat Email" placeholder="Alamat Email" type="email" />
      <TextInput label="Password" placeholder="Password" type="password" />

      <div class="flex justify-between">
        <CheckBox label="Ingat Saya" />
        <NuxtLink to="/auth/forget" class="underline text-lg text-cyan-700">
          Lupa Kata Sandi?
        </NuxtLink>
      </div>

      <div class="mt-auto mb-16">
       
        <nuxt-link to="/pemilihan/peran">
          <button type="submit" class="bg-cs-blue-500 w-full py-3 text-center text-white rounded-2xl shadow-md">
          Masuk
        </button>
        </nuxt-link>

        <span class="text-center w-full inline-block mt-8">Belum Punya Akun?
          <NuxtLink to="/auth/register" class="underline text-lg text-cyan-700">
            Daftar
          </NuxtLink>
        </span>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextInput from '~/components/form/TextInput.vue'
import CheckBox from '~/components/form/CheckBox.vue'

export default Vue.extend({
  name: 'RegisterPage',
  components: { TextInput, CheckBox },

  data() {
    return {
      url: require('~/assets/img/general/bg.jpeg'),
      image: ` backgroundImage: url(${require('~/assets/img/general/bg.jpeg')}); backgroundSize: cover; opacity: 1 `
    }
  },


})
</script>

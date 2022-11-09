<template>
  <div :style="image" class="flex flex-col h-full pt-10 px-6">
    <h1 class="text-3xl font-semibold text-cyan-700">
      Daftar Akun
    </h1>
    <span class="text-lg font-light text-slate-400">Buat akun baru untuk bergabung</span>

    <form method="post" class="mt-10 h-full flex flex-col gap-y-5">
      <TextInput label="Nama Lengkap" placeholder="nama lengkap" type="email" />
      <TextInput label="Alamat Email" placeholder="alamat email" type="email" />
      <TextInput label="Password" placeholder="password" type="password" />
      <TextInput label="Konfirmasi Password" placeholder="konfirmasi password" type="password" />

      <!-- <div class="flex justify-between">
        <CheckBox label="Ingat Saya" />
        <NuxtLink to="/auth/forget" class="underline text-lg text-cyan-700">
          Lupa Kata Sandi?
        </NuxtLink>
      </div> -->

      <div class="mt-auto mb-16">
        <NuxtLink to="/" >
          <button type="submit" class="bg-cs-blue-500 w-full py-3 text-center text-white rounded-2xl shadow-md">
          Daftar
        </button>
          </NuxtLink>

       

        <span class="text-center w-full inline-block mt-8">Sudah punya Akun?
          <NuxtLink to="/" class="underline text-lg text-cyan-700">
            Masuk
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
      image: ` backgroundImage: url(${require('~/assets/img/general/bg.jpeg')}); backgroundSize: cover; opacity: 0.9 `
    }
  },


})
</script>

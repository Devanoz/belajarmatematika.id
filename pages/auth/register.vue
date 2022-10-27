<template>
  <div class="flex flex-col h-full pt-10 px-6">
    <h1 class="text-5xl text-cyan-700">
      Selamat Datang <br>Kembali!
    </h1>
    <span class="text-lg font-light text-slate-400">Masuk ke akun untuk melanjutkan</span>

    <form method="post" class="mt-10 h-full flex flex-col gap-y-5">
      <TextInput label="Nama Lengkap" placeholder="Nama Lengkap" type="text" />

      <TextInput label="Alamat Email" placeholder="Alamat Email" type="email" />
      <TextInput label="Password" placeholder="Password" type="password" />
      <!-- <TextInput label="Konfirmasi Password" placeholder="Konfirmasi Password" type="{{onShow? 'password' | "text"}}" /> -->

      <div class="mt-auto mb-16">
        <button type="submit" class="bg-cs-blue-500 w-full py-3 text-center text-white rounded-2xl shadow-md">
          Daftar
        </button>

        <span class="text-center w-full inline-block mt-8">Sudah mempunyai akun?
          <NuxtLink to="/auth/forget" class="underline text-lg text-cyan-700">
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

export default Vue.extend({
  name: 'RegisterPage',
  components: { TextInput },
  methods: {
    showPass: () => {

    }
  }
})
</script>

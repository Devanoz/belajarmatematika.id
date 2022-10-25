<template>
  <div class="flex flex-col h-full pt-10 text-center">
    <h1 class="text-5xl text-cyan-700 mb-8">
      Verifikasi E-mail
    </h1>

    <span class="text-base font-light text-slate-400">Tautan verifikasi telah di kirim ke email
      <span class="font-bold">email@email.com</span>.
      Cek Inbox atau folder spam kamu ya.</span>

    <span>Ingin ganti email? <a href="#">Ubah email</a></span>

    <!-- gambar rumah -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'EmailVerificationPage'
})
</script>

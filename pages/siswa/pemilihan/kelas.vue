<template>
  <div
    class="wrapper flex flex-col h-screen justify-center items-center gap-y-4"
  >
    <h2>Pilih Kelas</h2>
    <nuxt-link to="/siswa/pemilihan/topik">
      <div class="kelas-4 bg-kelas bg-none">
      <div class="flex flex-row justify-center items-end w-full h-full">
        <p class="text-[#AC2D2D] mb-5">Kelas 4</p>
      </div>
    </div>
    </nuxt-link>
    <nuxt-link to="/siswa/pemilihan/topik">
      <div class="kelas-5 bg-kelas bg-none">
      <div class="flex flex-row justify-center items-end w-full h-full">
        <p class="text-[#AD7A2D]  mb-5">Kelas 5</p>
      </div>
    </div>
    </nuxt-link>
    <nuxt-link to="/siswa/pemilihan/topik">
      <div class="kelas-6 bg-kelas bg-none">
      <div class="flex flex-row justify-center items-end w-full h-full">
        <p class="text-[#2DAD2D]  mb-5">Kelas 6</p>
      </div>
    </div>
    </nuxt-link>
   
   
   
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.bg-kelas {
  width: 300px;
  height: 116px;
}
h2{
  font-size: 1.5em;
  color:#56739D;
;
}

.kelas-4 div {
  background:url('~/assets/img/pemilihan/kelas/bg-kelas-4.png')
}
.kelas-5 div{
  background:url('~/assets/img/pemilihan/kelas/bg-kelas-5.png')
}
.kelas-6 div {
  background:url('~/assets/img/pemilihan/kelas/bg-kelas-6.png')
}
</style>

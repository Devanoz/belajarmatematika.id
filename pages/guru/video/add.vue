<template>
  <div class="h-full  divide-y divide-gray-500">
    <div class="title h-16 flex flex-row justify-between items-center">
        <div class="ml-8 text-[1.4em]">X</div>
        <h1 class="text-[1.4em] font-bold">Tambah Video</h1>
        <div class="button-tambah mr-8 text-[1.4em]">></div>
    </div>
    <div class="input-video">
        <div class="topik-section mt-6 px-10 h-auto">
            <label class="font-bold mb-2">Topik</label><br>
            <input id="topik" type="text" class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5">
        </div>
        <div class="topik-section mt-6 px-10 h-auto">
            <label class="font-bold mb-2">Judul</label><br>
            <input id="judul" type="text" class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5">
        </div>
        <div class="topik-section mt-6 px-10 h-auto">
            <label class="font-bold mb-2">Deskripsi</label><br>
            <input id="deskripsi" type="text" class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5">
        </div>

        <div class="topik-section mt-6 px-10 h-auto">
            <label class="font-bold mb-2">Link Youtube</label><br>
            <input id="link-youtube" type="text" class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5">
        </div>

        <div class="button-tambahkan flex flex-row justify-center">
            <button @click="onTambahkanClick" class="bg-orange-400 w-3/4 text-white font-bold py-2 mt-7 px-4 rounded-xl">
                Tambahkan
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddVideo',
  methods: {
    onTambahkanClick () {
      console.log('tambahkan clicked')
    }
  }

}
</script>

<style>

</style>

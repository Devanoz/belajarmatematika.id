<template>
  <div class="h-full divide-y divide-gray-500">
    <div class="title h-16 flex flex-row justify-between items-center">
      <div class="ml-8 text-[1.4em]">X</div>
      <h1 class="text-[1.4em] font-bold">Tambah Video</h1>
      <div class="button-tambah mr-8 text-[1.4em]">></div>
    </div>
    <div class="input-video">
      <div class="topik-section mt-6 px-10 h-auto">
        <label class="font-bold mb-2">Topik</label><br />
        <input
          id="topik"
          type="text"
          class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
          @click="onPopupClicked"
          v-model="topik"
        />
      </div>
      <div class="topik-section mt-6 px-10 h-auto">
        <label class="font-bold mb-2">Judul</label><br />
        <input
          id="judul"
          type="text"
          class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
          v-model="judul"
        />
      </div>
      <div class="topik-section mt-6 px-10 h-auto">
        <label class="font-bold mb-2">Deskripsi</label><br />
        <input
          id="deskripsi"
          type="text"
          class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        />
      </div>

      <div class="topik-section mt-6 px-10 h-auto">
        <label class="font-bold mb-2">Link Youtube</label><br />
        <input
          id="link-youtube"
          type="text"
          class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        />
      </div>

      <div class="button-tambahkan flex flex-row justify-center">
        <button
          class="bg-orange-400 w-3/4 text-white font-bold py-2 mt-7 px-4 rounded-xl"
          @click="onTambahkanClick"
        >
          Tambahkan
        </button>
      </div>
    </div>
    <Transition>
      <div
        v-if="popupClicked"
        id="popup-topik"
        class="bg-gray-500 h-full absolute top-0 max-w-screen-sm w-full flex flex-col justify-center items-center opacity-95"
      >
        <div id="topik-list" class="bg-white w-3/4 h-1/2 p-7 rounded-md">
          <div name="topik1" class="mt-4">
            <input
              id="topik1"
              class="border-2"
              type="radio"
              name="age"
              value="topik1"
              v-model="topik"
            />
            <label @click="onPopupClicked" for="topik1" class="ml-4 font-bold"
              >Topik 1</label
            ><br />
          </div>

          <div name="topik2" class="mt-4">
            <input
              id="topik2"
              class="border-2 border-whi"
              type="radio"
              name="age"
              value="topik2"
              v-model="topik"
            />
            <label @click="onPopupClicked" for="topik2" class="ml-4 font-bold"
              >Topik 2</label
            ><br />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "AddVideo",
  data() {
    return {
      popupClicked: false,
      judul: "",
      topik: "ss",
      deskiripsi: "",
      videoUrl: "",
    };
  },
  methods: {
    onTambahkanClick() {
      console.log("tambahkan clicked");
    },
    onPopupClicked() {
      setTimeout(() => {
        this.popupClicked = !this.popupClicked;
      }, 50);
    },
  },
  updated() {
    console.log(this.topik);
  },
};
</script>

<style>
#topik-list {
  opacity: 1;
}
</style>

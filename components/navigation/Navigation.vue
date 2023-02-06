<template>
<div class="bg-white rounded-t-xl shadow-md px-10 sm:px-20 py-6 max-h-[6rem] max-w-screen-sm fixed bottom-0 mx-auto w-full border border-slate-200">
    <div class="h-full flex justify-between items-center w-full">
        <button @click="onMateriClicked">

            <div class="flex flex-col items-center gap-y-1">
                <img v-if="materiClicked" class="h-6 w-auto" src="~/assets/img/navbar/basic/materi-color.svg">
                <img v-else class="h-6 w-auto" src="~/assets/img/navbar/basic/materi.svg">
                <span class="text-slate-400">Materi</span>
            </div>
        </button>

        <button @click="onVideoClicked">
            <div class="flex flex-col items-center gap-y-1">
                <img v-if="videoClicked" class="h-6 w-auto" src="~/assets/img/navbar/basic/video-color.svg">
                <img v-else class="h-6 w-auto" src="~/assets/img/navbar/basic/video.svg">
                <span class="text-slate-400">Video</span>
            </div>
        </button>

        <div @click="onTantanganClicked" class="flex flex-col items-center gap-y-1">
            <img v-if="tantanganClicked" class="h-6 w-auto" src="~/assets/img/navbar/basic/tantangan-color.svg">
            <img v-else class="h-6 w-auto" src="~/assets/img/navbar/basic/tantangan.svg">
            <span class="text-slate-400">Tantangan</span>
        </div>

        <button @click="onPeringkatClicked">
            <div  class="flex flex-col items-center gap-y-1">
                <img v-if="peringkatClicked" class="h-6 w-auto" src="~/assets/img/navbar/basic/peringkat-color.svg">
                <img v-else class="h-6 w-auto" src="~/assets/img/navbar/basic/peringkat.svg">
                <span class="text-slate-400">Peringkat</span>
            </div>
        </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            materiClicked: true,
            videoClicked: false,
            tantanganClicked: false,
            peringkatClicked: false
        }
    },
    mounted() {

    },
    methods: {
        onMateriClicked() {
            this.$router.push({
                name: 'siswa-materi',
            })

            this.materiClicked = true
            this.videoClicked = false
            this.tantanganClicked = false
            this.peringkatClicked = false
        },

        onVideoClicked() {
            this.$router.push({
                name: 'siswa-video',
            })
            this.materiClicked = false
            this.videoClicked = true
            this.tantanganClicked = false
            this.peringkatClicked = false
        },

        onTantanganClicked() {
            this.$router.push({
                name: 'siswa-tantangan',
            })
            this.materiClicked = false
            this.videoClicked = false
            this.tantanganClicked = true
            this.peringkatClicked = false
        },

        onPeringkatClicked() {
            this.$router.push({
                name: 'siswa-leaderboard',
            })
            this.materiClicked = false
            this.videoClicked = false
            this.tantanganClicked = false
            this.peringkatClicked = true
        },

    }
}
</script>

<style>
</style>

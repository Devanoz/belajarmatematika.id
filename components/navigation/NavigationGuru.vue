<template>
    <div class="bg-white rounded-t-xl shadow-md px-5 sm:px-20 py-6 max-h-[6rem] max-w-screen-sm fixed bottom-0 mx-auto w-full border border-slate-200">
        <div class="h-full flex justify-between items-center w-full gap-3">
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

            <button @click="onTantanganClicked">
                <div  class="flex flex-col items-center gap-y-1">
                    <img v-if="tantanganClicked" class="h-6 w-auto" src="~/assets/img/navbar/basic/tantangan-color.svg">
                    <img v-else class="h-6 w-auto" src="~/assets/img/navbar/basic/tantangan.svg">
                    <span class="text-slate-400">Tantangan</span>
                </div>

            </button>

            <button @click="onTopikClicked">
                <div  class="flex flex-col items-center gap-y-1">
                    <img v-if="topikClicked" class="h-6 w-auto" src="~/assets/img/navbar/basic/topik-active.svg">
                    <img v-else class="h-6 w-auto" src="~/assets/img/navbar/basic/topik-inactive.svg">
                    <span class="text-slate-400">Topik</span>
                </div>
            </button>

            <button @click="onLeaderboardClicked">
              <div  class="flex flex-col items-center gap-y-1">
                <img v-if="peringkatClicked" class="h-6 w-auto" src="~/assets/img/navbar/basic/peringkat-color.svg">
                <img v-else  class="h-6 w-auto" src="~/assets/img/navbar/basic/peringkat.svg">
                <span class="text-slate-400">rank</span>
              </div>
            </button>
            <button v-if="isAdmin" @click="onAkunClicked">
              <div  class="flex flex-col items-center gap-y-1">
                <img v-if="accountClicked" class="h-6 w-auto" src="~/assets/img/navbar/basic/account-active.svg">
                <img v-else class="h-6 w-auto" src="~/assets/img/navbar/basic/account-inactive.svg">
                <span class="text-slate-400">Guru</span>
              </div>
            </button>
            <button v-if="isAdmin" @click="onAkunSiswaClicked">
              <div  class="flex flex-col items-center gap-y-1">
                <img v-if="accountSiswaClicked" class="h-6 w-auto" src="~/assets/img/navbar/basic/account-active.svg">
                <img v-else class="h-6 w-auto" src="~/assets/img/navbar/basic/account-inactive.svg">
                <span class="text-slate-400">Siswa</span>
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
                peringkatClicked: false,
                topikClicked: false,
                accountClicked: false,
                accountSiswaClicked:false,
            }
        },
      computed :{
        isAdmin () {
          if(this.$auth.user.role === 'admin'){
            return true
          }
          return false
        },
      },
        methods: {
            onMateriClicked() {
                this.$router.push({
                    name: 'guru-materi',
                })

                this.materiClicked = true
                this.videoClicked = false
                this.tantanganClicked = false
                this.peringkatClicked = false
                this.topikClicked = false
                this.accountClicked = false
                this.accountSiswaClicked = false
            },

            onVideoClicked() {
                this.$router.push({
                    name: 'guru-video',
                })
                this.materiClicked = false
                this.videoClicked = true
                this.tantanganClicked = false
                this.peringkatClicked = false
                this.topikClicked = false
                this.accountClicked = false
            },

            onTantanganClicked() {
                this.$router.push({
                    name: 'guru-tantangan',
                })
                this.materiClicked = false
                this.videoClicked = false
                this.tantanganClicked = true
                this.peringkatClicked = false
                this.topikClicked = false
                this.accountClicked = false
            },

            onTopikClicked() {
                this.$router.push({
                    name: 'guru-topik',
                })
                this.materiClicked = false
                this.videoClicked = false
                this.tantanganClicked = false
                this.topikClicked = true
                this.peringkatClicked = false
                this.accountClicked = false
            },
            onLeaderboardClicked () {
              this.$router.push({
                name:'guru-leaderboard'
              })
              this.materiClicked = false
              this.videoClicked = false
              this.tantanganClicked = false
              this.topikClicked = false
              this.peringkatClicked = true
              this.accountClicked = false
            },
            onAkunClicked () {
              this.$router.push({
                name:'guru-akun-guru'
              })
              this.materiClicked = false
              this.videoClicked = false
              this.tantanganClicked = false
              this.topikClicked = false
              this.peringkatClicked = false
              this.accountSiswaClicked = false
              this.accountClicked = true
            },
            onAkunSiswaClicked () {
                this.$router.push({
                  name: 'guru-akun-siswa'
                })
              this.materiClicked = false
              this.videoClicked = false
              this.tantanganClicked = false
              this.topikClicked = false
              this.peringkatClicked = false
              this.accountClicked = false
              this.accountSiswaClicked = true
            }

        }
    }
    </script>

    <style>
    </style>

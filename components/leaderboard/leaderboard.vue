<template>
  <div class="person h-14 w-[90%] mx-auto mb-7 flex flex-row gap-1">
    <div class="no-peringkat h-14 w-14">
      <div
        class="circle w-7 h-7 border-solid border-2 border-[#838FD0]  relative top-[25%] left-[25%] rounded-full z-0 flex justify-center items-center"
      >
        <p class="no z-10 text-[#828282]">
          {{ no }}
        </p>
      </div>
    </div>
    <div class="profile h-14 w-14 relative">
            <img class="h-14 w-14 rounded-full absolute" :src="getProfileImage" alt="gambar profile">
            <img class="absolute -bottom-2 -right-2 w-8 h-8" :src="getLeaderUrl" alt="peringkat">
    </div>
    <div class="profile-detail h-14 w-20 mx-4">
      <p class="name text-[#333333]">
        {{ name }}
      </p>
      <p class="poin text-[#828282]">
        {{ point }} pts
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LeaderBoard',
  data () {
    return {
      profileImage: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
    }
  },
  computed: {
    getLeaderUrl () {
      if (this.no === 1) {
        return require('~/assets/img/peringkat/lencana/juara1.svg')
      } else if (this.no === 2) {
        return require('~/assets/img/peringkat/lencana/juara2.svg')
      } else if (this.no === 3) {
        return require('~/assets/img/peringkat/lencana/juara3.svg')
      } else {
        return require('~/assets/img/peringkat/lencana/no-rank.svg')
      }
    },
    getProfileImage () {
      if (!this.image) {
        return require('@/assets/img/murid/profilepic/defaultUser.svg')
      }
      return this.image
    }
  },
  props: {
    no: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    point: {
      type: String,
      default: 0
    },
    image: {
      type: String,
      default: ''
    },
    rank: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>

</style>

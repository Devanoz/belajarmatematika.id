<template>
  <div class="flex flex-col h-full">
    <div class="section-top h-96 grid grid-cols-1 justify-items-center">
      <div class="image-section mx-auto mt-8 flex flex-col relative">
        <img v-if="teacher.profileUrl"
             class="rounded-full w-20 h-20 self-center"
             :src="teacher.profileUrl"
             alt=""
        >

        <img
          v-else
          class="rounded-full w-20 h-20 self-center "
          :src="`https://ui-avatars.com/api/?name=${user.name}&amp;background=4e73df&amp;color=ffffff&amp;size=50`"
          alt=""
        >
        <transition name="fade">
          <img v-if="isEditClicked==true" src="@/assets/img/murid/profilepic/editPhotoSign.svg"
               class="absolute top-14 right-20 w-8 h-8" alt="edit photo sign"
          >
        </transition>
        <label v-if="isEditClicked==true" for="profile-img" class="absolute top-14 right-20 w-12 h-12 z-10">
          <input @change="handleFileChange" type="file" id="profile-img" class="hidden">
        </label>
        <p class="text-xl font-semibold text-white mt-3 text-center">{{ user.name }}</p>
        <p class="text-lg font-medium text-white text-center  text-gray-100">{{ user.email }}</p>
        <p class="text-lg font-light text-white text-center  text-gray-200">Gabung Sejak {{ user.created_at }}</p>


      </div>
    </div>
    <div class="section-main rounded-tl-3xl rounded-tr-3xl bg-white relative w-full h-full -mt-10 px-5 py-8">
      <div class="list-button flex flex-col bg-white px-5 py-3 shadow-2xl rounded-2xl">
        <div>
          <button @click="isEditClicked=!isEditClicked" class=" w-full px-2 py-5 text-gray-600 text-xl font-medium">
            <div class="flex flex-row gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.8551 15.4999L16.3551 13.9999H6.25305C5.95754 13.9998 5.6649 14.0579 5.39186 14.1709C5.11882 14.2839 4.87073 14.4496 4.66177 14.6586C4.45281 14.8676 4.28708 15.1156 4.17406 15.3887C4.06103 15.6617 4.00292 15.9544 4.00305 16.2499V16.8269C4.00305 17.7189 4.32305 18.5829 4.90305 19.2619C6.29805 20.8959 8.34505 21.7929 11.0001 21.9689C10.9961 21.7859 11.0161 21.5989 11.0641 21.4079L11.2941 20.4839C8.92105 20.3639 7.18605 19.6259 6.04305 18.2879C5.69485 17.8807 5.50337 17.3626 5.50305 16.8269V16.2489C5.50332 16.0501 5.58245 15.8596 5.72308 15.7192C5.8637 15.5788 6.05431 15.4999 6.25305 15.4999H14.8551ZM12.0001 2.00488C12.6567 2.00488 13.3068 2.13421 13.9135 2.38548C14.5201 2.63676 15.0713 3.00506 15.5356 3.46935C15.9999 3.93364 16.3682 4.48484 16.6195 5.09147C16.8707 5.69809 17.0001 6.34827 17.0001 7.00488C17.0001 7.66149 16.8707 8.31167 16.6195 8.9183C16.3682 9.52493 15.9999 10.0761 15.5356 10.5404C15.0713 11.0047 14.5201 11.373 13.9135 11.6243C13.3068 11.8756 12.6567 12.0049 12.0001 12.0049C10.674 12.0049 9.4022 11.4781 8.46452 10.5404C7.52684 9.60273 7.00005 8.33097 7.00005 7.00488C7.00005 5.6788 7.52684 4.40703 8.46452 3.46935C9.4022 2.53167 10.674 2.00488 12.0001 2.00488ZM12.0001 3.50488C11.5404 3.50488 11.0853 3.59541 10.6607 3.7713C10.236 3.9472 9.85018 4.205 9.52518 4.53001C9.20017 4.85501 8.94236 5.24085 8.76647 5.66549C8.59058 6.09013 8.50005 6.54526 8.50005 7.00488C8.50005 7.46451 8.59058 7.91963 8.76647 8.34427C8.94236 8.76891 9.20017 9.15475 9.52518 9.47976C9.85018 9.80476 10.236 10.0626 10.6607 10.2385C11.0853 10.4144 11.5404 10.5049 12.0001 10.5049C12.9283 10.5049 13.8185 10.1361 14.4749 9.47976C15.1313 8.82338 15.5001 7.93314 15.5001 7.00488C15.5001 6.07663 15.1313 5.18639 14.4749 4.53001C13.8185 3.87363 12.9283 3.50488 12.0001 3.50488ZM19.1001 12.6699L13.1971 18.5719C12.8531 18.9159 12.6091 19.347 12.4911 19.8189L12.0331 21.6499C11.9875 21.8321 11.9899 22.0229 12.0401 22.2039C12.0902 22.3848 12.1864 22.5497 12.3193 22.6825C12.4521 22.8152 12.617 22.9112 12.798 22.9613C12.979 23.0113 13.1699 23.0136 13.3521 22.9679L15.1821 22.5109C15.6545 22.3927 16.0859 22.1484 16.4301 21.8039L22.3321 15.9019C22.7442 15.47 22.9709 14.8939 22.9639 14.297C22.9569 13.7001 22.7167 13.1295 22.2945 12.7074C21.8724 12.2853 21.3019 12.045 20.7049 12.038C20.108 12.031 19.532 12.2578 19.1001 12.6699Z"
                  fill="#00B3F6"
                />
              </svg>
              Ubah Profile
            </div>

          </button>
          <transition name="fade">
            <div v-if="isEditClicked==true" class="input-section mb-3">
              <div class="profile-section mt-6 px-2 h-auto">
                <label for="name" class="ml-2 mb-2 text-gray-600 font-medium">Name</label>
                <input
                  id="name"
                  type="text"
                  class="w-full h-11 rounded-xl border-2 border-gray-300 px-5"
                  placeholder="name"
                  v-model="teacher.name"
                />

                <div v-if="validation.name" class=" text-center py-1 px-2 w-full">
                  <div class="p-2 bg-yellow-100  items-center text-yellow-700 leading-none rounded-full inline-flex"
                       role="alert"
                  >
                      <span
                        class="flex rounded-full bg-yellow-600 text-white uppercase px-2 py-1 text-xs font-bold mr-3"
                      >Warning</span>
                    <span class="font-semibold mr-2 text-left flex-auto"> nama tidak boleh kosong</span>
                    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
                      />
                    </svg>
                  </div>
                </div>

              </div>
              <div class="profile-section mt-6 px-2 h-auto">
                <label for="email" class="ml-2 mb-2 text-gray-600 font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  class="w-full h-11 rounded-xl border-2 border-gray-300 px-5"
                  placeholder="email"
                  v-model="teacher.email"
                />
                <div v-if="validation.email" class=" text-center py-1 px-2 w-full">
                  <div class="p-2 bg-yellow-100  items-center text-yellow-700 leading-none rounded-full inline-flex"
                       role="alert"
                  >
                      <span
                        class="flex rounded-full bg-yellow-600 text-white uppercase px-2 py-1 text-xs font-bold mr-3"
                      >Warning</span>
                    <span class="font-semibold mr-2 text-left flex-auto"> email tidak boleh kosong</span>
                    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
                      />
                    </svg>
                  </div>
                </div>

              </div>
              <div class="profile-section mt-6 px-2 h-auto">
                <label for="email" class="ml-2 mb-2 text-gray-600 font-medium">Password</label>
                <input
                  id="email"
                  type="password"
                  class="w-full h-11 rounded-xl border-2 border-gray-300 px-5"
                  placeholder="password"
                  v-model="teacher.password"
                />
              </div>
              <div class="profile-section mt-6 px-2 h-auto">
                <label for="email" class="ml-2 mb-2 text-gray-600 font-medium">Konfirmasi Password</label>
                <input
                  id="email"
                  type="password"
                  class="w-full h-11 rounded-xl border-2 border-gray-300 px-5"
                  placeholder="password"
                  v-model="teacher.password_confirmation"
                />
              </div>

              <button @click="updateProfile" type="button"
                      class="bg-[#00B3F6] w-full px-2 py-3 rounded-xl text-white font-medium text-xl mt-6"
              >
                Simpan
              </button>
            </div>

          </transition>

          <hr class="border border-gray-300 relative">
          <button type="button" @click="logout" class=" px-2 py-5 w-full text-gray-600 text-xl font-medium">
            <div class="flex flex-row gap-2">
              <svg class="ml-1" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16"
                  stroke="#00B3F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
                <path d="M7 12H21M21 12L18 9M21 12L18 15" stroke="#00B3F6" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"
                />
              </svg>


              Logout
            </div>
          </button>
        </div>


      </div>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      isEditClicked: false,
      validation: [],
      teacher: {
        name: '',
        email: '',
        file: '',
        profileUrl: '',
        password: '',
        password_confirmation: ''
      }
    }
  },

  async asyncData ({
    store
  }) {
    await store.dispatch('teacher/user/getDetailUser')

  },
  computed: {
    user () {
      return this.$store.state.teacher.user.user
    }
  },

  mounted () {
    this.teacher.name = this.user.name
    this.teacher.email = this.user.email
    this.teacher.profileUrl = this.user.image

  },

  methods: {
    async updateProfile () {
      let formData = new FormData()
      formData.append('name', this.teacher.name)
      formData.append('email', this.teacher.email)
      if (this.teacher.password != '') {
        formData.append('password', this.teacher.password)
        formData.append('password_confirmation', this.teacher.password_confirmation)

      }

      if (this.teacher.file != '') {
        formData.append('image', this.teacher.file)
      }

      await this.$axios.post('/api/teacher/profile', formData).then(() => {
        this.$swal.fire({
          title: 'Update profile sukses',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        })

        this.$store.dispatch('teacher/user/getDetailUser')
        this.isEditClicked = false

      })

        .catch((error) => {
          // assign error to state "validation"
          console.log(error.response)
          this.validation = error.response ? error.response.data : ''
        })

    },
    handleFileChange (e) {
      // get image
      const image = this.teacher.file = e.target.files[0]
      if (e.target.files[0]) {
        // check fileType
        if (!image.type.match('image.*')) {
          console.log('error')
          this.$swal.fire({
            title: 'OOPS!',
            text: 'Format File Tidak Didukung!',
            icon: 'error',
            showConfirmButton: false,
            timer: 2000
          })

          // if fileType not allowed, then clear value and set null
          e.target.value = ''

          // set state "category.image" to null
          this.teacher.file = ''
        }

        if (this.teacher.file != '') {
          this.teacher.profileUrl = URL.createObjectURL(e.target.files[0])

        } else {
          this.teacher.profileUrl = this.user.image
        }

      }

      console.log('yee berhasil')
    },

    async logout () {

      //logout auth
      await this.$auth.logout()

      //redirect route admin login
      await this.$router.push('/')
    }
  }
}
</script>

<style>
.section-top {
  background-image: url("@/assets/img/bg-profile.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: bottom;
  background-position-x: center;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

}
</style>

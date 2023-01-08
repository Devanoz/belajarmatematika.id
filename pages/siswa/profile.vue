<template>
  <div id="root">
    <div class="title h-16 grid grid-cols-4 items-center">
      <button class="ml-8 text-[1.4em] col-span-1">
        <nuxt-link to="/siswa/materi">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.4718 9.01357L16.6655 2.81987C16.7688 2.72365 16.8516 2.60762 16.909 2.47871C16.9665 2.34979 16.9973 2.21062 16.9998 2.06951C17.0023 1.92839 16.9764 1.78822 16.9235 1.65736C16.8707 1.5265 16.792 1.40762 16.6922 1.30782C16.5924 1.20802 16.4735 1.12935 16.3426 1.07649C16.2118 1.02363 16.0716 0.997674 15.9305 1.00016C15.7894 1.00265 15.6502 1.03354 15.5213 1.09098C15.3924 1.14842 15.2763 1.23124 15.1801 1.3345L8.98643 7.5282L2.79273 1.3345C2.5935 1.14886 2.32999 1.04779 2.05772 1.05259C1.78545 1.0574 1.52567 1.1677 1.33311 1.36025C1.14056 1.55281 1.03026 1.81259 1.02545 2.08486C1.02065 2.35713 1.12172 2.62064 1.30736 2.81987L7.50106 9.01357L1.30736 15.2073C1.11055 15.4043 1 15.6714 1 15.95C1 16.2285 1.11055 16.4956 1.30736 16.6926C1.50442 16.8895 1.77154 17 2.05004 17C2.32855 17 2.59567 16.8895 2.79273 16.6926L8.98643 10.4989L15.1801 16.6926C15.3772 16.8895 15.6443 17 15.9228 17C16.2013 17 16.4684 16.8895 16.6655 16.6926C16.8623 16.4956 16.9729 16.2285 16.9729 15.95C16.9729 15.6714 16.8623 15.4043 16.6655 15.2073L10.4718 9.01357Z"
              fill="#56739D" stroke="#56739D" stroke-width="0.5"
            />
          </svg>
        </nuxt-link>
      </button>
      <h1 class="text-[1.4em] col-span-2 text-gray-700 font-bold text-center">
        Profile
      </h1>
    </div>
    <hr class="bg-gray-300 h-0.5">
    <div id="image-wrapper" class="w-40 h-auto m-auto flex flex-row justify-center mt-5 relative">
      <img :src="getProfileImageUrl" class="w-40 h-40 rounded-full" alt="profile image">
      <transition name="fade">
      <img v-if="!isInputDisabled"  src="~/assets/img/murid/profilepic/editPhotoSign.svg" class="absolute bottom-0 right-0 w-12 h-12"  alt="edit photo sign">
      </transition>
      <label v-if="!isInputDisabled" for="profile-img" class="absolute bottom-0 right-0 w-12 h-12 z-10">
        <input @change="handleProfileImage($event)" type="file" id="profile-img" class="hidden" >
      </label>
    </div>
    <h1 id="name" class="text-center mt-5">{{ studentName }}</h1>
    <h2 id="email" class="text-center mt-2 text-gray-500" >{{ studentEmail }}</h2>
    <div class="profile-section mt-6 px-10 h-auto">
      <label for="name" class="ml-2 mb-2 font-bold">Name</label>
      <input
        id="name"
        type="text"
        class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        placeholder="name"
        v-model="name"
        :disabled="isInputDisabled"
      />
    </div>
    <div class="profile-section mt-6 px-10 h-auto">
      <label for="email" class="ml-2 mb-2 font-bold">Email</label>
      <input
        id="email"
        type="email"
        class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        placeholder="email"
        v-model="email"
        :disabled="isInputDisabled"
      />
    </div>
    <div v-if="!isInputDisabled" class="profile-section mt-6 px-10 h-auto">
      <label for="password" class="ml-2 mb-2 font-bold">Password</label>
      <input
        id="password"
        type="password"
        class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        placeholder="new password"
        v-model="password"
        :disabled="isInputDisabled"
      />
    </div>
    <div v-if="!isInputDisabled" class="profile-section mt-6 px-10 h-auto">
      <label for="password-confirmation" class="ml-2 mb-2 font-bold">Password Confirmation</label>
      <input
        id="password-confirmation"
        type="text"
        class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        placeholder="password confirmation"
        v-model="passwordConfirmation"
        :disabled="isInputDisabled"
      />
    </div>
    <div id="button-upate-profile" class="w-full h-auto mt-5 flex flex-col justify-center items-center gap-3">
      <button @click="onUpdateProfileClicked" type="submit" class="bg-cs-blue-500 w-3/4 py-3 text-center text-white rounded-2xl shadow-md">
        {{ submitButtonText }}
      </button>
      <transition name="fade">
      <button v-if="!isInputDisabled" @click="onButtonCancelClicked" type="submit" class="bg-cs-blue-500 w-3/4 py-3 text-center text-white rounded-2xl shadow-md">
        Cancel
      </button>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  middleware:'isStudent',
  data () {
    return {
      //data
      studentName:'',
      studentEmail:'',
      //v-model
      name: "",
      email: "",
      password:"",
      //profile image url
      profileImageFile:null,
      profileUrl:'',
      //password confirmation
      passwordConfirmation:'',
      //disable input
      isInputDisabled: true,
      submitButtonText: 'Update Profile',

    }
  },
  created () {
    this.$store.dispatch('student/getStudentData').then(()=>{
      const studentProfile = this.$store.getters['student/getStudent']
      this.name = studentProfile.name
      this.studentName = studentProfile.name
      this.email = studentProfile.email
      this.studentEmail = studentProfile.email
      if(studentProfile.image) {
        this.profileUrl = studentProfile.image
      }
    })
  },
  computed : {
    getProfileImageUrl () {
      if(!this.profileUrl) {
        return require("~/assets/img/murid/profilepic/defaultUser.svg" );
      }else {
        return this.profileUrl
      }
    },
    getProfileData () {
      return this.$store.getters['student/getStudent']
    }
  },
  methods : {
    onUpdateProfileClicked () {
      if(this.isInputDisabled){
        this.isInputDisabled = !this.isInputDisabled
      }else {
          const formData = new FormData()
          if(this.name) {
            formData.append('name',this.name)
          }
          if(this.email) {
            formData.append('email',this.email)
          }
          if(this.profileImageFile) {
            formData.append('image',this.profileImageFile)
          }
          if(this.password) {
            formData.append('password',this.password)
          }
          if(this.passwordConfirmation) {
            formData.append('password_confirmation',this.passwordConfirmation)
          }
          this.$axios.post('/api/student/profile',formData).then(()=>{
            this.$swal.fire({
              title : 'Update profile sukses',
              icon : 'success',
              showConfirmButton : false,
              timer : 2000
            })
            this.$store.dispatch('student/getStudentData').then(()=>{
              //get student data if cancel
              const profileData = this.getProfileData
              if(!profileData.name || !profileData.email || !profileData.image){
                this.$store.dispatch('student/getStudentData').then(()=>{
                  const studentProfile = this.$store.getters['student/getStudent']
                  this.name = studentProfile.name
                  this.studentName = studentProfile.name
                  this.email = studentProfile.email
                  this.studentEmail = studentProfile.email
                  if(studentProfile.image) {
                    this.profileUrl = studentProfile.image
                  }
                })
              }else {
                const studentProfile = this.$store.getters['student/getStudent']
                this.name = studentProfile.name
                this.studentName = studentProfile.name
                this.email = studentProfile.email
                this.studentEmail = studentProfile.email
                if(studentProfile.image) {
                  this.profileUrl = studentProfile.image
                }
              }
              this.isInputDisabled = !this.isInputDisabled
              this.submitButtonText = 'Update Profile'
            })
          }).catch((error)=>{
            const errorData = error.response.data
            this.$swal.fire({
              title : (errorData.password)?errorData.password[0]:null
            })
          })
      }
      this.submitButtonText = 'Submit'
    },
    handleProfileImage (event) {
      const file = event.target.files[0]
      this.profileImageFile = file
      this.profileUrl = URL.createObjectURL(file)
    },
    onButtonCancelClicked () {
      this.isInputDisabled = !this.isInputDisabled
      this.submitButtonText = 'Update Profile'
      //get student data if cancel
      const profileData = this.getProfileData
      if(!profileData.name || !profileData.email || !profileData.image){
        this.$store.dispatch('student/getStudentData').then(()=>{
          const studentProfile = this.$store.getters['student/getStudent']
          this.name = studentProfile.name
          this.studentName = studentProfile.name
          this.email = studentProfile.email
          this.studentEmail = studentProfile.email
          if(studentProfile.image) {
            this.profileUrl = studentProfile.image
          }
        })
      }else {
        const studentProfile = this.$store.getters['student/getStudent']
        this.name = studentProfile.name
        this.studentName = studentProfile.name
        this.email = studentProfile.email
        this.studentEmail = studentProfile.email
        if(studentProfile.image) {
          this.profileUrl = studentProfile.image
        }
      }
    },
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div id="root">
    <div class="title text-center my-3">
      <h1 class="text-2xl font-semibold">Profile</h1>
    </div>
    <hr class="bg-gray-300 h-0.5">
    <div id="image-wrapper" class="w-40 h-auto m-auto flex flex-row justify-center mt-5 relative">
      <img :src="getProfileImageUrl" class="w-40 h-40 rounded-full">
      <transition name="fade">
      <img v-if="!isInputDisabled"  src="~/assets/img/murid/profilepic/editPhotoSign.svg" class="absolute bottom-0 right-0 w-12 h-12" >
      </transition>
      <label v-if="!isInputDisabled" for="profile-img" class="absolute bottom-0 right-0 w-12 h-12 z-10">
        <input @change="handleProfileImage($event)" type="file" id="profile-img" class="hidden" >
      </label>
    </div>
    <h1 id="name" class="text-center mt-5">{{ studentName }}</h1>
    <h2 id="email" class="text-center mt-2 text-gray-500" >{{ studentEmail }}</h2>
    <div class="profile-section mt-6 px-10 h-auto">
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
          this.$axios.post('/api/student/profile',formData).then((response)=>{
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

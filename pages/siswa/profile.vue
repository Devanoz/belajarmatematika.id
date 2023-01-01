<template>
  <div id="root">
    <div class="title text-center my-3">
      <h1 class="text-2xl font-semibold">Profile</h1>
    </div>
    <hr class="bg-gray-300 h-0.5">
    <div id="image-wrapper" class="w-full h-auto m-auto flex flex-row justify-center mt-10">
      <img src="~/assets/img/murid/profilepic/arsya.png" class="w-40 h-40 rounded-full">
    </div>
    <h1 id="name" class="text-center mt-5">Muhammad Devano Zaidan</h1>
    <h2 id="email" class="text-center mt-2 text-gray-500" >devanozaidan@gmail.com</h2>

    <div class="profile-section mt-6 px-10 h-auto">
      <input
        id="name"
        type="text"
        class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        placeholder="Muhammad Devano Zaidan"
        v-model="name"
        :disabled="true"
      />
    </div>
    <div class="profile-section mt-6 px-10 h-auto">
      <input
        id="email"
        type="email"
        class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        placeholder="devanozaidan@gmail.com"
        v-model="email"
        :disabled="true"
      />
    </div>
    <div class="profile-section mt-6 px-10 h-auto">
      <input
        id="judul"
        type="password"
        class="w-full h-11 rounded-2xl border-2 border-gray-400 px-5"
        placeholder="password123"
        v-model="password"
        :disabled="true"
      />
    </div>
    <div id="button-upate-profile" class="w-full h-auto flex flex-row justify-center">
      <button @click="" type="submit" class="bg-cs-blue-500 my-10 w-3/4 py-3 text-center text-white rounded-2xl shadow-md">
        Update Profile
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  middleware:'isStudent',
  data () {
    return {
      name: "Muhammad Devano Zaidan",
      email: "devanozaidan@gmail.com",
      password:"password123"
    }
  }
}
</script>

<style scoped>

</style>

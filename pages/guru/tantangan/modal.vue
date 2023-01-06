<template>
  <div id="app">
    <div class="flex flex-col items-center justify-center p-3 min-h-full">
      <h1
        class="my-4 text-3xl text-center font-medium tracking-wider text-purple-700"
      >
        Vue.js Modal transition
      </h1>
      <button
        @click="onToggle"
        class="bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
      >
        Open
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: true
    }
  },

  computed: {
    isModalVisible () {
      return this.isOpen
    }
  },

  methods: {
    onToggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>

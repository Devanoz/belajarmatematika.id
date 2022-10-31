<template >
  <div>
    <button @click="toggleSlide" type="button"
      class="px-3 py-3 bg-sky-500 opacity-20 z-20 absolute rounded-full my-3 mx-3 drop-shadow-lg">Open</button>
    <div class="relative z-10 opacity-0 easy-in-out duration-500" :class="{ 'opacity-100': slideOver, 'z-30': slideOver}"
      aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <!--
   Background backdrop, show/hide based on slide-over state.

   Entering: "ease-in-out duration-500"
     From: "opacity-0"
     To: "opacity-100"
   Leaving: "ease-in-out duration-500"
     From: "opacity-100"
     To: "opacity-0"
 -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity hidden"></div>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
            <!--
         Slide-over panel, show/hide based on slide-over state.

         Entering: "transform transition ease-in-out duration-500 sm:duration-700"
           From: "translate-x-full"
           To: "translate-x-0"
         Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
           From: "translate-x-0"
           To: "translate-x-full"
       -->
            <div
              class="pointer-events-auto relative w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 translate-x-full"
              :class="{ 'translate-x-0': slideOver }">
              <!--
           Close button, show/hide based on slide-over state.

           Entering: "ease-in-out duration-500"
             From: "opacity-0"
             To: "opacity-100"
           Leaving: "ease-in-out duration-500"
             From: "opacity-100"
             To: "opacity-0"
         -->
              <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                <button @click="toggleSlide" type="button"
                  class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span class="sr-only">Close panel</span>
                  <!-- Heroicon name: outline/x-mark -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div class="flex h-full flex-col overflow-y-scroll bg-sky-100 pt-6 shadow-xl">
                <div class="px-4 grid grid-cols-4 sm:px-6">
                  <div class="back-button col-span-1 justify-self-start place-self-center" @click="toggleSlide">
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 1L1 9L9 17" stroke="#56739D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </div>

                  <h2 class="text-lg text-center col-start-2 col-span-2 text-cyan-800 font-semibold" id="slide-over-title">Bangun Datar</h2>
                </div>
                <div class="relative mt-4 flex-1 h-96 sm:pt-6">
                  <div class="grid grid-cols-4 h-full bg-white drop-shadow-lg rounded-2xl">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   


  </div>

</template>
<script>
export default {
  data() {
    return {
      slideOver: true
    }
  },


  methods: {
    toggleSlide() {
      console.log('clicked');
      if (this.slideOver) {
        this.slideOver = false
      } else {
        this.slideOver = true
      }
    },
    test() {
      console.log('test');
    }
  },
}
</script>
<style lang="">
    
</style>
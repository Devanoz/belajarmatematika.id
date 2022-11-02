<template>
  <div class="flex flex-col h-full">
    <div class="border-b-2 bg-white border-slate-200 py-5 sticky top-0 w-full flex items-center px-8">
      <div>
        <NuxtLink to="/video">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1 9L9 17" stroke="#56739D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </NuxtLink>
      </div>

      <div class="mx-auto flex justify-center items-center">
        <h1 class="text-2xl font-bold">
          Video Pembelajaran
        </h1>
      </div>
    </div>

    <div class="mt-4">
      <iframe
        height="315"
        class="w-full"
        src="https://www.youtube.com/embed/cXv_vKX6Y-0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <div class="h-full relative">
      <div class="absolute bottom-20 z-0">
        <svg width="353" height="158" viewBox="0 0 353 158" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M351.533 1.257C351.182 0.932638 350.753 0.705199 350.287 0.597059C349.822 0.488919 349.336 0.503803 348.878 0.640249L299.45 15.4567C298.945 15.6084 298.494 15.9025 298.152 16.3038C297.809 16.705 297.589 17.1964 297.519 17.7193C297.448 18.2421 297.529 18.7742 297.753 19.252C297.977 19.7298 298.334 20.133 298.78 20.4134L312.487 29.0276L309.753 47.2858L327.3 38.3379L339.392 45.9357C339.766 46.1705 340.19 46.3119 340.629 46.348C341.069 46.3842 341.511 46.3139 341.917 46.1433C342.324 45.9726 342.684 45.7065 342.966 45.3676C343.248 45.0286 343.444 44.6267 343.538 44.1958L352.354 3.85984C352.454 3.39203 352.431 2.90614 352.287 2.44983C352.143 1.99352 351.883 1.58247 351.533 1.257ZM339.003 39.2042L325.629 30.7981L336.769 15.2286L314.265 23.662L306.823 18.9848L345.991 7.24218L339.003 39.2042Z" fill="#F1F1F1" />
          <path d="M0 155.492C12.2501 144.773 27.9126 138.715 43.3578 134.188C54.8702 130.814 66.3879 127.446 76.1577 120.064C81.8748 115.744 86.7142 110.328 92.5342 106.081C100.267 100.437 108.239 97.8938 114.119 89.7979C118.061 84.3707 121.24 78.5199 125.85 73.5622C130.706 68.3396 135.081 62.4018 137.675 55.731C142.579 43.1201 141.004 34.287 131.528 23.5881C121.584 12.3608 105.343 24.6705 99.1974 33.7706C92.1836 44.1565 94.9957 62.0005 100.371 72.5768C106.235 84.1164 113.966 97.5009 126.366 102.937C133.524 106.074 142.007 106.404 149.688 106.972C160.867 107.798 171.724 106.923 182.722 104.814C198.546 101.779 213.021 96.7257 227.253 89.094C244.16 80.028 258.042 67.6732 273.098 56.0126C278.693 51.6794 284.902 47.8669 291.398 45.0324C294.037 43.881 296.696 43.1942 299 41.4661" stroke="#F1F1F1" stroke-width="4.22316" stroke-linecap="round" stroke-dasharray="16.89 20" />
        </svg>
      </div>
    </div>

    <div class="bg-cs-blue-300 p-8 pt-4">
      <label class="w-full">
        <input class="w-full py-3 px-4 rounded-full" type="text">
      </label>
    </div>
  </div>
</template>

<script language="ts">

export default {
  name: 'Video',
  layout: 'default',
  data () {
    return {
      clicked: false,
      val: '~/assets/img/navbar/basic/peringkat.svg'
    }
  },
  methods: {
    doClick () {
      this.clicked = !this.clicked
    },
    getColor () {
      return (this.clicked) ? 'red' : ''
    }
  }
}
</script>

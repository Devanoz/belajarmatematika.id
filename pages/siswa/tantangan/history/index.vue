<template>
    <div class="flex items-stretch flex-col h-full px-4 py-4">
        <div class="grid grid-cols-3 gap-3 place-content-between">
            <nuxt-link class="flex col-span-1 flex-col" to="/tantangan">
                <img src="@/assets/img/general/exit.svg" class=" h-5 w-5" alt="">
            </nuxt-link>
           
            <div class="tittle col-span-2">
              <span class=" text-lg font-semibold">
                Hasil Belajar
              </span>  
            </div>
          
        </div>

        <div class="package-img place-self-center mt-56 flex flex-col">
            <img src="@/assets/img/tantangan/package.svg" class=" h-40 w-40 self-center" alt="">
        </div>
        <span class="self-center text-gray-500 mt-3">
                Kosong! Ayo kerjakan tantangan!
        </span>


    
    </div>
</template>

<script>
export default {
}
</script>

<style lang="ts">

</style>

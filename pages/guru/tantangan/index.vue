<template>
  <div class="flex flex-col h-full px-4 py-4" >
        <div class="header">
            <h2 class="text-center text-2xl text-green-primary font-semibold">Tantangan</h2>
            <hr class=" mt-3">
        </div>

        <!-- list materi -->
        <div class="list-materi">
            <div v-for="data in dataSample" class="z-10">
                <div v-for="topik in data.topik">

                    <h2 class="text-xl mt-4 capitalize underline underline-offset-2 text-green-primary">{{topik.nama}}</h2>
        
                    <!-- card materi -->
                    <div v-for="materi in topik.materi" :key="materi.id + 'index'"
                        class="grid grid-cols-6 drop-shadow-lg border-b-2 mb-2 rounded-xl z-10 bg-white py-3 px-2" @click="toggleSlide">
                        <div class="card-image col-span-1">
                            <img src="@/assets/img/materi/book.svg" alt="">
                        </div>
                        <div class="card-content col-span-5 flex flex-col">
                            <p class="font-light ">{{materi.nama}}</p>
                            <span class="text-gray-500 text-sm">13.00 PM</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        
    </div>
</template>

<script>
import {dataSamples} from "@/static/dataSample";
export default {
    layout: 'guru',
    data() {
        return {
            dataSample: dataSamples
        }
    },
}
</script>

<style>

</style>
<template>
    <div class="flex flex-col h-full px-4 py-4">
        <div class="grid grid-cols-3 gap-3 place-content-between">
            <div class="flex col-span-2 flex-col">
                <span class="text-2xl text-gray-700 font-semibold col-start-1 col-span-3">Ayo Bermain</span>
                <span class=" text-lg text-gray-400 font-normal">Sambil belajar!</span>
            </div>
            <img class="text-3xl rounded-full justify-end col-end-4 place-self-end self-start"
                src="@/assets/img/tantangan/history.svg" alt="">
        </div>

        <!-- ongoing -->
        <div class="mt-5 flex flex-col">
            <span class="text-cyan-700 font-semibold">Sedang dikerjakan</span>
            <div class="p-3 mt-2 bg-green-200 drop-shadow-md rounded-2xl grid grid-cols-4">
                <img class="col-span-1" src="@/assets/img/tantangan/balok.svg" alt="">
                <div class="content ml-2 col-span-2 self-center flex flex-col">
                    <span class="text-gray-500 font-normal text-md">
                        Lanjutkan Kuis
                    </span>
                    <span class=" text-xl">
                        Volume Balok
                    </span>
                </div>
                <img class="self-center place-self-end" src="@/assets/img/tantangan/progress.svg" alt="">
            </div>

        </div>

        <div class="mt-5 flex flex-col">
            <span class="text-cyan-700 font-semibold">Tantangan Lainnya</span>
            <div class="p-3 mt-2 border-2 border-cyan-600 drop-shadow-md rounded-2xl grid grid-cols-4">
                <img class="col-span-1" src="@/assets/img/tantangan/balok.svg" alt="">
                <div class="content ml-2 col-span-2 self-center flex flex-col">
                    <span class="font-normal text-md">
                        Volume Balok 2
                    </span>
                    <span class="text-gray-400 text-md">
                        5 soal
                    </span>
                </div>
            </div>

            <div class="p-3 mt-2 border-2 border-cyan-700 drop-shadow-md rounded-2xl grid grid-cols-4">
                <img class="col-span-1" src="@/assets/img/tantangan/PAS.SVG" alt="">
                <div class="content ml-2 col-span-2 self-center flex flex-col">
                    <span class="font-normal text-md">
                        Latihan PAS
                    </span>
                    <span class="text-gray-400 text-md">
                        10 soal
                    </span>
                </div>
            </div>


        </div>

    
    </div>
</template>

<script>
export default {
    layout: "app"
}
</script>

<style lang="ts">

</style>

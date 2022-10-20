<template>
  <div class="wrapper">
    <h3>Pilih Peran</h3>
    <div class="guru">
      <img src="~/assets/img/pilihPeran/peranGuru.png" alt="">
    </div>
    <div class="siswa">
      <img src="~/assets/img/pilihPeran/peranSiswa.png" alt="">
    </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style>
    .h3{
        font-size: 2.5em;
    }

    .guru {
        width: 126px;
        height: 126px;
        background:  #FFD481;
        border-radius: 19.6875px;
    }

    .siswa {
        width: 126px;
        height: 126px;
        background:#FFF3B6 ;
        border-radius: 19.6875px;
    }

    .wrapper div{
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        gap: 32.82px;
        overflow:visible;
    }

</style>

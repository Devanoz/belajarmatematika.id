<template>
  <div class="wrapper">
    <h2>Pilih Peran</h2>
      <div class="guru flex-col gap-y-1 drop-shadow-2xl">
        <img src="~/assets/img/pemilihan/peran/peranGuru.png" alt="">
        <p>Guru</p>
      </div>

    <nuxt-link to="/pemilihan/kelas">

      <div class="siswa flex-col gap-y-1 drop-shadow-2xl">
        <img src="~/assets/img/pemilihan/peran/peranSiswa.png" alt="">
        <p>Siswa</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style scoped>
    h2{
        font-size: 1.5em;
        color:#56739D;
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

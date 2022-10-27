<template>
  <div class="">
    <Navigation />
  </div>
</template>

<script language="ts">

export default {
  name: 'Home',
  layout: 'app',
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

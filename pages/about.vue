<template lang="pug">
  v-container.ma-0.pa-0(fluid fill-height width="100%")
    v-layout.pa-4.white--text(row wrap justify-center align-start xs12 fill-height)
      v-carousel(hide-controls interval="3000" height="700" hide-delimiters)
        v-carousel-item(v-for="item, i in items" :key="i" :src="item" active-class="positionTop")
</template>
<script>
export default {
  data() {
    return {
      items: [
        'busking_1.jpg',
        'busking_2.jpg',
        'busking_3.jpg'
      ]
    }
  }
}
</script>
<style>
.background-grey {
  background-color: #111111;
}
.positionTop {
  background-position: top center;
}
</style>

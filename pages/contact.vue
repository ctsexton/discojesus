<template lang="pug">
  v-container.ma-0.pa-0(fluid fill-height width="100%")
    v-layout.pa-4.background-grey.white--text(row wrap justify-center align-start xs12)
      v-flex(xs12)
        p.text-xs-center SUMMON DISCOJESUS
      v-flex(xs12 md8)
        Contact
</template>
<script>
import Contact from '~/components/contactform.vue'
export default {
  components: {
    Contact
  }
}
</script>
<style>
.background-grey {
  background-color: #111111;
}
</style>

<template lang="pug">
  v-container.ma-0.pa-0(fluid fill-height width="100%")
    v-layout.background-pink(row wrap align-center xs12 grow fill-height)
      v-layout.text-xs-center(xs12 md6 fill-height align-center grow)
        v-layout(column justify-center)
          .mb-3.bungee(:class="{ 'medium-title': $breakpoint.is('smAndDown'), 'big-title': $breakpoint.is('mdAndUp')}") DISCOJESUS
          .display-1.mb-2.white--text.raleway NEW ALBUM
          .display-2.my-4.white--text.raleway <i>SWIM</i>
          .display-1.mb-2.white--text.raleway OUT NOW
          v-img.hidden-sm-and-up(src="artwork_med.jpg" contain max-height="50vh" position="center center")
          v-layout(wrap justify-center :class="{ 'medium-icon': $breakpoint.is('smAndDown'), 'big-icon': $breakpoint.is('mdAndUp')}")
            FontAwesomeIcon.ma-3.icon(:icon="fab.faSpotify")
            FontAwesomeIcon.ma-3.icon(:icon="fab.faBandcamp")
            FontAwesomeIcon.ma-3.icon(:icon="fab.faItunes")
      v-flex.hidden-xs-only(xs12 md6 fill-height grow)
        v-layout(fill-height align-center)
          v-img(src="artwork_med.jpg" contain max-height="80vh" :position="$breakpoint.is('smAndDown') ? 'center center' : 'center right'")
</template>
<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BouncingArrow from '~/components/BouncingArrow'
export default {
  components: {
    FontAwesomeIcon,
    BouncingArrow
  },
  computed: {
    fas() {
      return fas
    },
    fab() {
      return fab
    }
  },
  methods: {
    scrollDown: function() {
      alert('Hi!')
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Bungee');
@import url('https://fonts.googleapis.com/css?family=Raleway:300');
.background-pink {
  background-color: #fea6bf;
  position: relative;
}
.bungee {
  font-family: 'Bungee' !important;
}
.raleway {
  font-family: 'Raleway', sans-serif !important;
}
.icon {
  cursor: pointer;
  margin: 0;
  padding: 0;
  color: white;
}
.icon:hover {
  color: #f7e052;
}
.big-title {
  font-size: 7em;
}
.medium-title {
  font-size: 3em;
}
.big-icon {
  font-size: 6em;
}
.medium-icon {
  font-size: 4em;
}
</style>

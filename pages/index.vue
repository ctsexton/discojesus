<template lang="pug">
  v-container.ma-0.pa-0(fluid fill-height width="100%")
    v-layout.relative(row wrap align-center xs12 grow fill-height)
      v-layout.text-xs-center(xs12 md6 fill-height align-center grow)
        v-layout(column justify-center)
          .mb-3.bungee(:class="{ 'medium-title': $breakpoint.is('smAndDown'), 'big-title': $breakpoint.is('mdAndUp')}") DISCOJESUS
          .display-1.mb-2.white--text.raleway NEW ALBUM
          .display-2.my-4.white--text.raleway <i>SWIM</i>
          .display-1.mb-2.white--text.raleway OUT NOW
          v-img.hidden-sm-and-up(src="artwork_med.jpg" contain max-height="50vh" position="center center")
          v-layout.my-2(wrap justify-center :class="{ 'medium-icon': $breakpoint.is('smAndDown'), 'big-icon': $breakpoint.is('mdAndUp')}")
            a(v-for="link, index in links" :key="index" :href="link.url" target="_blank")
              FontAwesomeIcon.ma-3.icon(:icon="link.icon")
      v-flex.hidden-xs-only(xs12 md6 fill-height grow)
        v-layout(fill-height align-center)
          v-img(src="artwork_med.jpg" contain max-height="80vh" :position="$breakpoint.is('smAndDown') ? 'center center' : 'center right'")
</template>
<script>
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BouncingArrow from '~/components/BouncingArrow'
export default {
  components: {
    FontAwesomeIcon,
    BouncingArrow
  },
  data() {
    return {
      links: [
        {
          url: 'https://discojesus.bandcamp.com/album/swim',
          icon: fab.faBandcamp
        },
        {
          url: '',
          icon: fab.faSpotify
        },
        {
          url:
            'https://itunes.apple.com/us/album/swim/1458073221?app=itunes&ign-mpt=uo%3D4',
          icon: fab.faItunes
        }
      ]
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
}
.relative {
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

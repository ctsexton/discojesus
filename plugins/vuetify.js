import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VFlex,
  VToolbar
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VFlex,
    VToolbar
  },
  directives: {
    Ripple
  },
  iconfont: 'fa'
})

<template lang="pug">
  v-app.anchor
    v-toolbar.elevation-0.background-pink(@click="drawer = !drawer")
      v-icon.background-pink(color="white" size="40px") fas fa-bars
    v-navigation-drawer(
      v-model="drawer"
      fixed
      app
      width="200"
      light
      temporary
      class="elevation-5 grey lighten-3"
      )
      v-list
        v-list-tile(
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
          )
          v-list-tile-action(v-if="item.icon")
            v-icon(
              :color="item.color"
              v-html="item.icon"
              )
          v-list-tile-content(v-if="item.icon")
            v-list-tile-title(
              class="font-weight-thin subheading black--text"
              v-text="item.title"
              )
          v-list-tile-content(v-if="!item.icon")
            v-list-tile-title(
              class="font-weight-normal subheading black--text bungee-nav"
              v-text="item.title"
              )
    v-content
      nuxt
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: '',
          title: 'DISCOJESUS',
          to: '/',
          color: 'grey'
        },
        {
          icon: 'fas fa-user-astronaut',
          title: 'about',
          to: '/about',
          color: 'grey'
        },
        {
          icon: 'fas fa-music',
          title: 'album',
          to: '/',
          color: 'grey'
        },
        {
          icon: 'fas fa-video',
          title: 'watch',
          to: '/video',
          color: 'grey'
        },
        {
          icon: 'fas fa-edit',
          title: 'contact',
          to: '/contact',
          color: 'grey'
        }
      ]
    }
  }
}
</script>
<style>
.anchor {
  position: relative;
}
.topLeft {
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
}
.bungee-nav {
  font-family: 'Bungee';
  font-size: 1.25em !important;
}
.background-pink {
  background-color: #fea6bf !important;
}
</style>

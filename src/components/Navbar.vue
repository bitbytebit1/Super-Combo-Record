<template>
  <div>
    <!-- Header -->
    <v-app-bar
      app
      clipped-left
      class=""
      color="transparent"
      flat
    >
      <!-- Toggle sidebar button -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="white--text"
      />

      <!-- Title -->
      <v-toolbar-title class="white--text accent-4">
        Super Combo Records
      </v-toolbar-title>
    </v-app-bar>

    <!-- Left side draw -->
    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
      disable-route-watcher
      color="grey darken-4"
    >
      <v-list
        dense
      >
        <v-list-item
          v-for="item in menuItems"
          active-class="white--text"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { icon: 'search', text: 'Home', link: '/' },
        { icon: 'face', text: 'About us', link: '/about' },
        { icon: 'audiotrack', text: 'Beat store', link: '/beat-store' }
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: 'search', text: 'Browse', link: '/' },
          { icon: 'person', text: 'Profile', link: '/profile' }
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>

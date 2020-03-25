<template>
  <div>
    <!-- Header -->
    <v-app-bar
      app
      clipped-left
      fixed
      flat
      hide-on-scroll
    >
      <!-- Toggle sidebar button -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="white--text"
      />

      <!-- Title -->
      <v-toolbar-title class="title white--text accent-4">
        Super Combo Records
      </v-toolbar-title>
    </v-app-bar>

    <!-- Left side draw -->
    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
      disable-route-watcher
      color="navbar"
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
          <!-- <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title class="subtitle-1">
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
      drawer: !this.$vuetify.breakpoint.smAndDown
    }
  },
  computed: {
    menuItems () {
      const menuItems = [
        { text: 'Home', link: '/' },
        { text: 'About us', link: '/about' },
        { text: 'Beat store', link: '/beat-store' },
        { text: 'Merchandise', link: '/merchandise' },
        { text: 'Contact', link: '/contact' }
      ]
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

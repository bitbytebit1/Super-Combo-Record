<template>
  <v-app
    dark
  >
    <NavBar />

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
// import Footer from '@/components/Footer/Footer.vue'
export default {
  components: {
    NavBar
    // Footer
  },
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
<style>
html { overflow-y: auto }
</style>

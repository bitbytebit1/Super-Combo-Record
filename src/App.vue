<template>
  <v-app>
    <NavBar />

    <v-content>
      <v-container>
        <keep-alive>
          <router-view />
        </keep-alive>
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

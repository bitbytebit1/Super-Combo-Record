<template>
  <v-app>
    <BeatStore v-if="$route.name === 'BeatStoreIframe'" />
    <div v-else>
      <NavBar />
      <v-content>
        <v-container>
          <transition
            :key="$route.fullPath"
            name="fade"
            mode="out-in"
          >
            <keep-alive>
              <router-view
                v-if="!showBeatStore"
              />
            </keep-alive>
          </transition>
          <transition
            :key="$route.fullPath"
            name="fade"
          >
            <BeatStore v-show="showBeatStore" />
          </transition>
        </v-container>
      </v-content>

      <Footer />
    </div>
  </v-app>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import BeatStore from '@/views/BeatStore.vue'
// import Footer from '@/components/Footer/Footer.vue'
export default {
  components: {
    NavBar,
    Footer,
    BeatStore
  },
  computed: {
    showBeatStore () {
      return this.$route.name === 'BeatStore'
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
<style>
html { overflow-y: auto }

.theme--dark.v-application {
    background: #17181C !important;
    color: #FFFFFF;
}

.pointer {
  cursor: pointer;
}

.route-fade-enter-active,
.route-fade-leave-active {
  transition: opacity 0.1s;
}
.route-fade-enter {
  opacity: 0;
}
.route-fade-leave-to {
  opacity: 0;
}
</style>

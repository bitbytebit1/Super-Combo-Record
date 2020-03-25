<template>
  <v-app>
    <NavBar />
    <v-content>
      <v-container class="fill-height">
        <transition
          :key="$route.fullPath"
          name="fade"
          mode="out-in"
        >
          <keep-alive>
            <router-view :class="showBeatStore ? 'd-none' : ''" />
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
  </v-app>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import BeatStore from '@/views/BeatStore.vue'
// import Footer from '@/components/Footer/Footer.vue'
export default {
  components: {
    NavBar,
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>

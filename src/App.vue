<template>
  <v-app>
    <BeatStore
      v-if="$route.name === 'BeatStoreIframe'"
    />
    <div v-else>
      <NavBar />
      <v-content>
        <v-container>
          <transition
            :key="$route.fullPath"
            name="route-fade"
            mode="out-in"
          >
            <keep-alive>
              <router-view />
            </keep-alive>
          </transition>
        <!-- <transition
            :key="$route.fullPath"
            name="fade"
          >
            <BeatStore v-show="showBeatStore" />
          </transition> -->
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

::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    border-radius: 4px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #acacac;
    border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #bd5656;
    border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #b63535;
}
.v-dialog {
  box-shadow: none!important;
}

.theme--dark.v-application {
    background: rgba(22,24,28,1) !important;
    color: #FFFFFF;
}

.pointer {
  cursor: pointer;
}

.route-fade-enter-active,
.route-fade-leave-active {
  transition: opacity 0.2s;
}
.route-fade-enter {
  opacity: 0;
}
.route-fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <v-container>
    <v-row
      no-gutters=""
      align="center"
      justify="center"
    >
      <v-img
        max-height="200"
        max-width="200"
        :src="require('@/assets/scr_logo_white.png')"
        v-if="$vuetify.breakpoint.smAndDown"
      />
      <v-col
        v-else
        cols="12"
        sm="2"
        class="text-center justify-center"
      >
        <v-row no-gutters>
          <v-col>
            <v-img
              max-height="200"
              max-width="200"
              :src="require('@/assets/scr_logo_white.png')"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        md="10"
        class="text-sm-center text-md-right mb-4"
        align-self="end"
      >
        <span
          v-for="item in menuItems"
          :key="item.title"
        >
          <router-link
            :to="{name: item.link}"
            active-class="red--text"
            class="white--text subtitle-1"
          >
            {{ item.text }}
          </router-link>
        </span>
      </v-col>
    </v-row>
  </v-container>
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
        // { text: 'HOME', link: 'Home' },
        { text: 'ABOUT', link: 'AboutUs' },
        { text: 'CONTACT', link: 'Contact' },
        // { text: 'MERCHANDISE', link: 'Merchandise' },
        { text: 'BEATS', link: 'BeatStore' }
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
a{
  text-decoration: none;
}
</style>

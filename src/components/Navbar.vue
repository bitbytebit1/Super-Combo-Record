<template>
  <v-container id="nav">
    <v-row
      no-gutters=""
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="2"
        class="text-center justify-center"
      >
        <v-img
          @click="$router.push({name: 'AboutUs'})"
          max-height="200"
          max-width="200"
          class="ma-auto pointer"
          :src="require('@/assets/scr-header.png')"
          :lazy-src="require('@/assets/scr-header.png')"
        />
      </v-col>
      <v-col
        cols="12"
        md="10"
        class="text-center  font-weight-light text-md-right mb-4"
        align-self="end"
      >
        <span
          v-for="(item, i) in menuItems"
          :key="item.title"
          class="mt-10"
        >
          <span
            class="mx-3"
            v-if="i"
          >|</span>
          <v-divider vertical />
          <router-link
            :to="{name: item.link}"
            active-class="red--text"
            class="body-2 font-weight-light"
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
      menuItems: [
        { text: 'ABOUT', link: 'AboutUs' },
        { text: 'CONTACT', link: 'Contact' },
        { text: 'MERCHANDISE', link: 'MerchandiseCategory' },
        { text: 'BEATS', link: 'BeatStore' }
      ]
    }
  },
  created () {
    if (process.env.NODE_ENV === 'development') {
      this.menuItems.unshift({ text: 'ADMIN', link: 'Admin' })
    }
  }
}
</script>

<style>
#nav {
  min-height: 193px;
}
a{
  text-decoration: none;
}
a:not(.router-link-exact-active){
  color: rgb(215, 215, 215) !important;
}
</style>

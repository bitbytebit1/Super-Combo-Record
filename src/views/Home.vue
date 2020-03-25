<template>
  <div>
    <BeatStore />
    <AboutUs />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutUs from '@/views/AboutUs.vue'
import BeatStore from '@/views/BeatStore.vue'
export default {
  name: 'Home',
  components: {
    BeatStore,
    AboutUs
  }
}
</script>

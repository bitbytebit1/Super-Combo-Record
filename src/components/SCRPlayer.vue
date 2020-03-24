<template>
  <VueAudio
    :file="require('@/assets/test.mp3')"
    color="success"
    downloadable
  />
</template>

<script>
import VueAudio from '@/components/VueAudio.vue'
export default {
  components: {
    VueAudio
  }
}
</script>

<style>

</style>

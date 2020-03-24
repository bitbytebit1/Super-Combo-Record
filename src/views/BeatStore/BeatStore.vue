<template>
  <div>
    <v-row>
      <!-- HEADER -->
      <v-col
        cols="12"
        class="display-1 font-weight-bold grey--text lighten-1"
      >
        BEAT STORE
      </v-col>
      <v-col cols="12">
        <v-divider />
      </v-col>
      <!-- SONGS -->
      <v-row>
        <v-col cols="8">
          <v-row>
            <v-col cols="6">
              <VueAudio
                title="Victory"
                :file="require('@/assets/test.mp3')"
              />
            </v-col>
            <v-col cols="6">
              <VueAudio
                title="Victory"
                :file="require('@/assets/test.mp3')"
              />
            </v-col>
            <v-col cols="6">
              <VueAudio
                title="Victory"
                :file="require('@/assets/test.mp3')"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row>
            <v-col
              cols="12"
              class="display-1 font-weight-bold grey--text lighten-1"
            >
              Cart
            </v-col>
            <v-col cols="12">
              <v-divider />
            </v-col>
            <v-col
              cols="12"
              class="grey darken-3"
            >
              Your cart is empty
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </div>
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

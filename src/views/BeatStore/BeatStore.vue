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
      <v-row>
        <!-- SONGS -->
        <v-col
          cols="12"
          md="8"
        >
          <v-row>
            <v-col
              cols="12"
              md="6"
              v-for="(song, i) in songs"
              :key="i"
            >
              <VueAudio
                :title="song.title"
                :file="require(`@/assets/Songs/${song.file}`)"
                :price="song.price"
              />
            </v-col>
          </v-row>
        </v-col>
        <!-- ABOUT -->
        <v-col
          cols="12"
          md="4"
        >
          <v-row>
            <v-col
              cols="12"
              class="display-1 font-weight-bold grey--text lighten-1"
            >
              About
            </v-col>
            <v-col cols="12">
              <v-divider />
            </v-col>
            <v-col
              cols="12"
              class="grey darken-3"
            >
              All beats available for purchase.<br><br>

              We offer several different price points to support all budgets and needs<br><br>

              MP3 with intro<br>
              WAV with intro<br>
              Project files and WAV without intro<br>
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
  },
  data () {
    return {
      songs: [
        { title: 'Acid Vice', file: 'Acid Vice.mp3', price: '£10.99' },
        { title: 'Devils Piano', file: 'Devils Piano.mp3', price: '£10.99' },
        { title: 'Graveyard', file: 'Graveyard.mp3', price: '£10.99' },
        { title: 'Legendary', file: 'Legendary MP3 Tagged.mp3', price: '£10.99' },
        { title: 'Lotion', file: 'Lotion.mp3', price: '£10.99' },
        { title: 'Low Lifes', file: 'Low Lifes Tagged.mp3', price: '£10.99' },
        { title: 'Power House', file: 'Power House.mp3', price: '£10.99' },
        { title: 'Sandman', file: 'Sandman.mp3', price: '£10.99' },
        { title: 'Slow ride', file: 'Slow ride MP3 Tagged.mp3', price: '£10.99' },
        { title: 'Winning ', file: 'Winning .mp3', price: '£10.99' }
      ]
    }
  }
}
</script>

<style>
.pre{
  white-space: pre-line;
}
</style>

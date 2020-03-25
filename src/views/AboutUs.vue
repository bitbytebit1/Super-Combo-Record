<template>
  <div>
    <BaseHeader title="About the label" />
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-img
          :src="require('@/assets/studio.jpg')"
          :lazy-src="require('@/assets/studio.jpg')"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <Spinner />
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="font-weight-light"
      >
        <div class="red--text font-italic">
          A little about what we do here at Super Combo Records
        </div>
        <br>

        Here at Super Combo Records, we like to dedicate ourselves to helping unsigned artists looking to take their music to the next level.  We pride ourselves on keeping the creativity and souls of the artists in their music while giving it commercial viability. Here we cover everything from recording, mastering, videos, promotions, and even songwriting as well as setting up live show performances at various locations, helping artists to reach out to fan-bases they never thought would hear them.  We also provide social media plugging on all of our media outlets; Facebook, YouTube, Instagram, Twitter as well as all of our official and unofficial pirate radio stations.  Our team consists of a very small but incredibly capable collective with many different talents to help bolster artists repertoire to higher echelons.  Once we fully understand the needs of the artist, we will customize packages to help keep costs low for the various endeavors we shall take on.  Whether you are an artist, performer or even a manager, then you have come to the right place to put yourselves in the spotlight for the world stage to hear.  We will invest just as much as the artist to launch them onto newer, bigger and better platforms.
        <br><br>
        Dean Kau
        <br><br>
        C.E.O. of Super Combo Records
      </v-col>
    </v-row>

    <BaseHeader title="THE SQUAD" />

    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="6"
        md="3"
      >
        <v-img
          height="255"
          class="d-inline-block"
          width="255"
          :src="require('@/assets/dk2.jpg')"
          :lazy-src="require('@/assets/dk2.jpg')"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <Spinner />
            </v-row>
          </template>
        </v-img>
        <div>
          DEAN KAU<br>
          COMPOSER, PRODUCER, AUDIO ENGINEER
        </div>
      </v-col>
      <v-col
        cols="6"
        md="3"
      >
        <v-img
          class="d-inline-block"
          height="255"
          width="255"
          :src="require('@/assets/deps.jpeg')"
          :lazy-src="require('@/assets/deps.jpeg')"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <Spinner />
            </v-row>
          </template>
        </v-img>
        <div class="src-font">
          DEPSOUL<br>
          SONG WRITER RAP ARTIST, DJ, DESIGNER
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'
export default {
  components: {
    Spinner
  }
}
</script>

<style>

</style>

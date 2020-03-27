<template>
  <v-footer>
    <v-container>
      <v-divider />
      <v-row
        justify="space-between"
      >
        <v-col cols="12" />
        <v-col cols="12" />

        <v-col
          cols="12"
          sm="4"
        >
          <div class="font-weight-bold body-2">
            SUPER COMBO RECORDS
          </div>
          <div
            class="text--darken-3 red--text body-2"
            id="hits"
          >
            BECAUSE WE GOT THEM HITS
          </div><br>
          <div class="font-weight-thin body-2">
            London based independent record label<br>
            Specialising in recording, mixing and songwriting
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="1"
        >
          <v-img
            :src="require('@/assets/scr-footer.png')"
            :lazy-src="require('@/assets/scr-footer.png')"
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
          sm="4"
        >
          <div class="font-weight-bold body-2">
            UPCOMING ARTISTS
          </div>
          <div class="font-weight-light body-2">
            <ul>
              <li>Depsoul</li>
              <li>Vanita</li>
              <li>Xandra</li>
              <li>K Triggz</li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>
#hits{
    letter-spacing: 0.5em;
}
.v-footer {
    background: #17181C !important;
    color: #FFFFFF;
}
</style>

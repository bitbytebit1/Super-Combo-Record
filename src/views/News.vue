<template>
  <v-row>
    <v-col
      v-for="(item, i) in $store.getters['Products/getItems']('news').slice().reverse()"
      :key="i"
      cols="12"
    >
      <v-card
        shaped
      >
        <v-row>
          <v-col
            cols="2"
          >
            <v-img
              :src="require('@/assets/scr-footer.png')"
              :lazy-src="require('@/assets/scr-footer.png')"
              height="150"
              width="180"
            />
          </v-col>
          <v-col cols="9">
            <v-card-title>
              {{ item.name }}
            </v-card-title>
            <v-card-subtitle>
              Date
            </v-card-subtitle>
            <v-card-text v-html="item.description" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>

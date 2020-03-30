<template>
  <v-card
    shaped
  >
    <v-row>
      <v-col
        cols="6"
        sm="2"
      >
        <v-img
          contain
          :src="require('@/assets/scr-footer.png')"
          :lazy-src="require('@/assets/scr-footer.png')"
          height="150"
          width="180"
          class="ml-3"
        />
      </v-col>
      <v-col cols="9">
        <v-card-title>
          {{ item.name }}
        </v-card-title>
        <v-card-subtitle>
          {{ item.date | date }}
        </v-card-subtitle>
        <v-card-text v-html="item.description" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => {} }
  }
}
</script>

<style>

</style>

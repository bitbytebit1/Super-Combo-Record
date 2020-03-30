<template>
  <v-row>
    <v-col
      v-for="(item, i) in $store.getters['Products/getItems']('news').slice().reverse()"
      :key="i"
      cols="12"
    >
      <NewsItem :item="item" />
    </v-col>
  </v-row>
</template>

<script>
import NewsItem from '@/views/NewsItem.vue'
export default {
  components: {
    NewsItem
  }
}
</script>

<style>

</style>

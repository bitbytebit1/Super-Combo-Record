<template>
  <v-card
    shaped
    class="pa-4"
  >
    <!-- {{ $store.getters['Products/getItems']('news') }} -->
    <v-tabs
      color="primary"
      dark
      slider-color="primary"
    >
      <v-tab>
        Merchandise
      </v-tab>
      <v-tab>
        Beats
      </v-tab>
      <v-tab>
        News
      </v-tab>
      <v-tab-item>
        <AdminEditor
          store-name="products"
          :items="$store.getters['Products/getItems']('products')"
        />
      </v-tab-item>
      <v-tab-item>
        <AdminEditor
          store-name="songs"
          :items="$store.getters['Products/getItems']('songs')"
        />
      </v-tab-item>
      <v-tab-item>
        <AdminEditor
          store-name="news"
          :items="$store.getters['Products/getItems']('news')"
        />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import AdminEditor from '@/views/AdminEditor.vue'
export default {
  components: {
    AdminEditor
  }
}
</script>

<style>

</style>

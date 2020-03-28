<template>
  <div>
    <v-tabs
      color="primary"
      dark
      slider-color="primary"
    >
      <v-tab>
        Merchanise
      </v-tab>
      <v-tab>
        Beats
      </v-tab>
      <v-tab>
        News
      </v-tab>
      <v-tab-item>
        <AdminEditor :items="$store.state.Products.products" />
      </v-tab-item>
      <v-tab-item>
        <AdminEditor :items="$store.state.Products.products" />
      </v-tab-item>
      <v-tab-item>
        <AdminEditor :items="$store.state.Products.products" />
      </v-tab-item>
    </v-tabs>
  </div>
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

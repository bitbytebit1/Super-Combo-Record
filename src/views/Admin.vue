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
        >
          <template #preview-item="{ item }">
            <MerchandiseItem :item="item" />
          </template>
          <template #expanded-item="{ item }">
            <MerchandiseItem :item="item" />
          </template>
        </AdminEditor>
        <!-- <Merchandise /> -->
      </v-tab-item>
      <v-tab-item>
        <AdminEditor
          store-name="songs"
          :items="$store.getters['Products/getItems']('songs')"
        >
          <template #preview-item="{ item }">
            <BeatStoreAudio
              id="100"
              :title="item.name"
              :file="`/beats/tagged/${item.file}`"
              :price="item.price"
              :buttons="[]"
            />
          </template>
          <template #expanded-item="{ item }">
            <BeatStoreAudio
              id="100"
              :title="item.name"
              :file="`/beats/tagged/${item.file}`"
              :price="item.price"
              :buttons="[]"
            />
          </template>
        </AdminEditor>
      </v-tab-item>
      <v-tab-item>
        <AdminEditor
          store-name="news"
          :items="$store.getters['Products/getItems']('news')"
        >
          <template #preview-item="{ item }">
            <NewsItem :item="item" />
          </template>
          <template #expanded-item="{ item }">
            <NewsItem :item="item" />
          </template>
        </AdminEditor>
        <!-- <News /> -->
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
/* eslint-disable */
import AdminEditor from '@/views/AdminEditor.vue'
import BeatStore from '@/views/BeatStore.vue'
import BeatStoreAudio from '@/views/BeatStoreAudio.vue'
import Merchandise from '@/views/Merchandise.vue'
import MerchandiseItem from '@/views/MerchandiseItem.vue'
import News from '@/views/News.vue'
import NewsItem from '@/views/NewsItem.vue'
export default {
  components: {
    AdminEditor,
    BeatStoreAudio,
    BeatStore,
    Merchandise,
    MerchandiseItem,
    News,
    NewsItem
  }
}
</script>

<style>

</style>

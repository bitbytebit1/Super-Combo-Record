<template>
  <div style="min-height:700px;">
    <BaseHeader
      title="Merchandise"
    />
    <v-row>
      <v-col style="width:10px">
        <MerchandiseSidebar />
      </v-col>
      <!-- <v-divider vertical /> -->
      <v-col>
        <transition-group
          name="list"
          tag="div"
          class="row"
        >
          <v-col
            v-for="(item) in items"
            :key="item.sku"
            cols="12"
            sm="4"
            class="list-item"
          >
            <v-card
              shaped
              :to="{ name: 'MerchandiseItem', params: { sku: item.sku } }"
            >
              <v-img
                :src="require(`@/assets/${item.image}`)"
                :lazy-src="require(`@/assets/${item.image}`)"
              />
              <v-card-title
                class="text-center"
              >
                {{ item.name }}
              </v-card-title>
              <v-card-text
                class="red--text"
              >
                £{{ item.price }}
              </v-card-text>
              <!-- <v-card-text>
            <v-btn
              outlined
              color="red"
              class="snipcart-add-item white--text"
              :data-item-id="item.id"
              :data-item-price="item.price"
              :data-item-description="item.description"
              :data-item-image="item.image"
              :data-item-name="item.name"
            >
              <div class="white--text">
                Add to cart
              </div>
            </v-btn>
          </v-card-text> -->
            </v-card>
          </v-col>
        </transition-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MerchandiseSidebar from '@/views/MerchandiseSidebar.vue'
export default {
  components: {
    MerchandiseSidebar
  },
  props: {
    type: {
      type: String,
      default: 'all'
    }
  },
  computed: {
    items () {
      console.log(this.type, this.$store.getters['Products/getItems']('products'))
      if (this.category === 'all') {
        return this.$store.getters['Products/getItems']('products')
      }
      if (this.category !== 'all') {
        return this.$store.getters['Products/filterItemsByProperty']('products', 'type', this.type)
      }
      return 1
    }
  }
}
</script>
<style>
.list-item {
  transition: all 1s;
}
.list-leave-active {
  display: none;
}
.list-enter {
  opacity: 0;
}
</style>

<template>
  <div>
    <BaseHeader
      :title="localItem.name"
    />
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-img
          :src="require(`@/assets/${localItem.image}`)"
          :lazy-src="require(`@/assets/${localItem.image}`)"
          min-height="370"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        align-center
      >
        <v-card class="fill-height">
          <v-row
            align="start"
            justify="space-between"
            class="fill-height"
          >
            <!-- <v-card-title>
            {{ item.name }}
          </v-card-title> -->
            <v-col
              cols="12"
            >
              <!-- eslint-disable-next-line -->
              <v-card-text style="white-space: pre-wrap;">{{ localItem.description }}</v-card-text>
            </v-col>
            <v-col
              cols="12"
              align-self="end"
              class="mx-2"
            >
              <v-card-actions>
                <v-btn
                  outlined
                  color="red"
                  class="snipcart-add-item white--text"
                  :data-item-id="localItem.sku"
                  :data-item-price="localItem.price"
                  :data-item-description="localItem.description"
                  :data-item-image="localItem.image"
                  :data-item-name="localItem.name"
                >
                  <span class="white--text">
                    Add to cart
                  </span>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    sku: {
      type: [Number, String],
      default: null
    },
    item: { type: Object, default: () => {} }
  },
  computed: {
    // Allows you to pass in an item or pass sku for look up, disable for production
    localItem () {
      if (!this.sku) {
        return this.item
      } else {
        return this.$store.getters['Products/queryItemByProperty']('products', 'sku', this.sku)
      }
    }
  }
}
</script>

<style>

</style>

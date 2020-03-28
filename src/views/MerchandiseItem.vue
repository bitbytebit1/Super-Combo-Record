<template>
  <div>
    <BaseHeader
      :title="item.name"
    />
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-img
          :src="require(`@/assets/${item.image}`)"
          :lazy-src="require(`@/assets/${item.image}`)"
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
              <v-card-text style="white-space: pre-wrap;">{{ item.description }}</v-card-text>
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
                  :data-item-id="item.id"
                  :data-item-price="item.price"
                  :data-item-description="item.description"
                  :data-item-image="item.image"
                  :data-item-name="item.name"
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
    id: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    item () {
      console.log(this.$store.getters)
      return this.$store.getters['Products/getProductById'](this.id)
    }
  }
}
</script>

<style>

</style>

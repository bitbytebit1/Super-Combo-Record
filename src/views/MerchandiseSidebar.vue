<template>
  <div>
    <div class="font-weight-bold">
      SHOP BY
    </div><br>
    <!-- <router-link
      :to="{name: 'Merchandise'}"
      active-class="red--text"
      class="body-2 font-weight-light"
    >
      All
    </router-link> -->
    <div
      v-for="(item, i) in $store.getters['Products/getProductCategories']()"
      :key="i"
      class="text-capitalize"
    >
      <router-link
        :to="{name: 'MerchandiseCategory', params: {category: item}}"
        active-class="red--text"
        class="body-2 font-weight-light"
      >
        {{ item }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

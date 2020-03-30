<template>
  <v-row>
    <v-col
      cols="12"
      class="text-uppercase grey--text text-left font-weight-bold"
      :class="cclass"
    >
      {{ title }}
      <v-divider />
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    cclass: {
      type: String,
      default: 'display-1'
    }
  }
}
</script>

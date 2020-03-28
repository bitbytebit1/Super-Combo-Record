<template>
  <v-row>
    <v-col
      cols="12"
      class="display-1 text-uppercase grey--text text-left font-weight-bold"
    >
      {{ title }}
    </v-col>
    <v-col cols="12">
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
    }
  }
}
</script>

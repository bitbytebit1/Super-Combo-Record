<template>
  <div>
    {{ $attrs }}
    <v-img
      v-bind="$attrs"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <Spinner />
        </v-row>
      </template>
    </v-img>
  </div>
</template>
<script>
import Spinner from '@/components/Spinner.vue'
export default {
  components: {
    Spinner
  }
}
</script>

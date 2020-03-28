<template>
  <div>
    <BaseHeader title="Contact Us" />
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <div class="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8433714850025!2d-0.02489634855107128!3d51.534432579539704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d406cc60681%3A0xd83fcab7fd875ae2!2s500%20Wick%20Ln%2C%20Bow%2C%20London%20E3%202TB%2C%20UK!5e0!3m2!1sen!2sse!4v1585271783428!5m2!1sen!2sse"
            width="600"
            height="600"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <div class="red--text">
              ADDRESS
            </div>
            500 Wick Lane<br>
            E3 2TB

            <br><br>
            <div class="red--text">
              EMAIL
            </div>
            info@supercomborecords.com

            <br><br>
            <div class="red--text">
              TELEPHONE
            </div>
            0707848940
          </v-col>

          <v-divider
            vertical
            class="d-none d-sm-flex"
          />
          <v-col
            cols="12"
            sm="6"
          >
            <div class="red--text">
              OPERATING HOURS
            </div><br>
            Monday - Friday: 9:30am - 6pm <br><br>
            <div class="red--text">
              SOCIAL MEDIA
            </div><br>
          </v-col>
        </v-row>
        <v-divider />
        <div class="red--text mt-6">
          SEND US A MESSAGE
        </div><br>
        <ContactUsForm />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContactUsForm from '@/views/ContactUsForm.vue'
export default {
  name: 'AboutUs',
  components: {
    ContactUsForm
  }
}
</script>
<style >
.map-responsive{
    overflow:hidden;
    padding-bottom:120.25%;
    position:relative;
    height:0;
}
.map-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}
</style>

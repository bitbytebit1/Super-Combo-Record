<template>
  <v-row
    class="px-3"
  >
    <BaseHeader title="Contact Us" />
    <transition
      name="contact-fade"
      mode="out-in"
    >
      <div
        v-if="formSubmitted"
        :style="containerHeight"
        :class="$store.getters.headingClass"
        class="white--text pt-12 text-center"
      >
        Thanks for your message<br>
        We'll get back to you as soon
      </div>
      <v-col
        v-else
        cols="12"
      >
        <v-card>
          <v-form
            id="contactForm"
            ref="contactForm"
            v-model="formValid"
            method="POST"
            class="px-4 py-2"
            target="contactFrame"
            action="https://mailthis.to/SuperComboRecords"
          >
            <v-row>
              <v-col
                cols="12"
                lg="4"
              >
                <!-- INPUTS -->
                <v-text-field
                  :rules="ruleNotEmpty"
                  label="Name *"
                  type="text"
                  name="name"
                  filled
                  required
                />
                <v-text-field
                  :rules="ruleEmail"
                  label="Email*"
                  type="email"
                  name="_replyto"
                  filled
                  required
                />
              </v-col>
              <v-col
                cols="12"
                lg="8"
              >
                <v-textarea
                  :rules="ruleNotEmpty"
                  name="message"
                  rows="3"
                  filled
                  class="ma-0 pa-0"
                  label="Message *"
                />
              </v-col>

              <!-- HIDDEN INPUTS -->
              <input
                type="hidden"
                name="_honeypot"
                value=""
              >
              <!-- SUBMIT BUTTON -->
              <v-col
                cols="12"
                lg="12"
                class="text-right"
              >
                <v-btn
                  @click="submitForm"
                  outlined
                >
                  Send
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </transition>
    <iframe
      name="contactFrame"
      class="d-none"
    />
  </v-row>
</template>

<script>

export default {
  name: 'AboutUs',
  data () {
    return {
      formSubmitted: false,
      height: 0,
      formValid: false,
      ruleEmail: [
        v => !!v || 'This field is required',
        v => /.+@.+/.test(v) || 'This field is required'
      ],
      ruleNotEmpty: [
        v => !!v || 'This field is required'
      ]
    }
  },
  computed: {
    containerHeight () {
      let ret = ''
      if (this.formSubmitted) {
        ret = 'height:' + this.height + 'px'
      }
      return ret
    }
  },
  methods: {
    submitForm () {
      this.$refs.contactForm.validate()
      if (this.formValid) {
        document.getElementById('contactForm').submit()
        this.height = document.getElementById('contactForm').offsetHeight
        this.formSubmitted = true
      }
    }
  }
}
</script>

<style>
.contact-fade-enter-active {
  transition: opacity .5s;
}
.contact-fade-leave-active {
  transition: opacity .5s;
}
.contact-fade-enter, .contact-fade-leave-to {
  opacity: 0;
}

#contactForm .v-messages__message{
  color: white
}

@media only screen and (min-width: 600px){
  .contact  textarea{
    height: 250px;
  }
}
@media only screen and (max-width: 599px){
  .contact  textarea{
    height: 155px;
  }
}

</style>

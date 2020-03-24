import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '../styles/variables.scss' // Add this line

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
})

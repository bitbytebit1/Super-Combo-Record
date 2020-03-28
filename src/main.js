import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import BaseHeader from '@/components/BaseHeader.vue'

import AudioVisual from 'vue-audio-visual'
import Transitions from 'vue2-transitions'

Vue.component('BaseHeader', BaseHeader)

Vue.use(AudioVisual)
Vue.use(Transitions)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

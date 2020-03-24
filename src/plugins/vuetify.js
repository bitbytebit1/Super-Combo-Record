import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '../styles/variables.scss' // Add this line
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: colors.red, // #E53935 colors.red.darken4
        secondary: colors.indigo, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
        warning: colors.orange.darken3, // #3F51B5
        navbar: '121212' // #3F51B5

      },
      dark: {
        primary: colors.red, // #E53935 colors.red.darken4
        secondary: colors.indigo, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
        warning: colors.orange.darken3, // #3F51B5
        navbar: '121212' // #3F51B5
      }
    }
  }
})

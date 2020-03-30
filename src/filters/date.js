/* use in component as below
  import date from "@/mixins/date.js"
  mixins: [date],
*/

var isDate = function (date) {
  return (new Date(date) !== 'Invalid Date') && !isNaN(new Date(date))
}
export default {
  filters: {
    date: function (str) {
      if (!str || !isDate(str)) { return str }
      str = new Date(str)

      let h = str.getHours()
      h = h < 10 ? '0' + h : h

      let m = str.getMinutes()
      m = m < 10 ? '0' + m : m

      return str.getFullYear() + '-' + ((str.getMonth() < 9) ? '0' : '') + (str.getMonth() + 1) + '-' +
        str.getDate() + ' ' + h + ':' + m
    },
    calcDate: function (b) {
      let a = new Date()
      if (!b) {
        b = new Date()
      }
      if (typeof b !== 'object') {
        b = new Date(b)
      }

      // console.log(a, b)
      var c = Math.abs(a.getTime() - b.getTime())
      var d = Math.floor(c / 864E5)
      var h = Math.floor(c / 36e5)
      var min = Math.floor(c / 6e4)
      var m = Math.floor(d / 31)
      var w = Math.floor(d / 7)
      var y = Math.floor(m / 12)

      a = y > 0 ? [y, ' year'] : m > 0 ? [m, ' month'] : w > 0 ? [w, ' week'] : d > 0 ? [d, ' day'] : h > 0 ? [h, ' hour'] : [min, ' minute']
      return a[0] + a[1] + (a[0] > 1 || a[0] === 0 ? 's' : '') + ' ago'
    }
  }
}

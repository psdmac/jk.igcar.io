import Vue from 'vue'
import '../node_modules/uikit/dist/css/uikit.min.css'
import './sass/index.scss'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
Vue.config.productionTip = false

import firms from './assets/data.json';


let measure = (lat1, lon1, lat2, lon2) => {  // generally used geo measurement function
  var R = 6378.137; // Radius of earth in KM
  var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
  var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
  Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d; // KM
}

new Vue({
  el: '#app',
  data() {
    return {
      mapCenter: { lat: 25.047523, lng: 121.539878 },
      firms: firms.firm_list
    }
  },
  methods: {
    getDistance() {
      this.firms.forEach((firm) => {
        firm.distance = measure(this.mapCenter.lat, this.mapCenter.lng, firm.lat, firm.lng).toFixed(1);
      })
      this.firms.sort((a, b) => {
        return parseInt(a.distance) - parseInt(b.distance);
      })
      this.$forceUpdate()
    },
  },
  created() {
    this.getDistance()
  }
})

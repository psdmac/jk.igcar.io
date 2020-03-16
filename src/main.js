import Vue from 'vue'
import '../node_modules/uikit/dist/css/uikit.min.css'
import './sass/index.scss'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
Vue.config.productionTip = false

import firms from './assets/data.json';




new Vue({
  el: '#app',
  data() {
    return {
      firms: firms.firm_list
    }
  }
})

import Vue from 'vue'
// import 'vuetify/dist/vuetify.min.css'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

// import 'material-design-icons/iconfont/material-icons.css'
// import Vuetify from 'vuetify'
// Vue.use(Vuetify)
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';
import 'clusterize.js/clusterize.css';
// import Clusterize from 'clusterize.js'



import { Popover } from 'element-ui'
Vue.use(Popover)
fontawesome.library.add(solid) // Use any icon from the Solid style
Vue.component('font-awesome-icon', FontAwesomeIcon) // Use the icon component anywhere in the app
Vue.config.productionTip = false

import App from './App'

new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')

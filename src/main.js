import '@babel/polyfill'
import 'mutationobserver-shim'

import './plugins/BootstrapVue'
import './plugins/FontAwesome'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles
import './assets/css/main.styl'

// directives
import './directives'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')

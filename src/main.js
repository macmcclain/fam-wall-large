// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import './assets/css/style.css'

import FamSocket from './socket';
Vue.prototype.$socket = new FamSocket('localhost:3001')

import FamRest from './api/rest'
Vue.prototype.$rest = new FamRest('localhost:3001')

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

import VueSVGIcon from 'vue-svgicon'
Vue.use(VueSVGIcon)

import Icon from './components/Icon'
Vue.component('fam-icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

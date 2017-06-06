import Vue from 'vue'
import Layout from './components/layout.vue'
import IndexPage from './pages/index.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})

new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {Layout}
})

/**
 * Created by a1 on 17/4/17.
 */
import Vue from 'vue'
import userlogin from '../src/components/page/UserLogin.vue'
import store from './store/index'


new Vue({
    el: "#app",
    store,
    components: {"user-login": userlogin}
})
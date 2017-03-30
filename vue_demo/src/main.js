/**
 * Created by a1 on 17/3/30.
 */
import Vue from 'vue'
import Counter from './fue/components/Counter'
import store from './store/store'

new Vue({
    el: "#app",
    store,
    components: {Counter},
    template: `
    <counter></counter>`
})
/**
 * Created by a1 on 17/4/16.
 */
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    username: "0"
}

const mutations = {}

export default new Vuex.Store({
    state,
    mutations
})
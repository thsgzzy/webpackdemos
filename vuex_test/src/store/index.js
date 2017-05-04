/**
 * Created by a1 on 17/4/17.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    user_name: ""
}

const mutations = {
    showUserName(state){
        alert(state.user_name)
    }
}

export default new Vuex.Store({
    state,
    mutations,
})
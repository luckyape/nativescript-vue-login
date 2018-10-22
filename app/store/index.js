/* globals process */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict: process.env.APP_ENV !== 'production',
    namespaced: true,
    modules: {
        dt: {}
    }
})

export default store

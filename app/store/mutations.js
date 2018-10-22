import Vue from 'vue'
/* globals process */
const mutations = {
    setAppName (state, name) {
        Vue.set(state, 'appName', name);
    },
    setInitialized (state, val) {
        Vue.set(state, 'initialized', val);
    },
    setCallback (state, url) {
        Vue.set(state, 'callback', url);
    },
}

export default mutations


{

    }
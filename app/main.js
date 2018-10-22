import Vue from 'nativescript-vue'

import * as ApplicationSettings from "application-settings";
import {Entry} from './pages/index.js'
import mixins from './mixins'
import VueDevtools from 'nativescript-vue-devtools'
import DtUser from 'lib-js-user-functions'
import { UserStore } from 'lib-js-user-functions'
import store from './store'
import fa from './fonts/fa.json';

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
store.registerModule(['dt', 'user'], UserStore);
Vue.prototype.$store = store;
Vue.prototype.$fa = fa
Vue.use(DtUser)
Vue.mixin(mixins)       

new Vue({
    render: h => h('frame', [h(Entry)])
}).$start()
  
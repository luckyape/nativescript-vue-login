/* globals process */

const actions = {
    init ({commit, state, dispatch}) {
        /*
            Populate required env vals
        */
        let appName = process.env.APP_NAME
        commit('setAppName', appName)
        /*
            DT namespaced modules that have a { initiated: false } are collected and
            init is dipatched on each.
        */
        let dtModules = state.dt
        Object.keys(dtModules)
            .map(k => Object.assign({name: k}, dtModules[k]))
            .filter(m => m.initialized === false)
            .forEach(m => dispatch(m.name + '/init'))

        commit('setInitialized', true);
    }
}

export default actions

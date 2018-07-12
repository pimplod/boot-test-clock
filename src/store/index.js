import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'


Vue.use(Vuex)


// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
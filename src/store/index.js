import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: false
    },
    getters: {

    },
    mutations: {
        isUserStatusChange(e, f) {
            console.log(e, f)
        }
    },
    actions: {

    }
})
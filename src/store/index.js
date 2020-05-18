import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        status: false,
        list: {}
    },
    getters: {

    },
    mutations: {
        isUser(state, property) {
            state.user = property
        },
        isUserSignInStatus(state, status) {
            state.status = status
        },
        isListItems(state, listItem) {
            state.list = listItem
        }

    },
    actions: {

    }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        list: {},
        shareId: {},
    },
    getters: {

    },
    mutations: {
        isUser(state, userItem) {
            state.user = userItem
        },
        isListItems(state, listItem) {
            state.list = listItem
        },
        isShareId(state, ShareIdItem) {
            state.shareId = ShareIdItem
        }
    },
    actions: {

    }
})
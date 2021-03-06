import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        list: {},
        shareId: '',
        userRegisterFlg: false,
    },
    getters: {
        isShowFlg(state) {
            let showFlg = Object.keys(state.user).length === 0
            return showFlg
        },
        isListShow(state) {
            return state.list
        },
    },
    mutations: {
        setUser(state, userItem) {
            state.user = userItem
        },
        setListItems(state, listItem) {
            state.list = listItem
        },
        setShareId(state, ShareIdItem) {
            state.shareId = ShareIdItem
        },
        setRegisterFlg(state, registerFlg) {
            state.userRegisterFlg = registerFlg
        },
    },
    actions: {
        onUser(state, userItem) {
            state.commit('setUser', userItem)
        },
        onListItems(state, listItem) {
            state.commit('setListItems', listItem)
        },
        onShareId(state, ShareIdItem) {
            state.commit('setShareId', ShareIdItem)
        },
        onRegisterFlg(state, registerFlg) {
            state.commit('setRegisterFlg', registerFlg)
        },
    }
})
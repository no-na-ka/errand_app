<template>
    <header class="header">
        <div>header logo だよ</div>

        <button
            type="button"
            v-on:click="active"
            class="menu-btn">
                <span v-if="showFlg">入</span>
                <span v-else class="menu-btn_icon --open">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
        </button>
        <nav
            :class="{ active:activeFlg }"
            class="nav_register">
            <ul class="nav_register-list">
                <li
                    v-if="showFlg"
                    class="nav_register-list_item">
                    <SignIn
                        :isSignInFlg="isSignInFlg"
                        @toggleSignUp="toggleSignUp" />
                    <SignUp
                        :isSignUpFlg="isSignUpFlg"
                        @toggleSignIn="toggleSignIn" />
                </li>
                <li
                    v-else
                    class="nav_register-list_item">
                    <ShareIdInput />
                    <SignOut />
                </li>
            </ul>
        </nav>        
    </Header>
</template>

<script>
import SignIn from  './Register/SignIn'
import SignUp from  './Register/SignUp'
import SignOut from './Register/SignOut'
import ShareIdInput from './ShareIdInput/ShareIdInput'

export default {
    name: 'Header',
    data() {
        return {
            isSignInFlg: true,
            isSignUpFlg: false,
        }
    },
    components: {
        SignIn,
        SignUp,
        SignOut,
        ShareIdInput,
    },
    computed: {
        showFlg() {
            let showFlg = this.$store.getters.isShowFlg
            return showFlg
        },
        activeFlg() {
            let activeFlg = this.$store.state.userRegisterFlg
            return activeFlg
        }
    },
    methods: {
        active() {
            let registerFlg = !this.$store.state.userRegisterFlg
            this.$store.dispatch('onRegisterFlg', registerFlg)
        },
        toggleSignUp() {
            this.isSignInFlg = false,
            this.isSignUpFlg = true
        },
        toggleSignIn() {
            this.isSignInFlg = true,
            this.isSignUpFlg = false
        }
    }
}
</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    height: 8vh;
    padding: 0 16px;
}

.nav_register {
    transition: 0.5s;
    position: absolute;
    width: 90vw;
    top: -80vw;
    left: 0;
    right: 0;
    margin: auto;
    padding: 24px;
    background-color: #fff;
    border-radius: 4px;    
    box-shadow: 0px 0px 6px 1px #ccc;
}

.nav_register.active {
    top: 80px;
}

.menu-btn {
    position: relative;
}

.menu-btn_icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.menu-btn_icon i {
    display: block;
    width: 16px;
    height: 2px;
    background-color: #bbb;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-radius: 10px;
    transition: 0.2s;
}

.menu-btn_icon i:nth-of-type(1) {
    top: -10px;
}

.menu-btn_icon i:nth-of-type(2) {
    top: 11px;
}
</style>

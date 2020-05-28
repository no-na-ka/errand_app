<template>
    <header class="header">
        <div>header logo だよ</div>

        <button
            type="button"
            v-on:click="active">
                <span v-if="showFlg">入</span>
                <span v-else>出</span>
        </button>
        <nav
            :class="{ active:isRegisterActive }"
            class="nav-register">
            <ul class="nav-register__list">
                <li
                    v-if="showFlg"
                    class="nav-register__list-item">
                    <SignIn
                        :isSignInFlg="isSignInFlg"
                        @toggleSignUp="toggleSignUp" />
                    <SignUp
                        :isSignUpFlg="isSignUpFlg"
                        @toggleSignIn="toggleSignIn" />
                </li>
                <li
                    v-else
                    class="nav-register__list-item">
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

export default {
    name: 'Header',
    data() {
        return {
            isRegisterActive: false,
            isSignInFlg: true,
            isSignUpFlg: false,
        }
    },
    components: {
        SignIn,
        SignUp,
        SignOut
    },
    computed: {
        showFlg() {
            let showFlg = this.$store.getters.isShowFlg
            return showFlg
        }
    },
    methods: {
        active() {
            this.isRegisterActive = !this.isRegisterActive
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

.nav-register {
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

.nav-register.active {
    top: 80px;
}
</style>

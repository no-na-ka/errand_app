<template>
    <header>
        <div>header logo だよ</div>

        <nav>
            <button
                type="button"
                v-on:click="active">サインイン/サインアップ</button>

            <ul 
                v-bind:class="{ active:isActive }"
                class="nav-register">
                <li v-if="showFlg">
                    <SignIn />
                    <SignUp />
                </li>
                <li v-else>
                    <SignOut />
                </li>
                {{ showFlg }}
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
            isActive: false
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
            this.isActive = !this.isActive
        }
    }
}
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    height: 60px;
}

.nav-register {
    display: none;
}

.nav-register.active {
    display: block;
    position: absolute;
}
</style>

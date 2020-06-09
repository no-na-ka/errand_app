<template>
    <div class="nav_form" v-if="isSignInFlg">
        <p>入った記憶あり</p>
        <form>
            <div class="nav_form-item">
                <label for="firebase-signInMail">mail:</label>
                <input
                    type="email"
                    v-model="signInMail"
                    id="firebase-signInMail">
            </div>
            <div class="nav_form-item">
                <label for="firebase-signInPassword">password:</label>
                <input
                    type="password"
                    v-model="signInPass"
                    id="firebase-signInPassword">
            </div>

            <div
                @click="changeSignUp"
                class="nav_form-change_btn">新しくアカウント作っちゃう</div>
            
            <button type="button" @click="signInMailSubmit()">はいる</button>
        </form>
    </div>
</template>

<script>
import firebase from '../../Firebase'

export default {
    name: 'SignIn',
    props: ['isSignInFlg'],
    data() {
        return {
            signInMail: '',
            signInPass: '',
        }
    },
    methods: {
        signInMailSubmit() {
            firebase.signInMail(this.signInMail, this.signInPass)
        },
        changeSignUp() {
            this.$emit('toggleSignUp')
        }
    },
}
</script>

<style scoped>
.nav_form {
    overflow: hidden;
}
.nav_form-item {
    margin-bottom: 8px;
}
.nav_form-item input {
    display: block;
    border: 0;
    border-bottom: 1px solid #ccc;
    width: 100%;
    font-size: 5vw;
    padding: 8px;
}
.nav_form-item label {
    font-size: 12px;
    color: #999;
}
.nav_form button {
    margin-top: 24px;
    float: right;
}
.nav_form-change_btn {
    margin-top: 24px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 36px;
    font-size: 2vw;
    padding-bottom: 1vw;
    float: left;
}
</style>
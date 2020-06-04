<template>
    <div class="nav-form" v-if="isSignInFlg">
        <p>入った記憶あり</p>
        <form>
            <div class="nav-form__item">
                <label for="firebase-signInMail">mail:</label>
                <input
                    type="email"
                    v-model="signInMail"
                    id="firebase-signInMail">
            </div>
            <div class="nav-form__item">
                <label for="firebase-signInPassword">password:</label>
                <input
                    type="password"
                    v-model="signInPass"
                    id="firebase-signInPassword">
            </div>

            <div
                @click="changeSignUp"
                class="nav-form__change-btn">新しくアカウント作っちゃう</div>
            
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
.nav-form {
    overflow: hidden;
}
.nav-form__item {
    margin-bottom: 8px;
}
.nav-form__item input {
    display: block;
    border: 0;
    border-bottom: 1px solid #ccc;
    width: 100%;
    font-size: 5vw;
    padding: 8px;
}
.nav-form__item label {
    font-size: 12px;
    color: #999;
}
.nav-form button {
    margin-top: 24px;
    float: right;
}
.nav-form__change-btn {
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
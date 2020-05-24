<template>
    <div class="nav-form" v-if="isSignUpFlg">
        <p>入った記憶なし</p>
        <form>
            <div class="nav-form__item">
                <label for="firebase-signUpMail">mail:</label>
                <input
                    type="email"
                    v-model="signUpMail"
                    id="firebase-signUpMail">
            </div>
            <div class="nav-form__item">
                <label for="firebase-signUpPassword">password:</label>
                <input
                    type="password"
                    v-model="signUpPass"
                    id="firebase-signUpPassword">
            </div>

            <div
                @click="changeSignIn"
                class="nav-form__change-btn">アカウント思い出した</div>

            <button type="button" @click="signMailUp()">つくる</button>

        </form>
    </div>
</template>

<script scoped>
import firebase from '../../Firebase'

export default {
    name: 'SignUp',
    props: ['isSignUpFlg'],
    data() {
        return {
            signUpMail: '',
            signUpPass: ''
        }
    },
    methods: {
        signMailUp() {
            firebase.signUpMail(this.signUpMail, this.signUpPass)
        },
        changeSignIn() {
            this.$emit('toggleSignIn')
        }
    }
}
</script>

<style>
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
<template>
    <div>
        <p>signup</p>
        <form>
            MAIL：<input type="email" v-model="signUpMail"><br>
            PASS：<input type="password" v-model="signUpPass"><br>
            <button type="button" @click="signMailUp()">登録する</button>
        </form>
    </div>
</template>

<script>
import firebase from '../../Firebase'

export default {
    name: 'SignUp',
    data() {
        return {
            signUpMail: '',
            signUpPass: ''
        }
    },
    methods: {
        signMailUp() {
            firebase.signUpMail(this.signUpMail, this.signUpPass)
        }
    }
}
</script>
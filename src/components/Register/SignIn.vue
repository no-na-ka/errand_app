<template>
    <div>
        <p>signIn</p>
        <form>
            MAIL：<input type="email" v-model="signInMail"><br>
            PASS：<input type="password" v-model="signInPass"><br>
            <button type="button" @click="signInMailSubmit()">サインイン</button>
        </form>
    </div>
</template>

<script>
import firebase from '../../Firebase'

export default {
    name: 'SignIn',
    data() {
        return {
            signInMail: '',
            signInPass: ''
        }
    },
    methods: {
        signInMailSubmit() {
            firebase.signInMail(this.signInMail, this.signInPass);
        }
    },
}
</script>
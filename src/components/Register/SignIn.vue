<template>
    <div>
        <p>signIn</p>
        <form>
            MAIL：<input type="email" v-model="signInMail"><br>
            PASS：<input type="password" v-model="signInPass"><br>
            <button type="button" @click="signIn()">サインイン</button>
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
        signIn() {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.signInMail, this.signInPass) // ログイン実行
            .then((user) => {
                // ログインに成功したときの処理
                this.$store.commit('isUser', user)
                this.$store.commit('isUserSignInStatus', 'true')
            })
            .catch((error) => {
                // ログインに失敗したときの処理
                console.log('test2')
                this.$store.commit('isUser', error)
                this.$store.commit('isUserSignInStatus', 'false')
            });
        }
    }
}
</script>
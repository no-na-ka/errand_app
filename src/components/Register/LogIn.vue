<template>
    <div>
        <p>logIn</p>
        <form>
            MAIL：<input type="email" v-model="mail"><br>
            PASS：<input type="password" v-model="pass"><br>
            <button type="button" @click="logIn()">ログイン</button>
        </form>
    </div>
</template>

<script>
import firebase from '../../Firebase'

export default {
    name: 'LogIn',
    data() {
        return {
            mail: '',
            pass: ''
        }
    },
    methods: {
        logIn() {
            console.log(this.mail);
            firebase
            .auth()
            .signInWithEmailAndPassword(this.mail, this.pass) // ログイン実行
            .then((user) => {
                // ログインに成功したときの処理
                this.$store.commit('isUserStatusChange', user)
                console.log(user)
            })
            .catch((error) => {
                // ログインに失敗したときの処理
                this.$store.commit('isUserStatusChange', error)
                console.log(error)
            });
        }
    }
}
</script>
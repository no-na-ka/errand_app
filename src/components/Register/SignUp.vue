<template>
    <div>
        <p>signup</p>
        <form>
            MAIL：<input type="email" v-model="signUpMail"><br>
            PASS：<input type="password" v-model="signUpPass"><br>
            <button type="button" @click="signUp()">登録する</button>
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
        signUp() {
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.signUpMail, this.signUpPass)
            .then(() => {
                console.log(1)
                console.log('ユーザ作成に成功');
            })
            .catch((error) => {
                console.log(2)
                console.error('ユーザ作成に失敗:', error);
            });
        }
    }
}
</script>
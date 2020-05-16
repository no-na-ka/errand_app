<template>
    <div>
        <p>logOut</p>
        <button @click="logOut()">logOut</button>
    </div>
</template>

<script>
import firebase from '../../Firebase'

export default {
    name: 'LogOut',
    methods: {
        logOut() {
            firebase
            .auth()
            .signOut() // ログアウト実行
            .then(() => {
                // ログアウトに成功したときの処理
                console.log('ログアウトしました');
            })
            .catch((error) => {
                // ログアウトに失敗したときの処理
                console.error('ログアウトエラー', error);
            });
        }
    },
}
</script>
<template>
    <div>
        <p>logOut</p>
        <button @click="signOut()">logOut</button>
    </div>
</template>

<script>
import firebase from '../../Firebase'

export default {
    name: 'LogOut',
    methods: {
        signOut() {
            firebase.signOut()
        }
    },
}
</script>
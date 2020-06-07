<template>
    <div>
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

<style scoped>
div {
    display: flex;
    justify-content: flex-end;
}
</style>
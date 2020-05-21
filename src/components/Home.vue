<template>
    <section>
        <div>hello</div>
        <pre>{{ user }}</pre>
        <pre>{{ shareId }}</pre>
    </section>
</template>

<script>
import firebase from '../Firebase'

export default {
    name: 'Home',
    created: function() {
        firebase.onAuth()
        firebase.onShareId()
        firebase.showList()
    },
    computed: {
        user () {
            let user = this.$store.state.user
            return user.uid
        },
        shareId() {
            let shareId = this.$store.state.shareId
            return shareId
        },
        list () {
            let list = this.$store.state.list
            return list
        },
    },
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
button {
    appearance: none;
    border: 1px solid #ddd;
    padding: 8px 16px;
}
</style>
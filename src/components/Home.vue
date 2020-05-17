<template>
    <section>
        <div>hello {{ status }}</div>
        <pre>{{ user }}</pre>
    </section>
</template>

<script>
import firebase from '../Firebase'

export default {
    name: 'Home',
    created: function() {
        firebase.onAuth();
    },
    computed: {
        user () {
            let user = this.$store.state.user
            return user
        },
        status() {
            let status = this.$store.state.status
            return status
        }
    },
}
</script>
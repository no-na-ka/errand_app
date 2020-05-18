<template>
    <section>
        <div>hello</div>
        <pre>{{ user }}</pre>
        <pre>{{ shareId }}</pre>
        <pre>{{ list }}</pre>
    </section>
</template>

<script>
import firebase from '../Firebase'

export default {
    name: 'Home',
    created: function() {
        firebase.onAuth();
        firebase.showList();
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
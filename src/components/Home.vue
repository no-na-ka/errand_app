<template>
    <section>
        <div>hello {{ status }}</div>
        <pre>{{ user }}</pre>
    </section>
</template>

<script>

export default {
    name: 'Home',
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
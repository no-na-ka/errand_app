<template>
    <section>
        <div>hello</div>
        {{ msg }}
    </section>
</template>

<script>

export default {
    name: 'Home',
    computed: {
        msg () {
            return this.$store.state.status
        }
    },

}

</script>
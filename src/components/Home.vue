<template>
    <section>
        <div>お買い物リストだよっ</div>
    </section>
</template>

<script>

export default {
    name: 'Home',
    props: ['isShowHome'],
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
    methods: {
        showHome() {
            this.$emit('isChangeShowProfile')
        }
    }
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
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
}
main {
    min-height: 88vh;
    padding: 16px;
}
</style>
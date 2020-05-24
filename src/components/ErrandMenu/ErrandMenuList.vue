<template>
    <section v-if="isShowHome">
        <ul>
            <li>リスト</li>
        </ul>
        <ul>
            <li v-for="list in erranMenuListItem" :key="list.index">
                {{ list.cost }}
            </li>
        </ul>
    </section>
</template>

<script>

export default {
    name: 'errandMenuItem',
    props: ['isShowHome'],
    computed: {
        erranMenuListItem() {
            let listItem = this.$store.state.list
            let targetShareId = this.$store.state.shareId

            return listItem[targetShareId]
        }
    },
    
}
</script>
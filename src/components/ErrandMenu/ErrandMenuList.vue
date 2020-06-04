<template>
    <section>
        <ul>
            <li>リスト</li>
        </ul>
        <ul>
            <li v-for="list in lists" :key="list.index">
                {{ list.cost }}<br>
                {{ list.name }}<br>
                {{ list.count }}
            </li>
        </ul>
        <pre>{{ lists }}</pre>
    </section>
</template>

<script>
export default {
    name: 'errandMenuItem',
    computed: {
        lists() {
            let list = this.$store.state.list
            return list
        }
    }
    
}
</script>
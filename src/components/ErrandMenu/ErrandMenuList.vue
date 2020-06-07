<template>
    <section>
        <ul>
            <li>リスト</li>
        </ul>
        <ul class="errand_menu_list-list">
            <li v-for="list in lists" :key="list.index">
                <div class="errand_menu_list-list_item">
                    <span class="errand_menu_list-list_item_name">{{ list.name }}</span>
                    <span class="errand_menu_list-list_item_name">{{ list.cost }}<small>円</small></span>
                    <span class="errand_menu_list-list_item_name">{{ list.count }}<small>個</small></span>
                </div>
            </li>
        </ul>
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
    },    
}
</script>

<style scoped>
.errand_menu_list-list_item {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 4px;
}
.errand_menu_list-list_item span {
    display: block;
    padding: 0 16px;
    text-align: right;
    flex: 1;
}
.errand_menu_list-list_item span:nth-of-type(1) {
    flex: 2;
}
</style>
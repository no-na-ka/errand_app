<template>
    <section>
        <ul>
            <li>リスト</li>
        </ul>
        <ul class="errand_menu_list-list">
            <li v-for="(list, index) in lists" :key="index">
                <div class="errand_menu_list-list_item" v-if="list.showStatus == 1">
                    <span class="errand_menu_list-list_item_name">{{ list.items.name }}</span>
                    <span class="errand_menu_list-list_item_cost">{{ list.items.cost }}<small>円</small></span>
                    <span class="errand_menu_list-list_item_count">{{ list.items.count }}<small>個</small></span>
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
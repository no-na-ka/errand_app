<template>
<section>
    <div>
        履歴
    </div>
    <ul class="history_list-list">
        <li v-for="(list, index) in lists" :key="index" v-bind:data-edit_Id="index" ref="target">
            <div class="history_list-list_item" v-if="list.showStatus == 0">
                <span class="history_list-list_item_name">{{ list.items.name }}</span>
                <span class="history_list-list_item_cost">{{ list.items.cost }}<small>円</small></span>
                <span class="history_list-list_item_count">{{ list.items.count }}<small>個</small></span>
            </div>
            <div class="history_list-edit_checkbox" v-on:click="historyCheck" v-if="list.showStatus == 0"></div>
        </li>
    </ul>
</section>
</template>

<script>
import firebase from '../../Firebase'
export default {
    name: 'HistoryList',

    computed: {
        lists() {
            let list = this.$store.state.list
            return list
        }
    },
    methods: {
        historyCheck(e) {
            let changeEditId = e.target.parentNode.dataset.edit_id
            firebase.errandShowStatusChange(changeEditId, 1)
        }
    }
}
</script>

<style>
.history_list-list li {
    position: relative;
}
.history_list-list_item {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 4px;
}
.history_list-list_item span {
    display: block;
    padding: 0 16px;
    text-align: right;
    flex: 1;
}
.history_list-list_item span:nth-of-type(1) {
    flex: 2;
}
.history_list-edit_checkbox {
    position: absolute;
    top: 0;
    left: 8px;
    bottom: 0;
    margin: auto;
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
}
</style>
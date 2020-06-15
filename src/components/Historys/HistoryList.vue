<template>
<section>
    <div>
        履歴
    </div>
    <ul class="history_list-list">
        <li v-for="(list, index) in lists" :key="index" v-bind:data-edit_id="index" ref="target">
            <div class="history_list-list_item" v-if="list.showStatus == 0">
                <span class="history_list-list_item_name">{{ list.items.name }}</span>
                <span class="history_list-list_item_cost">{{ list.items.cost }}<small>円</small></span>
                <span class="history_list-list_item_count">{{ list.items.count }}<small>個</small></span>
                <div class="history_list-edit_btn" v-if="list.showStatus == 0" v-bind:data-delete_id="index" ref="target">
                    <button type="button" v-on:click="errandDeleteBtn"></button>
                </div>
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
        },
        errandDeleteBtn(e) {
            let deleteData = this.$store.state.list
            let deleteId =  e.target.parentNode.dataset.delete_id
            let deleteDataName = deleteData[deleteId].items.name
            let deleteDataCost = deleteData[deleteId].items.cost
            let deleteDataCount = deleteData[deleteId].items.count

            console.log(deleteData)
            console.log(deleteId)
            console.log(deleteDataName)
            console.log(deleteDataCost)
            console.log(deleteDataCount)

            firebase.deleteErrandList(deleteId, deleteDataName, deleteDataCost, deleteDataCount)
        },
    },
    
}
</script>

<style>
.history_list-list li {
    position: relative;
}
.history_list-list_item {
    display: flex;
    border-bottom: 1px solid #ccc;
    position: relative;
}
.history_list-list_item span {
    display: block;
    padding: 4px 16px;
    text-align: right;
    flex: 1;
}
.history_list-list_item .history_list-list_item_count {
    padding-right: 30px;
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

.history_list-edit_btn {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 20px;
}
.history_list-edit_btn button {
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 50%;
    border: 1px solid #ff0000;
    background-color: #ff9999;
    position: relative;
}
.history_list-edit_btn button::before,
.history_list-edit_btn button::after {
    content: "";
    display: block;
    width: 12px;
    height: 2px;
    background-color: #ff0000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotate(45deg);
}
.history_list-edit_btn button::after {
    transform: rotate(-45deg);
}
</style>
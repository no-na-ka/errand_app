<template>
    <section>
        <ul>
            <li>リスト</li>
        </ul>
        <div class="">
            <ul class="errand_list-edit">
                <li v-for="(list, index) in lists" v-bind:key="index" v-on:click="errandEditList">
                    <div class="errand_list-edit_item" v-bind:data-edit_Id="index" ref="target">
                        <span class="errand_list-edit_item_name">
                            {{ list.items.name }}</span>
                        <span class="errand_list-edit_item_cost">
                            {{ list.items.cost }}<small>円</small></span>
                        <span class="errand_list-edit_item_count">
                            {{ list.items.count }}<small>個</small></span>
                    </div>
                </li>
            </ul>
            <div class="errand_list-edit_content">
                <div class="errand_list-edit_input">
                    <input type="text" name="editName" v-model="editName" />
                    <input type="number" name="editCost" v-model="editCost" />
                    <input type="number" name="editCount" v-model="editCount" />
                    <input type="hidden" name="editId" v-model="editId" />
                </div>
                <div class="errand_list-edit_btn --edit">
                    <button type="button" v-on:click="errandEditSetBtn">更新しちゃうぜ</button>
                </div>
            </div>

            <div class="errand_list-edit_btn --delete">
                <button type="button" v-on:click="errandEditDeleteBtn">消しちゃうぜ</button>
            </div>
        </div>

    </section>
</template>

<script>
import firebase from '../../Firebase' 

export default {
    name: 'errandMenuEdit',
    data() {
        return {
            editId: '',
            editName: '',
            editCost: '',
            editCount: '',
        }
    },
    computed: {
        lists() {
            let list = this.$store.state.list
            return list
        },
    },
    methods: {
        errandEditList(e) {
            let clickDataEdit = this.$store.state.list
            let clickDataEditId = e.target.parentNode.dataset.edit_id // クリックした要素の親要素にあるdataを取得
            let clickDataEditName = clickDataEdit[clickDataEditId].name
            let clickDataEditCost = clickDataEdit[clickDataEditId].cost
            let clickDataEditCount = clickDataEdit[clickDataEditId].count

            this.editId = clickDataEditId
            this.editName = clickDataEditName
            this.editCost = clickDataEditCost
            this.editCount = clickDataEditCount

        },
        errandEditDeleteBtn() {
            let changeEditId = this.editId
            let changeEditName = this.editName
            let changeEditCost = this.editCost
            let changeEditCount = this.editCount

            firebase.deleteErrandList(changeEditId, changeEditName, changeEditCost, changeEditCount)
        },
        errandEditSetBtn() {
            let changeEditId = this.editId
            let changeEditName = this.editName
            let changeEditCost = this.editCost
            let changeEditCount = this.editCount

            firebase.editErrandList(changeEditId, changeEditName, changeEditCost, changeEditCount)
        }
    }
}
</script>

<style scoped>
.errand_list-edit_item {
    display: flex;
    border-bottom: 1px solid #ccc;
}
.errand_list-edit_item span {
    display: block;
    padding: 4px 16px;
    text-align: right;
    flex: 1;
}
.errand_list-edit_item span:nth-of-type(1) {
    flex: 2;
}

.errand_list-edit_content {
    display: flex;
}
.errand_list-edit_input {
    width: 100%;
    display: flex;
}
.errand_list-edit_input input {
    border: 1px solid #ccc;
    width: 100%;
}
.errand_list-edit_input input:nth-of-type(1) {
    flex: 2;
}
.errand_list-edit_input input:nth-of-type(2) {
    flex: 1;
}
.errand_list-edit_input input:nth-of-type(3) {
    flex: 1;    
}
</style>
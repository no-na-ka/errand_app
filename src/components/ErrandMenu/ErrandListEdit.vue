<template>
    <section>
        <ul>
            <li>リスト</li>
        </ul>
        <div class="">
            <ul class="errand_list-edit">
                <li v-for="(list, index) in lists" v-bind:key="index" v-on:click="errandEditList" v-bind:data-edit_Id="index" ref="target">
                    <div class="errand_list-edit_item" v-if="list.showStatus == 1">
                        <input type="text" name="editName" v-model="list.items.name" v-on:change="errandEditSetName" />
                        <input type="number" name="editCost" v-model="list.items.cost" v-on:change="errandEditSetCost" />
                        <input type="number" name="editCount" v-model="list.items.count" v-on:change="errandEditSetCount" />
                    </div>
                    <div class="errand_list-edit_checkbox" v-on:click="errandEditCheck" v-if="list.showStatus == 1"></div>
                </li>
            </ul>

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
            let clickDataEditName = clickDataEdit[clickDataEditId].items.name
            let clickDataEditCost = clickDataEdit[clickDataEditId].items.cost
            let clickDataEditCount = clickDataEdit[clickDataEditId].items.count

            this.editId = clickDataEditId
            this.editName = clickDataEditName
            this.editCost = clickDataEditCost
            this.editCount = clickDataEditCount

        },
        errandEditDeleteBtn(e) {
            let changeEditId =  e.target.parentNode.dataset.edit_id
            let changeEditName = this.editName
            let changeEditCost = this.editCost
            let changeEditCount = this.editCount

            firebase.deleteErrandList(changeEditId, changeEditName, changeEditCost, changeEditCount)
        },
        errandEditSetName(e) {
            let changeEditId = e.target.parentNode.dataset.edit_id
            let changeEditName = e.target.value
            let changeEditCost = this.editCost
            let changeEditCount = this.editCount

            firebase.editErrandListName(changeEditId, changeEditName, changeEditCost, changeEditCount)
        },
         errandEditSetCost(e) {
            let changeEditId = e.target.parentNode.dataset.edit_id
            let changeEditName = this.editName
            let changeEditCost = e.target.value
            let changeEditCount = this.editCount

            firebase.editErrandListName(changeEditId, changeEditName, changeEditCost, changeEditCount)
        },
         errandEditSetCount(e) {
            let changeEditId = e.target.parentNode.dataset.edit_id
            let changeEditName = this.editName
            let changeEditCost = this.editCost
            let changeEditCount = e.target.value

            firebase.editErrandListName(changeEditId, changeEditName, changeEditCost, changeEditCount)
        },
        errandEditCheck(e) {
            let changeEditId = e.target.parentNode.dataset.edit_id

            firebase.errandShowStatusChange(changeEditId, 0)
        }
    }
}
</script>

<style scoped>
.errand_list-edit li {
    position: relative;
}
.errand_list-edit_item {
    display: flex;
    height: 32px;
}
.errand_list-edit_item input {
    display: block;
    padding: 4px 16px;
    text-align: right;
    flex: 1;
    border: 0;
    border-bottom: 1px solid #ccc;
    width: 100%;
}
.errand_list-edit_item input:nth-of-type(1) {
    flex: 2;
    padding-left: 30px;
}
.errand_list-edit_item input:nth-of-type(2) {
    flex: 1;
}
.errand_list-edit_item input:nth-of-type(3) {
    flex: 1;    
}

.errand_list-edit_checkbox {
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
.errand_list-edit_checkbox::before {
    content: "";
    width: 16px;
    height: 2px;
    display: block;
    background-color: #00bb00;
    transform: rotate(-45deg);
    position: absolute;
    top: 4px;
    left: 4px;
    margin: auto;
    border-radius: 2px;
}

.errand_list-edit_checkbox::after {
    content: "";
    width: 6px;
    height: 2px;
    display: block;
    background-color: #00bb00;
    transform: rotate(50deg);
    position: absolute;
    top: 7px;
    left: 2px;
    margin: auto;
    border-radius: 2px;
}
</style>
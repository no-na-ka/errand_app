<template>
    <section>

        <div class="errand_input-check_item">商品<span>{{ errandItemName }}</span>, 値段<span>{{ errandItemCost }}</span>円, <span>{{ errandItemCount }}</span>個</div>
        <form>
            <input type="text" name="errandItemName"  v-model="errandItemName">
            <input type="number" name="errandItemCost" v-model="errandItemCost">
            <input type="number" name="errandItemCount" v-model="errandItemCount">
        </form>

        <button type="button" @click="setErandList()">りすとに入れちゃう</button>
    </section>
</template>

<script>
import firebase from '../../Firebase'

export default {
    name: 'errandItem',
    props:['isShowProfile'],
    data() {
        return {
            errandItemName: '',
            errandItemCost: '',
            errandItemCount: '',
            erandList: {}
        }
    },
    methods: {
        setErandList() {
            this.errandList = {
                'name': this.errandItemName,
                'cost': this.errandItemCost,
                'count': this.errandItemCount,
            }
            const user = this.$store.state.user

            firebase.setErandList(user.uid, this.errandList)

            // 登録の有無関係なく、クリックされたら入力内容を削除
            this.errandItemName = ''
            this.errandItemCost = ''
            this.errandItemCount = ''
        }

    }
    
}
</script>

<style scoped>
section {
    overflow: hidden;
}
input {
    border: 0;
    border-bottom: 1px solid #ccc;
    font-size: 5vw;
    padding: 8px 8px 4px;
    text-align: right;
}
form {
    display: flex;
    justify-content: space-between;
}
input:nth-of-type(1) {
    width: 30vw;
}
input:nth-of-type(2) {
    width: 20vw;
}
input:nth-of-type(3) {
    width: 20vw;
}
.errand_input-check_item {
    font-size: 12px;
    color: #333;
}
.errand_input-check_item span {
    font-size: 14px;
    padding: 0 4px;
}
button {
    float: right;
    margin-top: 24px;
}
</style>
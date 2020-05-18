<template>
    <section>
        <form>
            <input type="text" name="errandItemName"  v-model="errandItemName">
            <input type="number" name="errandItemCost" v-model="errandItemCost">
            <input type="number" name="errandItemCount" v-model="errandItemCount">
        </form>
        商品{{ errandItemName }}, 値段{{ errandItemCost }}円, {{ errandItemCount }}個

        <button type="button" @click="setErandList()">set</button>
    </section>
</template>

<script>
import firebase from '../../Firebase'

export default {
    name: 'errandItem',
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
        }

    }
    
}
</script>
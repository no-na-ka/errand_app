<template>
    <section>
        {{ userId }}
        <form>
            <input type="text" name="errandItemName"  v-model="shareId">
        </form>
        共有ID: {{ shareId }}

        <button type="button" @click="setShareId()">set</button>
    </section>
</template>

<script>
import firebase from '../../Firebase'

export default {
    name: 'errandItem',
    props:['isShowProfile'],
    data() {
        return {
            userId: this.$store.state.user.uid,
            shareId: '',
        }
    },
    methods: {
        setShareId() {
            let shareIdNum = this.shareId
            let connectId = this.$store.state.user.uid

            firebase.setShareId(shareIdNum, connectId)
        }

    }
    
}
</script>
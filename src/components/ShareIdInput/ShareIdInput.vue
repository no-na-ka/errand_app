<template>
    <section>
        <div class="share_id_input-area">
            自分のID:<span>{{ userId }}</span>
            共有ID:<span>{{ showShareId }}</span>
        </div>
        <div class="share_id_input-input">
            <form>
                <input type="text" name="errandItemName" v-model="shareId">
            </form>

            <button type="button" @click="setShareId()">設定</button>
        </div>
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
            shareId: this.$store.state.shareId
        }
    },
    computed: {
        showShareId(){
            return this.$store.state.shareId
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

<style scoped>
section {
    margin-bottom: 36px;
}
.share_id_input-area {
    margin-bottom: 24px;
    font-size: 12px;
    color: #999;
}

.share_id_input-area span {
    padding-left: 12px;
    display: block;
    font-size: 14px;
    color: #333;
}

.share_id_input-input form {
    flex: 1;
}
.share_id_input-input {
    display: flex;
    align-items: center;
}

.share_id_input-input input {
    border: 0;
    border-bottom: 1px solid #ccc;
    padding: 8px 8px 4px;
    text-align: left;
    height: 36px;
    width: 100%;
}
</style>
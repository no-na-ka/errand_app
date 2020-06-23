<template>
<div id="app">
  <Header />

  <main>
    <div v-if="isSignIn">
      <section class="tab">
        <button
          type="button"
          v-if="isShowHome"
          @click="isChangeShowProfile">
            買い物りすと入れちゃう
        </button>
        
        <button
          type="button"
          v-if="isShowProfile"
          @click="isChangeShowHome">
            買い物りすと見ちゃう
        </button>
      </section>

      <Home 
        v-if="isShowHome" />
      <ErrandMenuList
        v-if="isShowHome" />

      <ErrandMenuInput
        v-if="isShowProfile" />
      <ErrandMenuEdit
        v-if="isShowProfile" />

      <HistoryList
        v-if="isShowProfile" />
    </div>

    <div v-else>
      サインインするんじゃよ
    </div>
  </main>

  <Footer />
</div>
</template>

<script>
import Home from './components/Home'
import Header from './components/Header'
import ErrandMenuInput from './components/ErrandMenu/ErrandMenuInput'
import ErrandMenuList from './components/ErrandMenu/ErrandMenuList'
import ErrandMenuEdit from './components/ErrandMenu/ErrandListEdit'
import HistoryList from './components/Historys/HistoryList'
import Footer from './components/Footer'
import firebase from './Firebase'

export default {
  name: 'App',
  data() {
    return {
      isShowHome: true,
      isShowProfile: false,
    }
  },
  created() {
    firebase.onAuth()
    firebase.onShareId()
    firebase.onShowList()
  },
  components: {
    Header,
    Home,
    ErrandMenuInput,
    ErrandMenuList,
    ErrandMenuEdit,
    HistoryList,
    Footer
  },
  computed: {
    isSignIn() {
      let SignInFlg = this.$store.state.user.uid != null
      return SignInFlg
    }
  },
  methods: {
    isChangeShowProfile() {
      this.isShowHome = false,
      this.isShowProfile = true
    },
    isChangeShowHome() {
      this.isShowHome = true,
      this.isShowProfile = false
    },
  }

}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
button {
    appearance: none;
    border: 1px solid #ddd;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
}
main {
    min-height: 88vh;
    padding: 16px;
}
.tab {
  margin-bottom: 24px;
}
input[type="number"]::-webkit-outer-spin-button, 
input[type="number"]::-webkit-inner-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
} 
input[type="number"] { 
  -moz-appearance:textfield; 
} 
</style>
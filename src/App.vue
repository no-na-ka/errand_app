<template>
  <div id="app">
    <Header />

    <main>
      <Home 
        v-if="isShowHome" />
      <ErrandMenuList
        v-if="isShowHome" />
      <button
        type="button"
        v-if="isShowHome"
        @click="isChangeShowProfile">
          買い物りすと入れちゃう
      </button>

      <ErrandMenuInput
        v-if="isShowProfile" />
      <ShareIdInput
        v-if="isShowProfile" />
      <button
        type="button"
        v-if="isShowProfile"
        @click="isChangeShowHome">
          買い物りすと見ちゃう
      </button>

    </main>
    <Footer />
  </div>
</template>

<script>
import Home from './components/Home'
import Header from './components/Header'
import ErrandMenuInput from './components/ErrandMenu/ErrandMenuInput'
import ErrandMenuList from './components/ErrandMenu/ErrandMenuList'
import ShareIdInput from './components/ShareIdInput/ShareIdInput'
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
    console.log(1)
    firebase.onAuth()
    console.log(2)
    firebase.onShareId()
    console.log(3)
    firebase.onShowList()
  },
  components: {
    Header,
    Home,
    ErrandMenuInput,
    ErrandMenuList,
    ShareIdInput,
    Footer
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

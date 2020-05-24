<template>
  <div id="app">
    <Header />

    <main>
      <Home 
        v-if="isShowHome"
        @showHome="showHome" />
      <ErrandMenuList
        v-if="isShowHome"
        @showHome="onShowHome" />
      <button
        type="button"
        v-if="isShowHome"
        @click="isChangeShowProfile">
          買い物りすと入れちゃう
      </button>

      <ErrandMenuInput
        v-if="isShowProfile"
        @showHome="showProfile" />
      <ShareIdInput
        v-if="isShowProfile"
        @showHome="onShowProfile" />
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

export default {
  name: 'App',
  data() {
    return {
      isShowHome: true,
      isShowProfile: false,
    }
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

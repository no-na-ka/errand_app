<template>
  <div id="app">
    <Header />

    <Home />
    <ErrandMenuList />

    <ErrandMenuInput />
    <ShareIdInput />

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
  components: {
    Header,
    Home,
    ErrandMenuInput,
    ErrandMenuList,
    ShareIdInput,
    Footer
  }
}
</script>

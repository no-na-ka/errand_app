<template>
  <div id="app">
    <Header />
    <Home />
    <ErrandMenuInput />
    <Footer />
  </div>
</template>

<script>
import Home from './components/Home'
import Header from './components/Header'
import ErrandMenuInput from './components/ErrandMenu/ErrandMenuInput'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    ErrandMenuInput,
    Footer
  }
}
</script>

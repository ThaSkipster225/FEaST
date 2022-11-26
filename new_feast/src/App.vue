<template>
  <NavBar></NavBar>
</template>

<script>
// import CoinForm from './components/CoinForm.vue'
import NavBar from'./components/NavbarComp.vue'

export default {
  name: 'app',
  components: {
    NavBar
  },
  data(){
    // eslint-disable-next-line
    cart: {}
  }
}
</script>

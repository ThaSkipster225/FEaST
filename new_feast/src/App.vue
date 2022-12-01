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
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart)
    }
  },
  methods: {
    addToCart (name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
    },
    removeItem (name) {
      delete this.cart[name]
    }
  }
}
</script>

<template>
  <!-- <NavBar></NavBar> -->
  <nav class="navbar sticky-top navbar-expand-lg bg-white">
    <router-link to="/"><span>Home</span></router-link>
    <router-link to="/pretzelplace">Pretzel Place</router-link>
    <router-link to="/buckstop">Buckstop</router-link>
    <router-link to="/sushi">Kazan Sushi</router-link>
    <a @click="toggleSidebar" class="top-bar-cart-link">
      <font-awesome-icon icon="fa-solid fa-cart-shopping fa-xs" />
    </a>
  </nav>

  <RouterView :addToCart="addToCart" /> <!-- Needs to be at bottom to load everything -->
  
  <SidebarComp
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :remove="removeItem"
  />
</template>

<script>
// import NavBar from'./components/NavbarComp.vue'
import SidebarComp from '@/components/SidebarComp.vue'


export default {
  name: 'app',
  components: {
    // NavBar,
    SidebarComp
  },
  data(){
    return {
      showSidebar: false,
      cart: {}
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart)
    }
  },
  methods: {
    addToCart (name, quantity, price) {
      if (!this.cart[name]) this.cart[name] = [name, 0, 0]
      this.cart[name] += quantity, price
      console.log(this.cart)
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    removeItem (name) {
      delete this.cart[name]
    }
  }
}
</script>

<template>
    <router-link to="/"><span>Home</span></router-link> |
    <router-link to="/about">About</router-link>
    

    <nav>
        <font-awesome-icon icon="fa-solid fa-cart-shopping" /><p>Cart</p>
    </nav>

    <RouterView></RouterView> <!-- Needs to be at bottom to load everything -->
</template>

<script>
export default {
  name: "NavBar",
  components: {
  }
}
</script>
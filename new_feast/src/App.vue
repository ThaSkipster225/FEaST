<template>
  <nav>
    <router-link to="/"><span>Home</span></router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <location-card-vue/>
  </nav>
  <router-view/>
</template>

<script>
// import CoinForm from './components/CoinForm.vue'

export default {
  name: 'app',
  components: {
  }
}
</script>

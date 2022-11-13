<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
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

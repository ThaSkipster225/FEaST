<template>
  <NavBar></NavBar>
</template>

<script>
import NavBar from'./components/NavbarComp.vue'

// Firestore stuff
import app from './firebaseInit';
import 'firebase/firestore'
import { getFirestore, collection, getDocs} from 'firebase/firestore';


export default {
  name: 'app',
  components: {
    NavBar
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
    addToCart (name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    removeItem (name) {
      delete this.cart[name]
    }
  },
  async mount() {
    try {
      const db = getFirestore(app)
      const querySnapshot = await getDocs(collection(db, "Restaurants"));
      console.log(querySnapshot)
      console.log('Successfully pulled from firestore')
    }
    catch(error){
      console.log('Error when retrieving from database.')
    }
  }
}
</script>

<template>
  <nav style="display: none;">
    <router-link to="/">Home</router-link>
    <router-link to="/pretzelplace">Pretzel Place</router-link>
    <router-link to="/buckstop">Buckstop</router-link>
    <router-link to="/undercaf">Undercaf</router-link>
    <router-link to="/south">South of Campus</router-link>
    <!--<router-link to="/sushi">Kazan Sushi</router-link>-->
    <a @click="toggleSidebar" class="top-bar-cart-link">
      <font-awesome-icon icon="fa-solid fa-cart-shopping fa-xs" />
    </a>
  </nav>

  <nav class="navbar sticky-top navbar-expand-lg bg-white">
        <div class="container-fluid bg-white">
          <a class="navbar-brand" href="/"><img src="@/assets/Images/FeastIcon.png" alt="Feast Logo" width=50 height=50></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
            aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
            
            <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
              <li class="nav-item">
                <button class="nav-link" aria-current="page" @click="$router.push('/')">Home</button>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#link">Link</a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#Locations" role="button"
                  aria-expanded="false">
                  Locations
                </a>
                <ul class="dropdown-menu">
                  <!-- This UL holds all of the different food locations on campus.-->
                  <li>Computer Science</li>
                  <li><button class="dropdown-item" @click="$router.push('/pretzelplace')">Fresh Twist (Pretzel Place)</button></li>
                  <li>The Cafeteria (Caf)</li>
                  <li><button class="dropdown-item" @click="$router.push('/caf')">Wynee's Bistro</button></li>
                  <li><button class="dropdown-item" @click="$router.push('/caf/#superbowls')">Superbowls</button></li>
                  <li><button class="dropdown-item" @click="$router.push('/caf/#sushi')">Sushi Place</button></li>
                  <li><button class="dropdown-item" @click="$router.push('/caf/#steakNshake')">Steak and Shake</button></li>
                  <li>Undercaf</li>
                  <li><button class="dropdown-item" @click="$router.push('/undercaf/#boarshead')">Boar's Head Deli</button></li>
                  <li><button class="dropdown-item" @click="$router.push('/undercaf/#freshens')">Freshen's</button></li>
                  <li>Central Campus</li>
                  <li><button class="dropdown-item" @click="$router.push('/buckstop')">Buckstop</button></li>
                  <li>South Side of Campus</li>
                  <li><button class="dropdown-item" @click="$router.push('/south/#happyplace')">Happy Place</button></li>
                  <li><button class="dropdown-item" @click="$router.push('/south/#mocketship')">Mocketship</button></li>
                  <li><button class="dropdown-item" @click="$router.push('/south/#tutus')">Tutu's Cyber Cafe</button></li>
                  <li><button class="dropdown-item" @click="$router.push('/south/#grillmaster')">Grill Master</button></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#AboutUs">About Us</a>
              </li>
              
            <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#LoginModal">
            Log In
            </button>
            
            <button @click="toggleSidebar" type="button" class="btn btn-primary btn-sm">
              <font-awesome-icon icon="fa-solid fa-cart-shopping fa-xs" />
              Cart ({{cart.length}})
            </button>
            <!--<button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#RegisterModal">-->
              <!--Register-->
            <!--</button>-->
            </ul>
          </div>
        </div>
      </nav>

      <LoginModalVue></LoginModalVue>
      <RegisterModalVue></RegisterModalVue>

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
import SidebarComp from '@/components/SidebarComp.vue';
import LoginModalVue from '@/components/LoginModal.vue';
import RegisterModalVue from '@/components/RegisterModal.vue';


export default {
  name: 'app',
  components: {
    // NavBar,
    SidebarComp,
    LoginModalVue,
    RegisterModalVue
  },
  data(){
    return {
      showSidebar: false,
      cart: [],
      quantity: 1
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart)
    }
  },
  methods: {
    addToCart (name, price, quantity) {
      if(!this.cart[name]) this.cart[name] = {name, price, quantity}
      this.cart[name].quantity += 1
      console.log(this.cart)
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
      console.log(this.showSidebar)
    },
    removeItem (name) {
      delete this.cart[name]
    }
  }
}
</script>

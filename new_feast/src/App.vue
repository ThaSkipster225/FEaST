<template>
  <nav style="display:none;">
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
                <a class="nav-link" aria-current="page" href="/#Home">Home</a>
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
                  <li><a class="dropdown-item" href="/pretzelplace">Fresh Twist (Pretzel Place)</a></li>
                  <li>The Cafeteria (Caf)</li>
                  <li><a class="dropdown-item" href="/caf">Wynee's Bistro</a></li>
                  <li><a class="dropdown-item" href="/caf">Superbowls</a></li>
                  <li><a class="dropdown-item" href="/caf">Sushi Place</a></li>
                  <li><a class="dropdown-item" href="/caf">Steak and Shake</a></li>
                  <li>Undercaf</li>
                  <li><a class="dropdown-item" href="/undercaf">Boar's Head Deli</a></li>
                  <li><a class="dropdown-item" href="/undercaf">Freshen's</a></li>
                  <li>Central Campus</li>
                  <li><a class="dropdown-item" href="/buckstop">Buckstop</a></li>
                  <li>South Side of Campus</li>
                  <li><a class="dropdown-item" href="/south">Happy Place</a></li>
                  <li><a class="dropdown-item" href="/south">Mocketship</a></li>
                  <li><a class="dropdown-item" href="/south">Tutu's Cyber Cafe</a></li>
                  <li><a class="dropdown-item" href="/south">Grill Master</a></li>
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
              Cart
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

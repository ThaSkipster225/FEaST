<script>

// Imports

import ItemCard from '@/components/ItemCard.vue';
import app from '../firebaseInit'
import {getFirestore, query, collection, getDocs} from 'firebase/firestore'

// Rest of script tag
const db = getFirestore(app)

// Buckstop Firestore ID 4eSPxsdAIQ1yvrBh2wba

// Cheese slice Firestore Document ID 3aNUlC16pl356rbiXlKZ

export default {
    name: "SouthView",
    components: {
        ItemCard
    },
    data() {
      return {
        mealdeal: [],
        sides: [],
      }
    },
    created () {
      this.getHappyPlace()
    },
    methods: {
      async getHappyPlace() {
        
        const queryMealDeal = await getDocs(query(collection(db, "/Restaurants/OvKTUmOHLuSrwTOaRirv/Snake Bite Meal Deal")));
        const querySides = await getDocs(query(collection(db, "/Restaurants/OvKTUmOHLuSrwTOaRirv/Ala Carte Sides and More")));
        
        // Add each doc to 'mealdeal' array
        queryMealDeal.forEach((doc) => {
          this.mealdeal.push(doc.data())
        });
        // Add each doc to 'sides' array
        querySides.forEach((doc) => {
          this.sides.push(doc.data())
        });


      },
    },
}
</script>

<template>
  <div class="undercaf">
    <h1>The Undercaf</h1>
    <nav class="CafNav navbar fixed-bottom" style="background-color: white;">
      <ul>
        <li><a href="#happyplace">Happy Place BBQ</a></li>
      </ul>
    </nav>
    <div id="happyplace">
      <h2>Happy Place BBQ</h2>
      <div class="row">
        <h3>Snake Bite Meal Deal</h3>
        <ItemCard v-for="value in mealdeal" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        />
        <h3>Ala Carte Sides and More</h3>
        <ItemCard v-for="value in sides" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        />
      </div>
    </div>
    <div id="mocketship">
      <h2>Mocketship</h2>
      <div class="row">
        <h3>Craters</h3>
        <ItemCard v-for="value in mealdeal" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        />
      </div>
    </div>
    
  </div>
</template>

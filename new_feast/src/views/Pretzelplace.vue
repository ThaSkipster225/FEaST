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
    name: "AboutView",
    props: ['addToCart'],
    components: {
        ItemCard
    },
    data() {
      return {
        Pretzels: [],
        Flatbreads: [],
        Breakfast: [],
        Beverages: []
      }
    },
    created () {
      this.getFood()
    },
    methods: {
      async getFood() {

        // Get pretzels
        const querySnap = await getDocs(query(collection(db, "/Restaurants/e0EXLCdzkgtsYBBfBOXn/Pretzels")));
        // Get Flatbreads
        const queryFlat = await getDocs(query(collection(db, "/Restaurants/e0EXLCdzkgtsYBBfBOXn/Flatbreads")));
        // Get Breakfast Sandwiches
        const queryBreak = await getDocs(query(collection(db, "/Restaurants/e0EXLCdzkgtsYBBfBOXn/Breakfast Sandwiches")));
        // Get Beverages
        const queryBevs = await getDocs(query(collection(db, "/Restaurants/e0EXLCdzkgtsYBBfBOXn/Beverages")));

        // Add each Pretzel doc to 'Pretzels' array
        querySnap.forEach((doc) => {
          this.Pretzels.push(doc.data())
        });

        // Add each Flatbread doc to 'Flatbread' array
        queryFlat.forEach((doc) => {
          this.Flatbreads.push(doc.data())
        });

        // Add each Breakfast Sandwich doc to 'Breakfast' array
        queryBreak.forEach((doc) => {
          this.Breakfast.push(doc.data())
        });

        // Add each Beverage doc to 'Beverages' array
        queryBevs.forEach((doc) => {
          this.Beverages.push(doc.data())
        });

      }
    },
}
</script>

<template>
  <div class="PretzelPlace">
    <h1>The Pretzel Place</h1>
    <h2>Pretzels</h2>
    <div class="row">
      <ItemCard v-for="value in Pretzels" :key="value.Name"
      :name="value.Name"
      :price="value.Price"
      :addToCart="addToCart"
      />
    </div>

    <h2>Flatbreads</h2>
    <div class="row">
      <ItemCard v-for="value in Flatbreads" :key="value.Name"
      :name="value.Name"
      :price="value.Price"
      :addToCart="addToCart"
      />
    </div>

    <h2>Breakfast Sandwiches</h2>
    <div class="row">
      <ItemCard v-for="value in Breakfast" :key="value.Name"
      :name="value.Name"
      :price="value.Price"
      :addToCart="addToCart"
      />
    </div>

    <h2>Beverages</h2>
    <div class="row">
      <ItemCard v-for="value in Beverages" :key="value.Name"
      :name="value.Name"
      :price="value.Price"
      :addToCart="addToCart"
      />
    </div>
  </div>
</template>

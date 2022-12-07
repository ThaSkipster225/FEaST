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
    name: "UndercafView",
    components: {
        ItemCard
    },
    data() {
      return {
        breakfast: [],
        hotsand: [],
        coldsand: [],
        sides: [],
        beverages: [],
        smoothies: [],
        yogurt: []
      }
    },
    created () {
      this.getBoarsHead(),
      this.getFreshens()
    },
    methods: {
      async getBoarsHead() {
        
        const queryBreakfast = await getDocs(query(collection(db, "/Restaurants/kxfVY6tLa4RmO7B7PIbX/Breakfast")));
        const queryHotSand = await getDocs(query(collection(db, "/Restaurants/kxfVY6tLa4RmO7B7PIbX/Hot Sandwiches & Wraps")));
        const queryColdSand = await getDocs(query(collection(db, "/Restaurants/kxfVY6tLa4RmO7B7PIbX/Cold Sandwiches")));
        const querySides = await getDocs(query(collection(db, "/Restaurants/kxfVY6tLa4RmO7B7PIbX/Sides")));
        const queryBeverages = await getDocs(query(collection(db, "/Restaurants/kxfVY6tLa4RmO7B7PIbX/Beverages")));
        // Add each doc to 'burgers' array
        queryBreakfast.forEach((doc) => {
          this.breakfast.push(doc.data())
        });

        queryHotSand.forEach((doc) => {
          this.hotsand.push(doc.data())
        });
        
        queryColdSand.forEach((doc) => {
          this.coldsand.push(doc.data())
        });
        
        querySides.forEach((doc) => {
          this.sides.push(doc.data())
        });
        
        queryBeverages.forEach((doc) => {
          this.beverages.push(doc.data())
        });

      },
      async getFreshens() {
        const querySmoothies = await getDocs(query(collection(db, "/Restaurants/Nlwh20wpI9D1gvV8QScs/Smoothies")));
        const queryYogurt = await getDocs(query(collection(db, "/Restaurants/Nlwh20wpI9D1gvV8QScs/Yogurt")));

        querySmoothies.forEach((doc) => {
          this.smoothies.push(doc.data())
        });
        
        queryYogurt.forEach((doc) => {
          this.yogurt.push(doc.data())
        });
      }
    },
}
</script>

<template>
  <div class="undercaf">
    <h1>The Undercaf</h1>
    <nav class="CafNav navbar fixed-bottom" style="background-color: white;">
      <ul>
        <li><a href="#boarshead">Boar's Head Deli</a></li>
        <li><a href="#freshens">Freshen's</a></li>
      </ul>
    </nav>
    <div id="boarshead">
      <h2>Boar's Head Deli</h2>
      <div class="row">
        <h3>Breakfast</h3>
        <ItemCard v-for="value in breakfast" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        />
        <h3>Hot Sandwiches & Wraps</h3>
        <ItemCard v-for="value in hotsand" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        />
        <h3>Cold Sandwiches</h3>
        <ItemCard v-for="value in coldsand" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        />
        <h3>Sides</h3>
        <ItemCard v-for="value in sides" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        />
        <h3>Beverages</h3>
        <ItemCard v-for="value in beverages" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        />
      </div>
    </div>
    <div id="freshens">
      <h2>Freshen's</h2>
      <div class="row">
        <h3>Smoothies</h3>
        <ItemCard v-for="value in smoothies" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        />
        <h3>Yogurt</h3>
        <ItemCard v-for="value in yogurt" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        />
      </div>
    </div>
  </div>
</template>

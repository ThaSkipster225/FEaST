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
        slices: [],
        pizzas: [],
        breakfasts: [],
        grilled: [],
        sides: [],
        beverages: []
      }
    },
    created () {
      this.getPizza()
      this.getPies()
      this.getBreakfasts()
      this.getLunches()
      this.getSides()
      this.getBeverages()
    },
    methods: {
      async getPizza() {
        // query to get all docs in 'By The Slice' collection
        // const querySnap = await getDocs(query(collectionReference(db, 'Restaurants')));

        const querySnap = await getDocs(query(collection(db, "/Restaurants/4eSPxsdAIQlyvrBh2wbA/By the Slice")));

        // Add each doc to 'slices' array
        querySnap.forEach((doc) => {
          this.slices.push(doc.data())
        //   console.log(doc.data())
        })
      
      },

      async getPies() {
        // query to get all docs in 'By The Slice' collection
        // const querySnap = await getDocs(query(collectionReference(db, 'Restaurants')));

        const querySnap = await getDocs(query(collection(db, "/Restaurants/4eSPxsdAIQlyvrBh2wbA/Whole Pizza")));

        // Add each doc to 'slices' array
        querySnap.forEach((doc) => {
          this.pizzas.push(doc.data())
          // console.log(doc.data())
        })
      
      },

      async getBreakfasts() {
        // query to get all docs in 'By The Slice' collection
        // const querySnap = await getDocs(query(collectionReference(db, 'Restaurants')));

        const querySnap = await getDocs(query(collection(db, "/Restaurants/4eSPxsdAIQlyvrBh2wbA/Breakfast")));

        // Add each doc to 'slices' array
        querySnap.forEach((doc) => {
          this.breakfasts.push(doc.data())
          // console.log(doc.data())
        })
      
      },

      async getLunches() {
        // query to get all docs in 'By The Slice' collection
        // const querySnap = await getDocs(query(collectionReference(db, 'Restaurants')));

        const querySnap = await getDocs(query(collection(db, "/Restaurants/4eSPxsdAIQlyvrBh2wbA/Lunch")));

        // Add each doc to 'slices' array
        querySnap.forEach((doc) => {
          this.grilled.push(doc.data())
          // console.log(doc.data())
        })
      
      },

      async getSides() {
        // query to get all docs in 'By The Slice' collection
        // const querySnap = await getDocs(query(collectionReference(db, 'Restaurants')));

        const querySnap = await getDocs(query(collection(db, "/Restaurants/4eSPxsdAIQlyvrBh2wbA/Sides and Extras")));

        // Add each doc to 'slices' array
        querySnap.forEach((doc) => {
          this.sides.push(doc.data())
          // console.log(doc.data())
        })
      
      },

      async getBeverages() {
        // query to get all docs in 'By The Slice' collection
        // const querySnap = await getDocs(query(collectionReference(db, 'Restaurants')));

        const querySnap = await getDocs(query(collection(db, "/Restaurants/4eSPxsdAIQlyvrBh2wbA/Beverages")));

        // Add each doc to 'slices' array
        querySnap.forEach((doc) => {
          this.beverages.push(doc.data())
          // console.log(doc.data())
        })
      
      }
    },
}
</script>

<template>
  <div class="Buckstop">
    <h1>Buckstop</h1>
    <nav class="CafNav navbar fixed-bottom" style="background-color: white;">
      <ul>
        <li><a href="#buckstop">Buckstop</a></li>
      </ul>
    </nav>
    <div id="buckstop">
      <h2>By The Slice</h2>
      <div class="row">
          <ItemCard v-for="item in slices" :key="item.Name"
          :name="item.Name"
          :price="item.Price"
          :addToCart="addToCart"
          />
      </div>
      <h2>Whole Pies</h2>
      <div class="row">
          <ItemCard v-for="value in pizzas" :key="value.Name"
          :name="value.Name"
          :price="value.Price"
          />
      </div>
      <h2>Breakfast</h2>
      <div class="row">
          <ItemCard v-for="value in breakfasts" :key="value.Name"
          :name="value.Name"
          :price="value.Price"
          />
      </div>
      <h2>Lunch from the Grill</h2>
      <div class="row">
          <ItemCard v-for="value in grilled" :key="value.Name"
          :name="value.Name"
          :price="value.Price"
          />
      </div>
      <h2>Sides and Extra Fixings</h2>
      <div class="row">
          <ItemCard v-for="value in sides" :key="value.Name"
          :name="value.Name"
          :price="value.Price"
          />
      </div>
      <h2>Beverages</h2>
      <div class="row">
          <ItemCard v-for="value in beverages" :key="value.Name"
          :name="value.Name"
          :price="value.Price"
          />
      </div>
    </div>
  </div>
</template>

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
    name: "CafView",
    props: ['addToCart'],
    components: {
        ItemCard
    },
    data() {
      return {
        rolls: [],
        burgers: [],
        salads: [],
        sides: [],
        specials: [],
        milkshakes: [],
        drinks: []
      }
    },
    created () {
      this.getSushi(),
      this.getSteak()
    },
    methods: {
      async getSushi() {
        // query to get all docs in 'By The Slice' collection
        // const querySnap = await getDocs(query(collectionReference(db, 'Restaurants')));

        const querySnap = await getDocs(query(collection(db, "/Restaurants/EfqH9lNeu33Ld7ombJP1/Sushi")));

        // Add each doc to 'slices' array
        querySnap.forEach((doc) => {
          this.rolls.push(doc.data())
        })
      
      },
      async getSteak() {
        
        const queryBurgers = await getDocs(query(collection(db, "/Restaurants/Pg8t8Lcu99BUL2K2uqTe/Steakburgers")));
        const querySalads = await getDocs(query(collection(db, "/Restaurants/Pg8t8Lcu99BUL2K2uqTe/Salads")));
        const querySides = await getDocs(query(collection(db, "/Restaurants/Pg8t8Lcu99BUL2K2uqTe/Sides")));
        const querySpecials = await getDocs(query(collection(db, "/Restaurants/Pg8t8Lcu99BUL2K2uqTe/Other Specialties (Served with Fries)")));
        const queryMilkshakes = await getDocs(query(collection(db, "/Restaurants/Pg8t8Lcu99BUL2K2uqTe/Milkshakes")));
        const queryDrinks = await getDocs(query(collection(db, "/Restaurants/Pg8t8Lcu99BUL2K2uqTe/Drinks")));

        // Add each doc to 'burgers' array
        queryBurgers.forEach((doc) => {
          this.burgers.push(doc.data())
        });

        querySalads.forEach((doc) => {
          this.salads.push(doc.data())
        });
        
        querySides.forEach((doc) => {
          this.sides.push(doc.data())
        });
        
        querySpecials.forEach((doc) => {
          this.specials.push(doc.data())
        });
        
        queryMilkshakes.forEach((doc) => {
          this.milkshakes.push(doc.data())
        });
        
        queryDrinks.forEach((doc) => {
          this.drinks.push(doc.data())
        });

      }
    },
}
</script>

<template>
  <div class="caf">
    <h1>The Caf</h1>
    <nav class="CafNav navbar fixed-bottom" style="background-color: white;">
      <ul>
        <li><a href="#sushi">Kazan Sushi</a></li>
        <li><a href="#steakNshake">Steak N Shake</a></li>
        <li><a href="#superbowls">Super Bowls</a></li>
      </ul>
    </nav>
    <div id="sushi">
      <h2>Kazan Sushi</h2>
      <div class="row">
        <ItemCard v-for="value in rolls" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        :addToCart="addToCart"
        />
      </div>
    </div>
    <div id="steakNshake">
      <h2>Steak N Shake</h2>
      <div class="row">
        <h3>Steakburgers</h3>
        <ItemCard v-for="value in burgers" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        :addToCart="addToCart"
        />
        <h3>Salads</h3>
        <ItemCard v-for="value in salads" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        :addToCart="addToCart"
        />
        <h3>Sides</h3>
        <ItemCard v-for="value in sides" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        :addToCart="addToCart"
        />
        <h3>Other Specialties</h3>
        <ItemCard v-for="value in specials" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        :addToCart="addToCart"
        />
        <h3>Milkshakes</h3>
        <ItemCard v-for="value in milkshakes" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        :addToCart="addToCart"
        />
        <h3>Drinks</h3>
        <ItemCard v-for="value in drinks" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        :addToCart="addToCart"
        />
      </div>
    </div>
    <div id="superbowls">
      <h2>Super Bowls - WIP</h2>
      <div class="row">
        <h3>Bases</h3>
        <h3>Proteins</h3>
        <h3>Veggies</h3>
        <h3>Add-Ons</h3>
        <h3>Sauces</h3>
      </div>
    </div>
  </div>
</template>

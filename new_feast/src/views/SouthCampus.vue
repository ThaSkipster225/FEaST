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
    components: {
        ItemCard
    },
    data() {
      return {
        AlaCarte: [],
        SnakeBites: [],
        Craters: [],
        Cones: [],
        Fuel: [],
        Salads: [],
        Takeoffs: [],
        Downs: []
      }
    },
    created () {
      this.getFood()
    },
    methods: {
      async getFood() {

        // Get Ala Carte Items
        const querySnap = await getDocs(query(collection(db, "/Restaurants/OvKTUmOHLuSrwTOaRirv/Ala Carte Sides and More")));
        // Get Get Snake Bite Meals
        const queryFlat = await getDocs(query(collection(db, "/Restaurants/OvKTUmOHLuSrwTOaRirv/Snake Bite Meal Deal")));
        // Get Craters
        const queryCrater = await getDocs(query(collection(db, "/Restaurants/QWTJSoV1l1994PCeLjQK/Craters")));
        // Get Rocket Cones
        const queryCone = await getDocs(query(collection(db, "/Restaurants/QWTJSoV1l1994PCeLjQK/Rocket Cones")));
        // Get Craters
        const queryFuel = await getDocs(query(collection(db, "/Restaurants/QWTJSoV1l1994PCeLjQK/Rocket Fuel")));
        // Get Rocket Cones
        const querySalad = await getDocs(query(collection(db, "/Restaurants/QWTJSoV1l1994PCeLjQK/Shaker Salads")));
        // Get Craters
        const queryTakeoff = await getDocs(query(collection(db, "/Restaurants/QWTJSoV1l1994PCeLjQK/Smooth Takeoff")));
        // Get Rocket Cones
        const queryDown = await getDocs(query(collection(db, "/Restaurants/QWTJSoV1l1994PCeLjQK/Splash Down")));


        // Add each Pretzel doc to 'Pretzels' array
        querySnap.forEach((doc) => {
          this.AlaCarte.push(doc.data())
        });

        // Add each Flatbread doc to 'Flatbread' array
        queryFlat.forEach((doc) => {
          this.SnakeBites.push(doc.data())
        });

        // Add each Breakfast Sandwich doc to 'Breakfast' array
        queryCrater.forEach((doc) => {
          this.Craters.push(doc.data())
        });

        // Add each Beverage doc to 'Beverages' array
        queryCone.forEach((doc) => {
          this.Cones.push(doc.data())
        });

        // Add each Breakfast Sandwich doc to 'Breakfast' array
        queryFuel.forEach((doc) => {
          this.Fuel.push(doc.data())
        });

        // Add each Beverage doc to 'Beverages' array
        querySalad.forEach((doc) => {
          this.Salads.push(doc.data())
        });

        // Add each Breakfast Sandwich doc to 'Breakfast' array
        queryTakeoff.forEach((doc) => {
          this.Takeoffs.push(doc.data())
        });

        // Add each Beverage doc to 'Beverages' array
        queryDown.forEach((doc) => {
          this.Downs.push(doc.data())
        });

      }
    },
}
</script>

<template>
    <div class="SouthCampus">
        <h1>The Happy Place</h1>
        <nav class="CafNav navbar fixed-bottom" style="background-color: white;">
      <ul>
        <li><a href="#happyplace">The Happy Place</a></li>
        <li><a href="#mocketship">Mocketships</a></li>
      </ul>
    </nav>
            <h2>Ala Carte Menu</h2>
                <div class="row">
                    <ItemCard v-for="value in AlaCarte" :key="value.Name"
                        :name="value.Name"
                        :price="value.Price"
                    />
                </div>

            <h2>Snake Bite Meal Deals</h2>
                <div class="row">
                    <ItemCard v-for="value in SnakeBites" :key="value.Name"
                        :name="value.Name"
                        :price="value.Price"
                    />
                </div>
    </div>

    <div class="Mocketships">
        <h1>Mocketships</h1>
            <h2>Craters</h2>
                <div class="row">
                    <ItemCard v-for="value in Craters" :key="value.Name"
                        :name="value.Name"
                        :price="value.Price"
                    />
                </div>

            <h2>Rocket Cones</h2>
                <div class="row">
                    <ItemCard v-for="value in Cones" :key="value.Name"
                        :name="value.Name"
                        :price="value.Price"
                    />
                </div>

                <h2>Rocket Fuel</h2>
                <div class="row">
                    <ItemCard v-for="value in Fuel" :key="value.Name"
                        :name="value.Name"
                        :price="value.Price"
                    />
                </div>

            <h2>Shaker Salads</h2>
                <div class="row">
                    <ItemCard v-for="value in Salads" :key="value.Name"
                        :name="value.Name"
                        :price="value.Price"
                    />
                </div>

                <h2>Smooth Takeoffs</h2>
                <div class="row">
                    <ItemCard v-for="value in Takeoffs" :key="value.Name"
                        :name="value.Name"
                        :price="value.Price"
                    />
                </div>

            <h2>Splash Downs</h2>
                <div class="row">
                    <ItemCard v-for="value in Downs" :key="value.Name"
                        :name="value.Name"
                        :price="value.Price"
                    />
                </div>
    </div>
    
</template>
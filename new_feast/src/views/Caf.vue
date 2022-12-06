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
    components: {
        ItemCard
    },
    data() {
      return {
        rolls: [],
        burgers: [],
        salads: [],
        sides: []
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

      }
    },
}
</script>

<template>
  <div class="caf">
    <h1>The Caf</h1>
    <div class="sushi">
      <h2>Kazan Sushi</h2>
      <div class="row">
        <ItemCard v-for="value in rolls" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        />
      </div>
    </div>
    <div class="steakNshake">
      <h2>Steak N Shake</h2>
      <div class="row">
        <h3>Steakburgers</h3>
        <ItemCard v-for="value in burgers" :key="value.Name"
        :name="value.Name"
        :price="value.Price"
        />
      </div>
    </div>
  </div>
</template>

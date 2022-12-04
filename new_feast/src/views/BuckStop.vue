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
        slices: []
      }
    },
    created () {
      this.getPizza()
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
      
      }
    },
}
</script>

<template>
  <div class="about">
    <h1>By The Slice</h1>
    <ItemCard v-for="value in slices" :key="value.Name"
    :name="value.Name"
    :price="value.Price"
    :addToCart="addToCart"
    />
  </div>
</template>

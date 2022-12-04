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
    name: "SushiView",
    components: {
        ItemCard
    },
    data() {
      return {
        rolls: []
      }
    },
    created () {
      this.getSushi()
    },
    methods: {
      async getSushi() {
        // query to get all docs in 'By The Slice' collection
        // const querySnap = await getDocs(query(collectionReference(db, 'Restaurants')));

        const querySnap = await getDocs(query(collection(db, "/Restaurants/EfqH9lNeu33Ld7ombJP1/Sushi")));

        // Add each doc to 'slices' array
        querySnap.forEach((doc) => {
          this.slices.push(doc.data())
          console.log(doc.data())
        })
      
      }
    },
}
</script>

<template>
  <div class="about">
    <h1>This is an about page, which is being used to test out features</h1>
    <ItemCard
    :name="'Pretzel Bites'"
    :price="5.79"/>
    <br />
    <ItemCard v-for="value in slices" :key="value.Name"
    :name="value.Name"
    :price="value.Price"
    />
  </div>
</template>

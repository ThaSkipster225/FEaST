<script>

// import app from '../firebaseInit';
// import 'firebase/firestore'
// import { getFirestore, collection, getDocs} from 'firebase/firestore';

// import { onBeforeMount } from 'vue';

// const db = getFirestore(app)

// Solves the problem of having to use Suspense
// onBeforeMount ( async() => {
//   const querySnapshot = await getDocs(collection(db, "Restaurants"));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.data().Location);
//   })
// })

// Old Try catch for 'Fetching' data
// try{
//   const querySnapshot = await getDocs(collection(db, "Restaurants"))
//   console.log(querySnapshot)
//   console.log('Data got gotten')
// } catch (error){
//   console.log(error)
// }

// Imports

import ItemCard from '@/components/ItemCard.vue';
import app from '../firebaseInit'
import {getFirestore, doc, getDoc} from 'firebase/firestore'

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
        name: '',
        price: ''
      }
    },
    created () {
      this.getPizza()
    },
    methods: {
      async getPizza() {
        const docSnap = await getDoc(doc(db, 'By The Slice', 'Cheese'))

        if (docSnap.exists()){
          console.log(docSnap.data())
        } else {
          console.log('Document does not exist')
        }
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
    <!-- eslint-disable-next-line -->
    <ItemCard v-for="value in ByTheSlice"
    :name="value.Name"
    :price="value.Price"
    />
  </div>
</template>

  <!-- <template>
    <Suspense>
      <template #Default>
      <div class="about">
        <h1>This is an about page, which is being used to test out features</h1>
        <ItemCard
        :name="'Pretzel Bites'"
        :price="'5.79'"/>
      </div>
      </template>
      <template #Fallback>
        <h1> Test </h1>
      </template>
    </Suspense>
  </template> -->

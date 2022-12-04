<script setup>
// Imports for components used in view


//Other imports
// import { ref } from 'vue';
// import {useRouter} from 'vue-router';
import app from '../firebaseInit';
import 'firebase/firestore'
// eslint-disable-next-line
import { getFirestore, getDocs, query, collection, doc, getDoc, ListCollections } from 'firebase/firestore';
import { onMounted } from 'vue';
import ItemCard from '@/components/ItemCard.vue';

// Reference to Firestore       
const db = getFirestore(app)

const rests = collection(db, "Restaurants")
console.log(rests)

const Buckstop = doc(db, "Restaurants", "4eSPxsdAIQ1yvrBh2wba")
console.log('Buckstop', Buckstop)

Buckstop.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
})

onMounted( async() => {
    const ByTheSlice = Buckstop.getDocs()
    console.log(ByTheSlice)
})




// Test to see how to use v-for
// const test = [{name: "Test Name 1", price: 2.99}, {name: "Test Name 2", price: 3.99}]

// onMounted( async() => {
//     const slices = query(collectionGroup(db, 'By the Slice'));
//     const q1 = await getDocs(slices);
//     q1.forEach((doc) => {
//         console.log(doc.id, ' => ', doc.data());
//     });

//     const wholePizza = query(collectionGroup(db, 'Whole Pizza'));
//     const q2 = await getDocs(wholePizza);
//     q2.forEach((doc) => {
//         console.log(doc.id, ' => ', doc.data());
//     });

//     const sides = query(collectionGroup(db, 'Sides and Extras'));
//     const q3 = await getDocs(sides);
//     q3.forEach((doc) => {
//         console.log(doc.id, ' => ', doc.data());
//     });
// });


// const querySnapshot = await getDocs(collection(db, "Restaurants"));
// querySnapshot.forEach((doc) => {
//     console.log(doc.data());
//     // const data = {
//     //     Locations: 
//     // }
// });

</script>

<template>

    <h1>Testing</h1>
    
    <!-- eslint-disable-next-line -->
    <ItemCard v-for="value in ByTheSlices"
    :name="value.name"
    :price="1.99"
    />

    <h1> Test Section </h1>
    <!--  -->
    
</template>
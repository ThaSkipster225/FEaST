<script setup>
// Imports for components used in view


//Other imports
// import { ref } from 'vue';
// import {useRouter} from 'vue-router';
import app from '../firebaseInit';
import 'firebase/firestore'
import { getFirestore, getDocs, query, collectionGroup} from 'firebase/firestore';
import { onBeforeMount } from 'vue';

        // Reference to Firestore       
const db = getFirestore(app)

onBeforeMount( async() => {
    const slices = query(collectionGroup(db, 'By the Slice'));
    const q1 = await getDocs(slices);
    q1.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
    });

    const wholePizza = query(collectionGroup(db, 'Whole Pizza'));
    const q2 = await getDocs(wholePizza);
    q2.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
    });

    const sides = query(collectionGroup(db, 'Sides and Extras'));
    const q3 = await getDocs(sides);
    q3.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
    });
});





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
    
</template>
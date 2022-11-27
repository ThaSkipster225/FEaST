<script setup>
// Imports for components used in view


//Other imports
// import { ref } from 'vue';
// import {useRouter} from 'vue-router';
import app from '../firebaseInit';
import 'firebase/firestore'
import { getFirestore, collection, getDocs} from 'firebase/firestore';

        // Reference to Firestore       
const db = getFirestore(app)

const querySnapshot = await getDocs(collection(db, "Restaurants"));
querySnapshot.forEach((doc) => {
    console.log(doc.data().Location);
    // const data = {

    // }
});

</script>

<template>

    <h1>Testing</h1>
    
</template>
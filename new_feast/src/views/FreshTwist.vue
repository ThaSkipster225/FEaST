<!-- <script>
// Imports for components used in view
import ItemCard from '@/components/ItemCard.vue'

//Other imports
import { ref } from 'vue';
import {useRouter} from 'vue-router';
import db from '../firebaseInit'
import { getFirestore } from 'firebase/app';
import { query, collection, getDocs } from 'firebase/firestore'

export default {
    setup(){
        const db = getFirestore(firebaseConfig)
    },
    name: "FreshTwist",
    components:{
        ItemCard
    }
    
}
</script> -->

<template>
<ItemCard></ItemCard>
</template>
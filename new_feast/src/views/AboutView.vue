<script>

import ItemCard from '@/components/ItemCard.vue';

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

// 
export default {
    name: "AboutView",
    components: {
        ItemCard
    }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page, which is being used to test out features</h1>
    <ItemCard
    :name="'Pretzel Bites'"
    :price="5.79"/>
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

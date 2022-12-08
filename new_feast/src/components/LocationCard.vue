<!-- Location Component - The card that pops up on the home page, is it clickable and gives you some info on hover about the location. -->
<template>
  <div class="col-lg-3 col-sm-6">
    <div class="food-location">
      <h3>{{ FoodLoc }}</h3>
      <button @click="$router.push(ActiveLink)"><img :src="ImageString" alt="FoodLoc" class="w-100" />
      <div class="location-overlay">
        <div>
          <h3>{{ FoodLoc }}</h3>
          <h6>{{ LocDesc }}</h6>
        </div>
      </div>
    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationCard',
  props: ["FoodLoc", "ImageString", "LocDesc", "ActiveLink"]
  
}
</script>

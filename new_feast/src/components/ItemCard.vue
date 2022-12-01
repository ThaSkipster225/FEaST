<template>
    <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ props.name }}</h5>
                <img src="Images/FeastIcon.png" alt="" class="w-25">
                <p class="card-text">Get your fill with these bite sized pretzels stuffed with mozarella cheese.</p>
                <p class="card-text text-end">${{ props.price }}</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
</template>

<script setup>

import defineProps from "vue";

const props = defineProps({
    name: String, 
    price: Number
})
</script>
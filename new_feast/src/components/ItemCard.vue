<template>
    <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <img src="../assets/Images/Food.jpg" alt="Test Image" class="">
                <br/>
                <p class="card-text description">{{ name }}.</p>
                <p class="card-text price text-end">${{ price }}</p>
                <br/>
                <br/>
                <!-- eslint-disable-next-line -->
                <button @click="addToCart(name, price, 1)" class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
</template>

<script>

export default {
  name: 'ItemCard',
  props: ['name', 'price', 'quantity', 'desc', 'addToCart'],
}
</script>

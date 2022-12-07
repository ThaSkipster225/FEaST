<template>
    <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <img src="../assets/Images/FeastIcon.png" alt="Test Image" class="w-25">
                <br/>
                <p class="card-text description">{{ name }}.</p>
                <!-- <select name="quantity" id="quantity">
                  <option value=0>0</option>
                  <option value=1>1</option>
                  <option value=2>2</option>
                  <option value=3>3</option>
                  <option value=4>4</option>
                  <option value=5>5</option>
                </select> -->
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

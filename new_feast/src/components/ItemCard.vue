<template>
    <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <img src="../assets/Images/FeastIcon.png" alt="Test Image" class="w-25">
                <p class="card-text">{{ name }} are super good</p>
                <select name="quantity" id="quantity">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <p class="card-text text-end">${{ price }}</p>
                <button @click="addToCart(name, quantity, price)" class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
</template>

<script>

export default {
  name: 'ItemCard',
  props: ['name', 'price', 'desc', 'addToCart']
}
</script>
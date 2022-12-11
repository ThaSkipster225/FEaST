<template>
    <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <img src="../assets/Images/FeastIcon.png" alt="Test Image" class="w-25">
                <br/>
                <p class="card-text description">{{ name }}.</p>
                <select name="quantity" id="quantity">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <p class="card-text price text-end">${{ price }}</p>
                <br/>
                <br/>
                <button @click="addToCart(name, quantity, price)" class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
</template>

<script>

export default {
  name: 'SuperBowlCard',
  props: ['grain', 'vegetable', 'protein', 'sauce', 'addonone', 'addontwo', 'price', 'desc', 'addToCart']
}
</script>
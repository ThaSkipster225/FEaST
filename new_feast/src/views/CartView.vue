<script>

import CartComp from '../components/CartComp.vue'

export default{
    name: 'CartView',
    props: ['cart', 'remove', 'addToCart', 'incrQuan', 'decrQuan', 'check'],
    components: {
        CartComp
    },
    methods: {
        calculateTotal () {
            let total = 0;
            for (let i = 0; i < this.cart.length; i++){
                total += (this.cart[i].price * this.cart[i].quantity)
            }
            return total.toFixed(2)
        }
    }
}
</script>

<template>
    <h1>Cart</h1>
    <!-- <table v-if="(this.cart.length > 0)" class="cart-table">
        <thead class="cart-title">
            <tr>
                <th><span>Product</span></th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody class="cart-body">
            <tr v-for="item in cart" :key="item.name" class="cart-body">
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.quantity}}</td>
                <td>${{(item.quantity * item.price)}}</td>
                <td class="center">
                    <button @click="remove(item.name)" class="btn cart-remove">
                        <font-awesome-icon icon="fa-solid fa-trash-can" />
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
    <h2 v-if="(this.cart.length == 0)">Cart is empty. Browse and find some items.</h2>
    <h2 v-if="(this.cart.length > 0)">Cart Total: {{calculateTotal()}}</h2> -->

<section class="h-100 gradient-custom">
  <div class="container">
    <div class="row d-flex justify-content-center my-4">
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Cart - {{this.cart.length}} items</h5>
          </div>
          <div class="card-body">
            
            <p v-if="(this.cart.length == 0)"><strong>Cart is empty, add some items.</strong></p>
            <CartComp v-for="item in cart" :key="item.name"
            :name="item.name"
            :price="item.price"
            :quantity="item.quantity"
            :remove="remove"
            :incrQuan="incrQuan"
            :decrQuan="decrQuan"
            />

            <hr class="my-4" />

          </div>
        </div>
        </div>
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Summary</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span v-if="(this.cart.length == 0)">Cart is empty.</span>
                <span v-if="(this.cart.length > 0)">${{calculateTotal()}}</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                </div>
                <span v-if="(this.cart.length == 0)"><strong>Cart is empty.</strong></span>
                <span v-if="(this.cart.length > 0)"><strong>${{calculateTotal()}}</strong></span>
              </li>
            </ul>

            <button @click="check()" type="button" class="btn btn-lg btn-primary rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
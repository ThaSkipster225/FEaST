<template>
  <aside class="cart-container">
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <font-awesome-icon icon="fa-solid fa-cart-shopping fa-xs" />
        </span>
        <button @click="toggle" class="cart-close">&times;</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.name">
              <td><p>carrot</p></td>
              <td>{{ item.name }}</td>
              <td>\$7</td>
              <td class="center">{{ item.quantity }}</td>
              <td>${{ (item.quantity * item.price) }}</td>
              <td class="center">
                <button @click="remove(key)" class="btn btn-light cart-remove">
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="center" v-if="!Object.keys(cart).length"><em>No items in cart</em></p>
        <div class="spread">
          <span><strong>Total:</strong> \$7</span>
          <button class="btn btn-light">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['toggle', 'cart', 'remove'],
  methods: {
    calculateTotal () { // [key, value]
      const total = Object.entries(this.cart).reduce((acc, curr) => {
        return acc + (curr[1] * this.getPrice(curr[0]))
      }, 0)
      return total.toFixed(2)
    }
  }
}
</script>

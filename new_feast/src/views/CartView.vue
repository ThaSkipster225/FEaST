<script>
export default{
    name: 'CartView',
    props: ['cart', 'remove', 'addToCart'],
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
    <table class="cart-table">
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
    <h2>Cart Total: {{calculateTotal()}}</h2>
</template>
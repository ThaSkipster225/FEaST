<script>
export default {
    name: 'CartComp',
    props: ['name', 'price', 'quantity', 'remove', 'incrQuan', 'decrQuan']
}
</script>

<template>
<!-- Single item -->
<div class="row">
    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
    <!-- Image -->
    <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
        <img src="@/assets/Images/Food.jpg"
        class="w-100" alt="{{name}}" />
        <a href="#!">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
        </a>
    </div>
    <!-- Image -->
    </div>

    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
    <!-- Data -->
    <p><strong>{{name}}</strong></p>
    <p>{{name}}, great choice!</p>
    <button type="button" class="btn btn-lg me-1 mb-2" data-mdb-toggle="tooltip"
        title="Remove item" @click="remove(name)">
        <font-awesome-icon icon="fa-solid fa-trash-can" />
    </button>
    <!-- Data -->
    </div>

    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
    <!-- Quantity -->
    <div class="d-flex mb-4" style="max-width: 300px">
        <button class="btn btn-outline-danger px-3 me-2"
        @click="decrQuan(name)">
        <font-awesome-icon icon="fa-solid fa-minus" />
        </button>

        <div class="form-outline">
            <p>Quantity: {{quantity}}</p>
        <!-- <input id="form1" min="0" name="quantity" value="{{quantity}}" type="number" class="form-control" />
        <label class="form-label" for="form1">Quantity</label> -->
        </div>

        <button class="btn btn-outline-success px-3 ms-2"
        @click="incrQuan(name)">
        <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
    </div>
    <!-- Quantity -->

    <!-- Price -->
    <p class="text-start text-md-center">
        <strong>${{price}}</strong>
    </p>
    <!-- Price -->
    </div>
</div>
<!-- Single item -->

<hr class="my-4" />
</template>

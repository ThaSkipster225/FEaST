<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Coin</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addCoin">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Price:</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Coin"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Test -->
</template>
<script>
export default {
    name: 'CoinForm',
}
</script>

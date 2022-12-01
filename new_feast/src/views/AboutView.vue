<script>

import ItemCard from '@/components/ItemCard.vue';

export default {
    name: "AboutView",
    components: {
        ItemCard
    }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page, which is being used to test out features</h1>
    <ItemCard
    :name="'Pretzel Bites'"
    :price="'5.79'"/>
  </div>
</template>

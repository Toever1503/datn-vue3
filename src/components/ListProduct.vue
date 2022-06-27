<template>
  <div
    class="product-list mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8"
  >
    <Product />

    <!-- More products... -->
  </div>
</template>

<script setup>
import Product from "../components/Product.vue";

</script>


<style>
.product-list .ant-rate-star > div {
  font-size: small;
}
</style>

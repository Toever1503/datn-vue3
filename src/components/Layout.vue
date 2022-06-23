<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <Header />
  <div class="container mx-auto px-4">
    <Carousel />
    <Category />
    <BestSellProduct />
  </div>

  <Footer />
</template>

<script setup>
import Header from "./Header.vue";
import Carousel from "./home/Carousel.vue";
import Category from "./home/Category.vue";
import BestSellProduct from "./home/BestSellProduct.vue";
import Footer from "./Footer.vue";

</script>

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
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
    <router-view />
  </div>

  <Footer />
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

</script>

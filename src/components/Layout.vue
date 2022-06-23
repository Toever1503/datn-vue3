<template>
  <header>
    header {{ count }}
  </header>
  <div id="header">
    <router-view />
  </div>

  <footer>footer</footer>

</template>

<script setup>

const count = 0;
</script>
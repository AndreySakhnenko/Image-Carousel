<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/layout/app-header.vue";
import HomePage from "./pages/HomePage.vue";
import Footer from "./components/layout/app-footer.vue";
</script>

<template>
  <div>
    <Header />
    <HomePage />
    <Footer />
  </div>
</template>

<style scoped>
</style>

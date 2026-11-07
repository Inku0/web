<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <!-- this must be called somewhere, such as here, for vue's router to work -->
  <RouterView />
</template>

<style scoped>
header {
  max-height: 10vh;
}
</style>

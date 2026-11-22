<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <NavBar />
  <main class="content">
    <!-- this must be called somewhere, such as here, for vue's router to work -->
    <RouterView />
  </main>
  <TheFooter />
</template>

<style scoped>
header {
  max-height: 10vh;
}
</style>

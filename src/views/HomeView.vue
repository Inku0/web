<script setup>
import { useStore } from "vuex";
import ThePosts from "../components/ThePosts.vue";
import LeftAside from "@/components/LeftAside.vue";
import RightAside from "@/components/RightAside.vue";

const store = useStore();

function resetAllLikes() {
  store.commit("resetLikes");
}
</script>

<template>
  <div>
    <main class="container">
      <LeftAside />
      <ThePosts />
      <RightAside />
    </main>

    <div class="reset-bar">
      <button @click="resetAllLikes" class="reset-likes-btn">Reset likes</button>
    </div>
  </div>
</template>

<style scoped>
.reset-bar {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
}

.reset-likes-btn {
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  background-color: #8fb3d9;
  color: #111;
  font-family: "Courier New", Courier, monospace;
}
</style>

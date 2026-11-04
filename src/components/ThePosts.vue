<script setup>
import PostItem from "./PostItem.vue";

</script>
<!--TODO dynamically fetch posts-->
<template>
  <div class="posts">
    <PostItem user="Sam Ro." feeling="confused" date="04.01.2030">
      <template #post-body>
        Where is everybody?
      </template>
    </PostItem>
  </div>
</template>

<style scoped>
  .posts {
    flex: 6;
    background-color:rgb(174, 189, 197);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }
</style>

<script setup>
import PostItem from "./PostItem.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const posts = computed(() => store.state.posts);
</script>
<template>
  <div class="posts">
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :user="post.author"
      :feeling="post.feeling"
      :date="post.date"
      :profile-pic="post.profilePic?.url"
      :body-pic="post.bodyPic?.url"
    >
      <template #post-body>
        {{ post.body }}
      </template>
    </PostItem>

    <p v-if="!posts.length">No posts available.</p>
  </div>
</template>

<style scoped>
.posts {
  flex: 6;
  background-color: rgb(174, 189, 197);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
}
</style>

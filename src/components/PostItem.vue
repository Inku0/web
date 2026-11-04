<script setup>
defineProps({
  user: {
    type: String,
    required: true,
  },
  feeling: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="post">
    <div class="post-header">
      <div>
        <img class="user-pfp" alt="{{user}}'s profile picture" src="@/assets/me.svg">
        <h2>{{user}}</h2>
        <h3>is feeling {{feeling}}</h3>
      </div>
      <p>{{date}}</p>
    </div>
    <hr>
    <div class="post-body">
      <slot name="post-body"></slot>
      <slot class="post-pic" name="body-pic"></slot>
    </div>
  </article>
</template>

<style scoped>
  .post {
    width: 100%;
    background-color: white;
    font-family: 'Courier New', Courier, monospace;
    max-width: 100%;
    padding: 1vw;
    border-radius: 10px;
    height: fit-content;
    overflow: hidden;
    box-sizing: border-box;

  }

  .post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      gap: 1vw;
    }
  }

  .user-pfp {
    height: 5vh;
  }

  .post-pic {
    display: block;
    max-width: 100%;
    max-height: 500px;
    width: auto;
  }
</style>

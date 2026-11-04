<template>
  <form action="index.html">
    <div class ="container">
      <div class="inputField">
        <label for="postBody"><b>Post body</b></label>
        <input type="text" id="postBody" placeholder="textarea" name="Post body">
      </div>

      <div class="inputField">
        <label for="File"><b>Select file</b></label>
        <input type="file" id="File" name="File">
      </div>
      <button type="submit">Create post</button>
    </div>
  </form>
</template>

<style scoped>
  /* AddPost Input field styling */
  .inputField {
    display: flex;
    width: 95%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .inputField label + input {
    width: 180px;
  }
</style>

<script setup></script>

<template>
  <form action="index.html">
    <div class="container">
      <div class="inputField">
        <label for="postBody"><b>Post body</b></label>
        <input type="text" id="postBody" placeholder="textarea" name="Post body" />
      </div>

      <div class="inputField">
        <label for="File"><b>Select file</b></label>
        <input type="file" id="File" name="File" />
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
/* AddPost Page and Login page styling */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(197, 213, 214);
  gap: 10px;
  border-radius: 30px;
  padding: 20px 10px;
  width: 100%;
  max-width: 75vw;
}

.container > a {
  color: rgb(26, 178, 224);
  text-decoration: none;
  margin: 0;
}

.container > p {
  margin: 0;
}

.container h1 {
  font-weight: bolder;
  font-size: medium;
  margin: 0;
}

.container > button {
  background-color: rgb(35, 35, 104);
  color: white;
}

.container h1 ~ input {
  width: 50%;
}
</style>

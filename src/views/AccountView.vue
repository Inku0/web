<template>
  <form action="index.html" method="POST" id="loginForm">
    <div class ="container">
      <h1> Welcome to PostIt</h1>
      <a href="#">Create an account</a>
      <p>or</p>
      <br>
      <p>Log in</p>
      <label>
        <input type="text" placeholder="Email" name="Email" id="emailInput" required>
      </label>

      <label>
        <input type="text" placeholder="Password" name="Password" required>
      </label>

      <button type="submit">Log in</button>
      <a href="#">Forgot password</a>
    </div>
  </form>
</template>

<style scoped>
</style>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const buttonText = ref("Log in");
const handleCreateClick = () => {
  buttonText.value = "Sign up";
};
const handleLogInClick = () => {
  buttonText.value = "Log in";
};
const shameUser = () => {
  alert("just try to remember it :)");
};

const store = useStore();

const email = ref("");
const loggedIn = computed(() => store.state.loggedIn);

const logIn = () => {
  store.commit("logIn");
  store.commit("setEmail", email.value);
  const emailAsUsername = email.value.toString().split("@")[0];
  store.commit("setUsername", emailAsUsername);
};
</script>

<template>
  <form v-if="!loggedIn" @submit.prevent="logIn" action="index.html" method="POST" id="loginForm">
    <div class="container">
      <h1>Welcome to PostIt</h1>
      <a @click="handleCreateClick" href="#">Create an account</a>
      <p>or</p>
      <br />
      <a @click="handleLogInClick" href="#">Log in</a>
      <label>
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          name="Email"
          id="emailInput"
          required
        />
      </label>

      <label>
        <input type="password" placeholder="Password" name="Password" required />
      </label>

      <button type="submit">{{ buttonText }}</button>
      <a @click="shameUser" href="#">Forgot password</a>
    </div>
  </form>
  <div v-else class="container">
    <h1>You're already logged in!</h1>
  </div>
</template>

<style scoped>
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

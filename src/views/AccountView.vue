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
const password = ref("");
const loggedIn = computed(() => store.state.loggedIn);

//All the const for password validation
const lengthOk = computed(() => password.value.length >= 8 && password.value.length < 15);
const uppercaseOk = computed(() => /^[A-Z]/.test(password.value));
const lowercaseOk = computed(() => (password.value.match(/[a-z]/g) || []).length >= 2);
const numberOk = computed(() => /\d/.test(password.value));
const hasLineOk = computed(() => /_/.test(password.value));
const submitTried = ref(false);

const passwordOk = computed(() => {
  return (
    lengthOk.value &&
    uppercaseOk.value &&
    lowercaseOk.value &&
    numberOk.value &&
    hasLineOk.value 
  );
});

const logIn = () => {
  submitTried.value = true;
  if (!passwordOk.value) {
    return;
  }
  store.commit("logIn");
  store.commit("setEmail", email.value);
  const emailAsUsername = email.value.toString().split("@")[0];
  store.commit("setUsername", emailAsUsername);
  store.commit("setPassword", password.value);
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
        <input 
          v-model="password"
          type="password" 
          placeholder="Password" 
          name="Password" 
          required 
        />
      </label>

      <button type="submit">{{ buttonText }}</button>
      <a @click="shameUser" href="#">Forgot password</a>
    </div>
    <div v-if="submitTried && !passwordOk" class="password-popup">
      <p class="popup-title">Invalid password! Password requirements:</p>
      <ul class="password-criteria">
        <li :class="{ valid: lengthOk }">8 to 14 character length</li>
        <li :class="{ valid: uppercaseOk }">Start with an uppercase letter</li>
        <li :class="{ valid: lowercaseOk }">Contain at least 2 lowercase letters</li>
        <li :class="{ valid: numberOk }">Contain at least one number</li>
        <li :class="{ valid: hasLineOk }">Contain an underscore ("_")</li>
      </ul>
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
  max-width: 40vw;
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

/* Password popup styling */
.password-popup {
  position: static;
  background-color: rgb(232, 237, 237);
  border: 1px solid rgb(170, 36, 36);
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
  padding: 20px;
  z-index: 20;
  text-align: left;
  width: 60%;
  margin: 15px auto 0 auto;
}
.popup-title {
  font-weight: bold;
  font-size: small;
  margin: 0 0 8px 0;
  color: rgb(170, 36, 36);
}

.password-criteria {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: small;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>

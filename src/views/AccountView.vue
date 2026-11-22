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

const passwordOk = computed(() => {
  return (
    lengthOk.value &&
    uppercaseOk.value &&
    lowercaseOk.value &&
    numberOk.value &&
    hasLineOk.value 
  );
});

const passwordNeed = computed(() => {
  const needs = [
    { id: 'length', text: '8 to 14 character length', ok: lengthOk.value },
    { id: 'uppercase', text: 'Start with an uppercase letter', ok: uppercaseOk.value },
    { id: 'lowercase', text: 'Contain at least 2 lowercase letters', ok: lowercaseOk.value },
    { id: 'number', text: 'Contain at least one number', ok: numberOk.value },
    { id: 'line', text: 'Contain an underscore ("_")', ok: hasLineOk.value }
  ];
  return needs.filter(criterion => !criterion.ok);
});

const logIn = () => {
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
    <div v-if="password.length > 0 && !passwordOk" class="password-popup">
      <p class="popup-title">Invalid password! Missing requirement:</p>
      <ul class="password-needs">
        <li v-for="criterion in passwordNeed" :key="criterion.id">
          {{ criterion.text }}
        </li>
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
  margin: 25px auto;
  padding-bottom: 25px;
}
.popup-title {
  font-weight: bold;
  font-size: small;
  margin: 0 0 8px 0;
  color: rgb(170, 36, 36);
}

.password-needs {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: small;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>

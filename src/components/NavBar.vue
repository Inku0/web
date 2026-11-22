<script setup>
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const store = useStore();
const loggedIn = computed(() => store.state.loggedIn);
const username = computed(() => store.state.username);
const email = computed(() => store.state.email);
const showDropDown = ref(false);

const handleProfileClick = () => {
  if (loggedIn.value) {
    showDropDown.value = !showDropDown.value;
  }
};

const handleLogoutClick = () => {
  store.commit("logOut");
  store.commit("clearUsername");
  store.commit("clearEmail");
  showDropDown.value = false;
};

const handleWindowClick = () => {
  showDropDown.value = false;
};

onMounted(() => {
  window.addEventListener("click", handleWindowClick);
  window.addEventListener("blur", handleWindowClick);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", handleWindowClick);
  window.removeEventListener("blur", handleWindowClick);
});
</script>

<template>
  <header>
    <nav>
      <ul class="navbar-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li>|</li>
        <li><RouterLink to="/add">Add Post</RouterLink></li>
      </ul>
      <div @click.stop class="navbar-pfp">
        <RouterLink v-if="!loggedIn" to="/login">
          <img class="user-pfp" id="userPfp" alt="User's profile picture" src="@/assets/me.svg" />
        </RouterLink>
        <button
          v-else
          aria-label="Open profile drop-down menu"
          :aria-expanded="showDropDown"
          @click="handleProfileClick"
        >
          <img class="user-pfp" id="userPfp" alt="User's profile picture" src="@/assets/me.svg" />
        </button>
        <div v-if="showDropDown" class="dropdown-menu" id="dropdownMenu">
          <p class="user-name" id="dropdownName">{{ username }}</p>
          <p class="user-email" id="dropdownEmail">{{ email }}</p>
          <a @click="handleLogoutClick" href="#" class="logout-button" id="logoutButton">Logout</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  background-color: rgb(151, 168, 170);
  border-radius: 0 0 10px 10px;
}

.navbar-links {
  display: flex;
  justify-content: space-between;
  gap: 1vw;
  li {
    align-content: center;
    list-style: none;
  }
}

li,
div {
  a,
  button {
    text-decoration: none;
    color: #141515;
    border-radius: 5px;
    padding: 1rem;
    transition: background-color 0.2s ease;
  }
  button {
    background-color: rgb(151, 168, 170);
    border: none;
    cursor: pointer;
  }
  a:hover,
  button:hover {
    background-color: rgb(180, 199, 200);
  }
}

/* Dropdown menu styling */
.navbar-pfp {
  display: flex;
  flex-direction: column;
  position: relative;
  p {
    margin: 0;
  }
  & a,
  button {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
  }
}
.navbar-pfp .user-pfp {
  width: 40px;
  object-fit: fill;
  border-radius: 25%;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 8px;
  background-color: rgb(151, 170, 172);
  min-width: 200px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 15px;
  z-index: 9999;
}

/* Shown when JS adds the '.show' class */
.dropdown-menu.show {
  display: block;
}

.dropdown-menu .user-name {
  font-weight: 700;
  font-size: 1rem;
  color: #141515;
  margin: 0 0 4px 0;
}

.dropdown-menu .user-email {
  font-size: 0.85rem;
  color: #141515;
  margin: 0 0 12px 0;
  word-break: break-all;
}

.dropdown-menu .logout-button {
  display: block;
  text-decoration: none;
  color: #be1e0d;
  font-weight: 600;
  font-size: 0.95rem;
  padding-top: 8px;
  border-top: 1px solid #ecf0f1;
}

.dropdown-menu .logout-button:hover {
  text-decoration: underline;
}
</style>

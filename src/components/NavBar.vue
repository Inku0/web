<script>
import {RouterLink} from "vue-router";

export default {
  name: "NavBar",
  components: {RouterLink},
};
</script>

<template>
  <header>
    <nav>
      <ul class="navbar-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li>|</li>
        <li><RouterLink to="/add">Add Post</RouterLink></li>
      </ul>
      <div class="navbar-pfp">
        <RouterLink to="/login">
          <img class="user-pfp" id="userPfp" alt="User's profile picture" src="@/assets/me.svg">
        </RouterLink>
        <div class="dropdown-menu" id="dropdownMenu">
          <p class="user-name" id="dropdownName"></p>
          <p class="user-email" id="dropdownEmail"> </p>
          <a href="#" class="logout-button" id="logoutButton">Logout</a>
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
    a {
      text-decoration: none;
      color: #141515;
      padding: 10px 15px;
      border-radius: 5px;
      transition: background-color 0.2s ease;
    }
    a:hover {
      background-color: rgb(180, 199, 200);
    }
    li {
      align-content: center;
      list-style: none;
    }
  }

  /* Dropdown menu styling */
  .navbar-pfp {
    position: relative;
    display: inline-block;
  }
  .navbar-pfp .user-pfp {
    width: 40px;
    object-fit: fill;
    border-radius: 25%;
    padding-top: 5px;
    padding-right: 5px;
  }

  .dropdown-menu {
    display: none;
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

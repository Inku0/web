import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        author: "Orange C.",
        profilePic: {
          mime: "image/svg+xml",
          url: "/src/assets/orange-cat.svg",
        },
        feeling: "confused",
        date: "1.09.2026",
        body: "Is everybody at class?",
        bodyPic: {},
      },
      {
        author: "Ameri S.",
        profilePic: {
          mime: "image/svg+xml",
          url: "/src/assets/american-shorthair-cat.svg",
        },
        feeling: "happy",
        date: "3.09.2026",
        body: "Tired of studying? Join us at the UT run club with a DJ, so you can get a head start on partying.",
        bodyPic: {
          mime: "image/png",
          url: "/src/assets/images/DJ_running.png",
        },
      },
      {
        author: "Sam R.",
        profilePic: {
          mime: "image/svg+xml",
          url: "/src/assets/general-cat.svg",
        },
        feeling: "excited",
        date: "2.09.2026",
        body: "Want some FREE EAPs? Click the link below, log in, and there you go :D https://www.FREEEAPNOSCAM.com",
        bodyPic: {},
      },
      {
        author: "Maine C.",
        profilePic: {
          mime: "image/svg+xml",
          url: "/src/assets/maine-coon-cat.svg",
        },
        feeling: "blessed",
        date: "4.09.2026",
        body: "Schoolwork is getting hard. Did some retail therapy to pick me up :D",
        bodyPic: {
          mime: "image/webp",
          url: "/src/assets/images/balencies.webp",
        },
      },
      {
        author: "Calico C.",
        profilePic: {
          mime: "image/svg+xml",
          url: "/src/assets/calico-cat.svg",
        },
        feeling: "business",
        date: "4.09.2026",
        body: "Want to make some quick and easy money? I'll buy your car (in any condition) from you every day, every time. Call me +372123456789",
        bodyPic: {
          mime: "image/avif",
          url: "/src/assets/images/auto.avif",
        },
      },
      {
        author: "Siamese C.",
        profilePic: {
          mime: "image/svg+xml",
          url: "/src/assets/siamese-cat.svg",
        },
        feeling: "rich",
        date: "17.10.2026",
        body: "Recycling? NO! It's called liquidating assets.",
        bodyPic: {
          mime: "image/jpeg",
          url: "/src/assets/images/cans.jpeg",
        },
      },
      {
        author: "Smarty C.",
        profilePic: {
          mime: "image/svg+xml",
          url: "/src/assets/smart-cat.svg",
        },
        feeling: "tired",
        date: "25.10.2026",
        body: "Forgot that the daylight saving ended today, could have slept for an hour more.",
        bodyPic: {},
      },
      {
        author: "Yellow C.",
        profilePic: {
          mime: "image/svg+xml",
          url: "/src/assets/yellow-cat.svg",
        },
        feeling: "worried",
        date: "1.11.2026",
        body: "Happy Halloween! Make sure, that you check your candy, found this in mine :(",
        bodyPic: {
          mime: "image/avif",
          url: "/src/assets/images/candy.avif",
        },
      },
      {
        author: "Sam R.",
        profilePic: {
          mime: "image/svg+xml",
          url: "/src/assets/general-cat.svg",
        },
        feeling: "hopeful",
        date: "1.11.2026",
        body: "Any recommendations for a good barber in Tartu? ASAP",
        bodyPic: {},
      },
      {
        author: "Definitely a Cat",
        profilePic: {
          mime: "image/svg+xml",
          url: "/src/assets/me.svg",
        },
        feeling: "good",
        date: "1.11.2026",
        body: "Today's mood",
        bodyPic: {
          mime: "image/webp",
          url: "/src/assets/images/cat.webp",
        },
      },
    ],
    loggedIn: false,
    username: "",
    email: "",
  },
  mutations: {
    addPost(state) {
      // TODO implement adding posts
      state.posts.add();
    },
    logIn(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
    },
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = "";
    },
    setEmail(state, email) {
      state.email = email;
    },
    clearEmail(state) {
      state.email = "";
    },
    resetLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");

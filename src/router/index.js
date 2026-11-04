import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from "@/views/AccountView.vue";
import AddPostView from "@/views/AddPostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: AccountView,
    },
    {
      path: '/add',
      name: 'add',
      component: AddPostView,
    },
    // TODO when to use lazy-loading?
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AccountView.vue'),
    // },
  ],
})

export default router

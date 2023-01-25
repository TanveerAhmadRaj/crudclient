import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import AddPost from '../views/AddPost.vue'
import UpdatePost from '../views/UpdatePost.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post/:id',
      name: 'post',
      props: true,
      component: PostView
    },
    {
      path: '/update-post/:id',
      name: 'update-post',
      props: true,
      component: UpdatePost
    },
    {
      path: '/add-post',
      name: 'add-post',
      component: AddPost
    },
  ]
})

export default router

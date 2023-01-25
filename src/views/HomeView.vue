<script setup>
import { onMounted } from 'vue';
import { usePostStore } from '@/stores/post';
const posts = usePostStore()

onMounted(()=>{
  posts.getPosts()
})

 const deletePost =  async (id)=>{
   await posts.deletePost(id)
 }
</script>

<template>
  <div class="container mt-5">
    <div class="mt-3 p-3 d-flex">
      <h4 class="text-dark">Add New Post</h4> 
        <RouterLink :to="{name: 'add-post'}" class="btn btn-primary p-2 ml-5"> Add</RouterLink>
      

    </div>
    <h3 class="text-center bg-dark p-3 text-white">
      CRUD APP USING PINIA STATEMENT MANAGEMENT STORE</h3>
    <table class="table table-bordered">
  <thead class="thead-light">
    <tr class="text-center">
      <th scope="col">#</th>
      <th scope="col">Name Of Post</th>
      <th scope="col">View Post</th>
      <th scope="col" colspan="2">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-center" v-for="post in posts.posts" :key="post.id">
      <td>{{ post.id }}</td>
      <td>{{ post.name }}</td> 
      <td class="nav-link"><RouterLink :to="{name: 'post', params: {id: post.id}}">View</RouterLink></td>
      <td><button class="btn" @click="deletePost(post.id)"><i class="fa fa-trash text-danger"></i></button></td>
      <td> <RouterLink :to="{name: 'update-post', params: {id: post.id}}"><i class="fa fa-pen-to-square"></i></RouterLink></td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<style scoped>
</style>

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
  <div class="container mt-5 border">
    <div class="mt-3 p-3 d-flex">
      <h4 class="text-dark">Add New Post</h4> 
        <RouterLink :to="{name: 'add-post'}" class="btn btn-primary p-2 ml-5">
           Add</RouterLink>
      <hr class="border-bottom">

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
  <template v-if="posts.posts.length>0">
    <tbody>
    <tr class="text-center" v-for="post in posts.posts" :key="post.id">
      <td>{{ post.id }}</td>
      <td>{{ post.name }}</td> 
      <td><RouterLink :to="{name: 'post', params: {id: post.id}}"  class="nav-link">View</RouterLink></td>
      <td><button class="btn" @click="deletePost(post.id)"><i class="fa fa-trash text-danger"></i></button></td>
      <td> <RouterLink :to="{name: 'update-post', params: {id: post.id}}"><i class="fa fa-pen-to-square"></i></RouterLink></td>
    </tr>
  </tbody>
  </template>
    <span v-else>
      <tbody>
    <tr class="text-danger font-weight-bold">
      <p class="text-uppercase p-3 text-center">currently this is no data available !!!!!</p>
    </tr>
  </tbody>
    </span>
</table>
  </div>
</template>

<style scoped>
</style>

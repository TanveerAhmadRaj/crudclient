<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success p-3">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">PINIA STORE</RouterLink>


    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <RouterLink :to="{name: 'home'}" class="nav-link">Home</RouterLink>
      </li>
      </ul>
    </div>
  </nav>
  <RouterView />
  
</template>

<style>
.section{
  height: 100vh;
}
</style>

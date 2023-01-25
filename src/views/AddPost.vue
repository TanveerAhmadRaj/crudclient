<script setup>
import { usePostStore } from '@/stores/post';
const post = usePostStore()
</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 shadow p-3">
                <div class="card  bg-light">
                    <div class="card-title p-3">
                        <h5 class="text text-danger">Add New Post</h5>
                    </div>
                    <div class="card-body p-3">
                        <form @submit.prevent="post.addPost">
                            <div class="form-group">
                                <label>Post Name: </label>
                                <input type="text" placeholder="Enter The Name of Post" 
                                class="form-control" v-model="post.name" required/>
                            </div>
                            <div class="form-group">
                                <label>Post Message: </label>
                                <input type="text" placeholder="Enter The Message of Post" 
                                class="form-control" v-model="post.message" required/>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-success">Add Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</template>
<style scoped>
</style>
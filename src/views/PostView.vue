<script setup>

import { onMounted } from 'vue';
import { usePostStore } from '@/stores/post';

const post = usePostStore()
const props = defineProps({
    id: {
        required: true,
    },
})

onMounted(()=>{
    post.getPost(props.id)
})

</script>

<template>
<div class="container m-5"> 
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="card shadow custom ">
                <div class="card-title p-3 text-center text-white bg-dark">
                    <span class="font-weight-bold text-uppercase ">{{ post.post.name }}</span>
                </div>
                <div class="card-body p-2 text-center text-danger">
                    <h4>{{ post.post.message }}</h4>
              
                    <p>{{ post.post.createdAt }}</p>
       
                    <p>{{ post.post.updatedAt }}</p>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
    </div>
</div>
</template>

<style scoped>
.custom{
    min-height: 20rem;
    margin-top: 4rem;
}
</style>
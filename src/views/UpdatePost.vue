<script setup>
import { onMounted } from 'vue';
import { usePostStore } from '@/stores/post';
const props = defineProps({
    id: {
       required: true
    }
})
const post = usePostStore()

onMounted(()=>{
 post.post =    post.getPost(props.id)
})
const updatePost = async()=>{
        await post.updatePost()
        this.$router.push("/");
}
</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="card shadow">
                    <div class="card-title p-3 bg-light">
                        <h5 class="text text-primary">Update Post</h5>
                    </div>
                    <div class="card-body p-3">
                        <form @submit.prevent="updatePost">
                            <div class="form-group">
                                <label>Post Name: </label>
                                <input type="text" placeholder="Enter The Name of Post" 
                                class="form-control" v-model="post.post.name" required/>
                            </div>
                            <div class="form-group">
                                <label>Post Message: </label>
                                <input type="text" placeholder="Enter The Message of Post" 
                                class="form-control" v-model="post.post.message" required/>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-success">Update Post</button>
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
import { defineStore } from 'pinia'
import axios from "axios"
export const usePostStore = defineStore({
  id: "posts",
  //defining states:
  state: ()=>({
    posts: [],
    post: {},
    name: "",
    message: "",
  }),
  //defining actions
   actions: {
        async getPosts() {
         const response =  await axios.get("http://localhost:5000/posts")
        this.posts = response.data
      },
      async getPost(id){
        const response = await axios.get(`http://localhost:5000/${id}`)
        this.post = response.data
      },

      async addPost() {
          
          const response = await axios.post("http://localhost:5000/create-post",{
            name: this.name,
            message: this.message
          })
          if(response.status === 200)
          {
            alert("Post Added Successfully.")
          }
        },
        async deletePost(id) {
           await axios.delete(`http://localhost:5000/${id}`)
          this.posts = this.posts.filter((post)=> post.id !== id)
        },
        async updatePost() {
          let id = this.post.id
          const response = await axios.put(`http://localhost:5000/${id}`,{
            name: this.post.name,
            message: this.post.message
          })
          if(response.status === 200)
          {
            
            alert("Post Updated Successfully.")
            
          }
          
        }
      }
    }
  )



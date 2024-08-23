<template>
  <div class="post-detail">
    <h1>Post Detail</h1>
    <p>This post has id : {{ $route.params.id }}</p>
    <p><button @click="showPostId">see post id</button></p>
    <p><button @click="goToFirstPost">Go to first post</button></p>
    <p><button @click="goHome">Go home</button></p>
    <p><RouterLink to="/posts">Back</RouterLink></p>
  </div>
</template>
  
<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert(`post id is ${ route.params.id }`)
}

const goHome = () => {
  router.push({ name : 'home' })
}

const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
}


</script>
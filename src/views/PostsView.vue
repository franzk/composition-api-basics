<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul v-for="post in posts" :key="post.id">
      <li><RouterLink :to="`/postDetail/${ post.id }`">{{ post.title }}</RouterLink></li>
    </ul>

  </div>
</template>
  
<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  },
])
</script>
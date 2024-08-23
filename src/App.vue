<template>
  <div class="user-data">
    {{ userData.name }} @{{ userData.username }}
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
    <RouterLink to="/dynamic">Dynamic Components</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { reactive, provide } from 'vue'

const userData = reactive({
  name: 'John Doe',
  username: 'johndoe504'
})

provide('userData', userData)

</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data {
  position: absolute;
  top: 0;
  right: 0;
  background: beige;
  color: black;
  padding: 3px;
}

</style>

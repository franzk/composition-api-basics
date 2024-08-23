<template>
  <h1>Dynamic components</h1>

  <label>
    Show the square
    <input 
      type="checkbox"
      v-model="showSquare"
    />
  </label>

  <component
    :is="showSquare ? SquareView : CircleView"
  />
  


</template>

<script setup>
import { ref } from 'vue'
import SquareView from '@/components/SquareView.vue'
import CircleView from '@/components/CircleView.vue'

const showSquare = ref(false)

</script>
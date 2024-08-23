<template>
  <Teleport to="body">
      <div class="modal">
        <h1>{{ title }}</h1>
        <h2>
          <slot name="subTitle" />
        </h2>
        <div>
          <slot />
        </div>
        <button @click="$emit('closeModal')">Close modal</button>
        <button @click="help">Help</button>
        <p>Hi {{ userData.name }} ;)</p>
      </div>
  </Teleport>
</template>

<script setup>
// imports
import { inject } from 'vue'

// props
const props = defineProps({
  title: {
    type: String,
    default: 'no title'
  }
})

// inject
const userData = inject('userData')

// emits
const emit = defineEmits(['closeModal', 'help'])

// help button handle
const help = () => {
  emit('help')
}
</script>

<style>
.modal {
  color: black;
  background-color: beige;
  padding: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  align-content: center;
  text-align: center;
}
</style>
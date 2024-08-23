<template>
  <div v-if="modelValue" class="modal">
    <h1>{{ title }}</h1>
    <div>
      <slot />
    </div>
    <button @click="$emit('update:modelValue', false)">Close modal</button>
  </div>
</template>

<script setup>
// props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
})

// emits
const emit = defineEmits(['update:modelValue'])
</script>

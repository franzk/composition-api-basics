<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <button @click="showModalMv = true">Show modal Model Value</button>
    <Modal 
      v-if="showModal" 
      @closeModal="showModal = false"
      @help="showHelp('Click on close modal !')"
      title="Title via prop"
    >
      <template #subTitle>Subtitle via slot</template>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Modal>

    <ModalMv 
      v-model="showModalMv"
      title="ModelValue modal title"
    >
      Lorem ipsum dolor sit amet, consectetur adipis
    </ModalMv>

  </div>
</template>

<script setup>
// imports
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalMv from '@/components/ModalMv.vue'

// modals
const showModal = ref(false)
const showModalMv = ref(false)

// methods
const showHelp = message => {
  alert(message)
} 

</script>

<template>
<div class="home">

  <h2 ref="appTitleRef">{{ appTitle }}</h2>

  <h3>{{ counterData.title }}:</h3>

  <div>
    <button @click="decreaseCounter(2)" class="btn">--</button>
    <button @click="decreaseCounter(1)" class="btn">-</button>
    <span class="counter">{{ counterData.count }}</span>
    <button @click="increaseCounter(1)" class="btn">+</button>
    <button @click="increaseCounter(2)" class="btn">++</button>
  </div>

  <p>This counter is {{ evenOrOdd }}</p>

  <div class="edit">
    <h4>Edit counter title</h4>
    <input v-model="counterData.title" type="text" v-autofocus>
  </div>

</div>
</template>

<script setup>
/**
 * Imports
 */
import { ref, computed, onActivated, onBeforeUpdate, onDeactivated, onMounted, onUpdated, reactive, watch, nextTick } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'

// reminder :
// const counter = ref(0),
//  counterTitle = ref('My counter')
// watch(counter, (newVal) => { if (newVal === 20) salert('blabla') })

/**
 * appTitle
 */
const appTitle = 'My amazing Counter App'

const appTitleRef = ref(null)

onMounted(() => {
  console.log(`largeur du titre = ${ appTitleRef.value.offsetWidth } px`)
})

/**
 * counter
 */
const counterData = reactive({
  count: 0,
  title: 'My counter'
})

onMounted(() => {
  console.log('faire des choses qui concernent counter')
})

watch(() => counterData.count, (newVal) => {
  if (newVal === 20) alert('Bravo, tu es arrivé à 20 !')
})

const evenOrOdd = computed(() => {
  return counterData.count % 2 === 0 ? 'even' : 'odd'
})

const increaseCounter = async amount => {
  counterData.count += amount
  await nextTick() 
  console.log('next tick demo')
}

const decreaseCounter = amount => {
  counterData.count -= amount
}

/**
 * onActivated
 */
// avec KeepAlive (voir App.vue) le composant reste monté lorsqu'il n'est plus affiché.
// dans ce cas alors que mounted est appelé une fois au début,
// onActivated s'exécute à chaque fois que le composant s'affiche
onActivated(() => {
  console.log('onActivated')
})

onDeactivated(() => {
  console.log('onDeactivated')
})

/**
 * updated hook 
 * */ 
onBeforeUpdate(() => {
  console.log('before update')
})

onUpdated(() => {
  console.log('updated')
})

/**
 * Directives 
 */
// directive bornée à ce composant
/*const vAutofocus = {  // => v-autocus
  mounted: (el) => {
    el.focus()
  }
}*/
// ou directive globale => src/directives/vAutofocus.js
  

</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.btn, .counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 10px;
}
</style>

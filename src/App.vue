<script setup>
import { ref } from 'vue'
import MainButton from './components/MainButton.vue'
const disabled =ref(false)
const toggleDisable = ()=>{
  disabled.value= !disabled.value
}

const count = ref(0)
const increment = (counter) => {
  count.value = count.value + counter
}
</script>

<template>
  <MainButton @click="toggleDisable" :disabled class="btn"/>
<button @click="(event) => console.log(event)" @mouseover="increment(10)">{{ count }}</button>

<input @keyup="() => console.log('test')">
</template>

<style scoped></style>

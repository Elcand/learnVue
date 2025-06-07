<script setup>
import { ref } from 'vue';
import MainButton from './components/MainButton.vue'
const disabled =ref(false)
const toggleDisable = ()=>{
  disabled.value= !disabled.value
}
</script>

<template>
  <MainButton  @click="toggleDisable" :disabled/>
</template>

<style scoped></style>

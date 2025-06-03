<script setup>
import MainButton from './components/MainButton.vue'
import OptionsComponent from './components/OptionsComponent.vue'
import CompositionComponent from './components/CompositionComponent.vue'
const name = 'ikel'
</script>

<template>
  <h1>Halo Kimo!</h1>
  <p>{{ name }}</p>
  <MainButton />
  <OptionsComponent />
  <CompositionComponent/>
</template>

<style scoped></style>

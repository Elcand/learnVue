<script setup>
import MainButton from './components/MainButton.vue' // local, atau untuk dstu halaman saja
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

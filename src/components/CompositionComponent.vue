<script setup>
import { inject } from 'vue'
const { name, UpdateName } = inject('name')
const nameApp = inject('nameApp')
const showName = () => console.log(name)
</script>

<template>
  <h1>{{ name }}</h1>
  <h1>{{ nameApp }}</h1>
  <button @click="UpdateName">Update Name</button>
</template>

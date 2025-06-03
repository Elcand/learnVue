<script scoped>
import { name } from '@vue/eslint-config-prettier/skip-formatting'

export default {
  data() {
    return {
      name: 'mikael',
    }
  },
  methods: {
    showName() {
      console.log(name)
    },
  },
}
</script>

<template>
  <h1>{{ name }}</h1>
  <button @click="showName">Show Name</button>
</template>

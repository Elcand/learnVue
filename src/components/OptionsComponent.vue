<script scoped>
export default {
  data() {
    return {
      name: 'mikael',
    }
  },
  methods: {
    showName() {
      console.log(this.name)
    },
  },
}
</script>

<template>
  <h1>{{ name }}</h1>
  <button @click="showName">Show Name</button>
</template>

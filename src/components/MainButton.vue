<script setup>
const { title = 'Button', disabled = true } = defineProps({
  title: String,
  disabled: Boolean,
})
</script>

<template>
  <button :disabled>{{ title }}</button>
</template>

<style scoped></style>

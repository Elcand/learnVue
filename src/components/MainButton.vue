<script setup>
const { title = 'klik', disabled = false } = defineProps({
  title: String,
  disabled: Boolean,
})
const disabledColor = '#000'
const availableColor = '#fff'
</script>

<template>
  <button
    :disabled
    class="button"
    :class="{ disabled: disabled }"
    :style="{ color: disabled ? disabledColor : availableColor }"
  >
    {{ title }}
  </button>
</template>

<style scoped>
.button {
  background-color: salmon;
  border: none;
  padding: 2px 4px;
  color: white;
}
</style>

<script setup>
const isLoading = false
const buttonAttr = {
  disabled: isLoading,
  class: 'classaja',
}
const renderIsLoading = () => {
  if (isLoading) {
    return 'Loading'
  } else {
    return 'submit'
  }
}
</script>

<template>
  <button v-bind="buttonAttr" :id="'id-${1}'">{{ renderIsLoading() }}</button>
</template>

<style scoped></style>

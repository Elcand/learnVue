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

const url = {
  attr: 'href',
  link: '/home,',
}
</script>

<template>
  <a :[url.attr]="url.link">
    <button v-bind="buttonAttr" :id="'id-${1}'">{{ renderIsLoading() }}</button>
  </a>
</template>

<style scoped></style>

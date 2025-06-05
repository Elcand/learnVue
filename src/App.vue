<script setup>
import MainButton from './components/MainButton.vue' // local, atau untuk dstu halaman saja
const greeting = 'Halo Kimo'
const blogPost = '<p style="color: red;">Kualitas Jaringan Telkom</p>'
const idblog = 'blog-1'
const classBlog = 'class-1'
const disableButton = false // untuk value boolean
const isLoading = true
const buttonAttr = {
  disabled : isLoading,
  class : classBlog,
  id : idblog,
}
</script>

<template>
  <p>{{ greeting }}</p>
  <MainButton :title="'test'"/>
  <MainButton :title="'submit '"/>
  <MainButton :title="'click'"/>
  <OptionsComponent />
  <CompositionComponent />
  <div :id="idblog" :class="classBlog">
    <p>{{ blogPost }}</p></div>
  <div>
    <p v-html="blogPost"></p>
  </div>
  <button v-bind="buttonAttr">{{ isLoading ? 'Loading' : 'Submit' }}</button>
</template>

<style scoped></style>

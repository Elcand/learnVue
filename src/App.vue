<script setup>
import MainButton from './components/MainButton.vue' // local, atau untuk dstu halaman saja
import { reactive, ref } from 'vue'
const greeting = 'Halo Kimo'
const blogPost = '<p style="color: red;">Kualitas Jaringan Telkom</p>'
const idblog = 'blog-1'
const classBlog = 'class-1'
const disableButton = false // untuk value boolean
const isLoading = true
const buttonAttr = {
  disabled: isLoading,
  class: classBlog,
  id: idblog,
}
const count = ref(1)
const increment = () => {
  count.value++
}
const user = reactive({ name: 'ikel', age: 17 })
</script>

<template>
  <p>{{ greeting }}</p>
  <MainButton :title="'test'" />
  <MainButton :title="'submit '" />
  <MainButton :title="'click'" />
  <OptionsComponent />
  <CompositionComponent />
  <div :id="idblog" :class="classBlog">
    <p>{{ blogPost }}</p>
  </div>
  <div>
    <p v-html="blogPost"></p>
  </div>
  <button v-bind="buttonAttr">{{ isLoading ? 'Loading' : 'Submit' }}</button>
  <button @click="increment">{{ count }}</button>
  <div>
    <h1>{{ user.name }}</h1>
    <button  @click="user.age++">{{ user.age }}</button>
  </div>
</template>

<style scoped></style>

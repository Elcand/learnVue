<script setup>
import { reactive, ref, computed } from 'vue'

const author = reactive({
  name: 'JK Rowline',
  books: ['Harry Kopter 1', 'Harry Kopter 2', 'Harry Kopter 3'],
})

const count = ref(4)
const isPublished = computed(() => {
  console.log(author.books)
  return author.books.length > 0 ? 'Published yes' : 'Published no'
})

const addBooks = () => {
  author.books.push('Harry Kopter ' + count.value )
  count.value++
}
</script>

<template>
  <div>{{ isPublished }}</div>
  <button @click="addBooks">{{ count }}</button>
</template>

<style scoped></style>

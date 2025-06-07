<script setup>
import { reactive, ref, computed } from 'vue'

const author = reactive({
  name: 'JK Rowline',
  books: ['Harry Kopter 1', 'Harry Kopter 2', 'Harry Kopter 3'],
})

const showAuthor = ref(false)

const count = ref(4)
const isPublished = computed(() => {
  console.log(author.books)
  return author.books.length > 0 ? 'Published yes' : 'Published no'
})

const addBooks = () => {
  author.books.push('Harry Kopter ' + count.value)
  count.value++
}
</script>

<template>
  <div>{{ isPublished }}</div>
  <button @click="addBooks">{{ count }}</button>
  <h3>
    {{ author.name }}
    <span v-if="author.books.length > 1">Have more than a Books</span>
    <span v-if="author.books.length ===1">Have Books</span>
    <span v-else>Don't Have Books</span>
  </h3>
</template>

<style scoped></style>

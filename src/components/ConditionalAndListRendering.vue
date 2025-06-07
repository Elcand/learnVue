<script setup>
import { reactive, ref, computed } from 'vue'

const author = reactive({
  name: 'JK Rowline',
  books: [
    {
      title: 'Harry Kopter 1',
      releaseDate: '1997',
      reviews: [5, 4, 4, 3, 4],
    },
    {
      title: 'Harry Kopter 2',
      releaseDate: '1999',
      reviews: [5, 3, 4, 3, 2],
    },
    {
      title: 'Harry Kopter 3',
      releaseDate: '2003',
      reviews: [5, 2, 4, 3, 4],
    },
  ],
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
    <span v-if="author.books.length === 1">Have Books</span>
    <span v-else>Don't Have Books</span>
  </h3>
  <h2>Books:</h2>
  <ul>
    <li v-for="({ title, releaseDate, reviews }, index) of author.books" :key="`book-${index}`">
      {{ title }} - {{ releaseDate }}
      <span v-for="(reviwe, reviewIndex) in reviews" :key="`review-${reviewIndex}`">
        {{ reviwe }}
      </span>
    </li>
  </ul>
  <ul>
    <li v-for="(data, key, index) in author" :key="key">
      <span>{{ index }}.{{ key }}:{{ data }}</span>
    </li>
  </ul>
</template>

<style scoped></style>

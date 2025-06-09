<script setup>
import { ref } from 'vue'
import MainButton from './components/MainButton.vue'
const disabled = ref(false)
const toggleDisable = () => {
  disabled.value = !disabled.value
}

const count = ref(0)
const increment = (counter) => {
  count.value = count.value + counter
}

const name = ref('')
const desc = ref('')
const picked = ref('')
</script>

<template>
  <!-- <MainButton @click="toggleDisable" :disabled class="btn" /> -->
  <button @click="(event) => console.log(event)" @mouseover="increment(10)">{{ count }}</button>

  <input @keyup="() => console.log('test')" />
  <br />
  <br />
  <p>{{ name }}</p>
  <p style="white-space: pre-line">{{ desc }}</p>
  <input type="text" v-model.lazy="name" />
  <br />
  <br />
  <textarea v-model="desc"></textarea>
  <br /><br />
  <label for=""><input type="radio" v-model="picked" value="Mik" />Mik</label>
  <label for=""><input type="radio" v-model="picked" value="kel" />Kel</label>
  <br /><br />
  <p>{{ picked }}</p>
  <!-- <li v-for="item in checked" :key="item">{{ item }}</li> -->
  <br /><br />
  <MainButton>
    <template #default="{ title, subtitle }">
      <h3>{{ title }} {{ subtitle }} TPTP</h3>
    </template>
  </MainButton>
</template>

<style scoped></style>

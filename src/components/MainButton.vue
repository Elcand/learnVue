<script setup>
const disabledColor = '#000'
const availableColor = '#fff'
</script>

<template>
  <!-- <label>test</label> -->
  <button
    v-bind="$attrs"
    :disabled
    class="button"
    :class="{ disabled: disabled }"
    :style="{ color: disabled ? disabledColor : availableColor }"
  >
    <div>
      <slot :title="'hello'" :subtitle="'world'">Submit</slot>
    </div>
    <div name="header" v-if="$slots.header"><slot name="header" /></div>
  </button>
</template>

<style scoped>
.button {
  background-color: salmon;
  border: none;
  padding: 10px 10px;
  color: white;
}

.button:hover {
  background-color: rgb(255, 44, 20);
}
</style>

<template>
  <section class="mt-2">
    <h3 class="text-xl">Counter: {{ counter }}</h3>
    <h3 class="text-xl">Square: {{ squareCounter }}</h3>
  </section>
  <div class="mt-4">
    <button class="p-4 bg-blue-500 rounded hover:bg-blue-700 mr-2" @click="counter++">+1</button>
    <button class="p-4 bg-blue-500 rounded hover:bg-blue-700 mr-2" @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = defineProps({
  value: { type: Number, required: true },
});

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);
</script>

<style lang="tailwind.css" scoped>
/*   .button{
    @apply pt-4 bg-blue-500 rounded hover:bg-blue-700 mr-2;
  } */

</style>

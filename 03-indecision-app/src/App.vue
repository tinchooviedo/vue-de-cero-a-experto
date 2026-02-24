<template>
  <h1 class="text-3xl font-bold">Contador Wey</h1>
  <hr class="my-4" />
  <NumberCounter :value="5"/>
</template>
<script lang="ts" setup>
import NumberCounter from './components/NumberCounter.vue';
</script>

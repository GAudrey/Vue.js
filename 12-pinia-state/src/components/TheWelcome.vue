<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/counter'
const store = useCounterStore()
const { count, doubleCount, incrementAmount } = storeToRefs(store)
const { increment } = store
</script>

<template>
  <h1>Pinia store test</h1>
  <div>
    <label for="incremental">New increment number</label>
    <input type="number" name="incremental" id="incremental" v-model="incrementAmount" />
  </div>
  <h2>count : {{ count }}</h2>
  <h2>double count : {{ doubleCount }}</h2>
  <p>
    <button type="button" class="btn primary" @click="increment()">Incrémentation</button>
  </p>
</template>

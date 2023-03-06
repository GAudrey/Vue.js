import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const incrementAmount = ref(1);
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value += incrementAmount.value;
  }

  return { count, doubleCount, increment, incrementAmount }
})

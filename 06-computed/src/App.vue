<script setup>
import { ref, computed } from "vue";

const randomList = ref([]);

const addRandomNumber = () => {
  const number = Math.round(Math.random() * 200);
  randomList.value.push(number);
};

const sumRandomList = computed(() => {
  return randomList.value.reduce((acc, current) => acc + current, 0);
});
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden"
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <button class="btn primary block mx-auto mb-8" @click="addRandomNumber">
        Ajouter un nombre aléatoire
      </button>
      <div class="grid grid-cols-6 gap-8">
        <p v-for="(number, index) in randomList" :key="index">{{ number }}</p>
      </div>
      <div class="mt-8 border-t-2 pt-8 flex justify-center text-4xl">
        {{ sumRandomList }}
      </div>
    </main>
  </div>
</template>

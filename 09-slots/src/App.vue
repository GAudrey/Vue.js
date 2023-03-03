<script setup>
import Quote from "./components/Quote.vue";
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden"
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <Quote
        ><div class="font-bold text-lg">
          "Deux tartines de confiture équivaut à une Frambush"
        </div></Quote
      >
    </main>
  </div>
</template>

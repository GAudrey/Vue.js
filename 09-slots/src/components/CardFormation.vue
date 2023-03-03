<script setup>
defineProps(["imgSrc", "name"]);
</script>

<template>
  <div
    class="flex flex-col shadow border border-rose-200 rounded-md bg-white fduration-150 hover:shadow-md"
  >
    <img
      :src="imgSrc"
      :alt="name"
      class="w-full h-64 rounded-t-md object-cover"
    />
    <div class="px-4 pb-16 pt-6 flex flex-col flex-grow">
      <header><slot name="header"></slot></header>
      <div><slot name="description"></slot></div>
      <div class="mt-4 flex-grow flex items-end">
        <button class="btn primary">S'inscrire</button>
      </div>
    </div>
  </div>
</template>
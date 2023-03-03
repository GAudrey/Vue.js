<script setup>
defineProps(["title", "extra", "day", "month"]);
</script>

<template>
  <div class="py-3 text-white flex justify-between items-center">
    <h3 class="text-2xl">{{ title }}</h3>
    <div class="flex-grow flex justify-end mr-12">
      <div
        class="text-sm text-gray-400 border border-gray-400 px-3 py-1 rounded-sm"
      >
        {{ extra }}
      </div>
    </div>
    <div
      class="flex flex-col items-center bg-cyan-600 font-bold px-8 py-1 rounded-l-md cursor-pointer duration-200 hover:pr-16"
    >
      <span>{{ day }}</span>
      <span>{{ month }}</span>
    </div>
  </div>
</template>
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
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section class="min-h-full mx-auto w-2.3 px-4 bg-gray-900">
    <nav class="p-6">
      <RouterLink
        class="text-gray-900 bg-white rounded-md px-3 py-2 text-sm font-medium m-2"
        aria-current="page"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        class="text-gray-900 bg-white rounded-md px-3 py-2 text-sm font-medium"
        aria-current="page"
        to="/films"
        >Films</RouterLink
      >
    </nav>
  </section>
  <main class="w-2/3 mx-auto px-4 my-2 py-12 sm:px-6 lg:px-8 text-white">
    <RouterView />
  </main>
</template>
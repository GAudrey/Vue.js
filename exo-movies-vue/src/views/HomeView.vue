<script setup lang="ts">
</script>

<template>
  <div class="w-full text-center">
    <h1 class="text-4xl text-white">Welcome to the OUR Movies API search !!!!</h1>
    <p class="m-3">
      <img src="/movie-explorer.jpg" alt="black dragon" />
      Click to search the movie database
    </p>

    <RouterLink
      class="text-gray-900 bg-white rounded-md px-3 py-2 text-sm font-medium m-2"
      aria-current="page"
      to="/films"
      >Films search</RouterLink
    >
  </div>
</template>
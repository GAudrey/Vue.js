import { useMoviesStore } from '../stores/movies';
<script setup lang="ts">
import { ref } from 'vue'
import { useMoviesStore } from '../stores/movies'

const movieStore = useMoviesStore()
const searchText = ref('')
function launchSearch(event: Event) {
  event.preventDefault()
  movieStore.searchMovies(searchText.value)
}
</script>

<template>
  <div class="pt-5">
    <form @submit="launchSearch">
      <input
        type="text"
        class="w-full p-1 border-2 border-gray-200 text-gray-900"
        placeholder="Search for a movie"
        v-model="searchText"
      />
    </form>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useMoviesStore } from '../stores/movies'
import MovieCard from '../components/movies/movie-card.vue'

const moviesStore = useMoviesStore()
const { movies } = storeToRefs(moviesStore)
onMounted(() => moviesStore.fetchMovies())
</script>
<template>
  <div>
    <ul
      role="list"
      class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
    >
      <movie-card :movie="movie" v-for="movie in movies" :key="movie.id" />
    </ul>
  </div>
</template>
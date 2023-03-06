<script setup lang="ts">
import type { Movie } from '../../types'
type PropTypes = { movie: Movie }

const props = defineProps<PropTypes>()
</script>

<template>
  <li class="">
    <div class="w-full mt-6">
      <figure class="bg-gray-200 rounded-xl relative text-white">
        <div
          class="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black rounded-b-xl"
        ></div>
        <img
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          alt=""
          class="object-cover h-96 w-full rounded-xl"
        />
        <div class="p-6 absolute bottom-0 left-0 z-20">
          <h2 class="text-2xl font-bold mb-2">{{ movie.title }}</h2>
          <div class="leading-relaxed">{{ movie.vote_average }}</div>
          <p>Link to details</p>
        </div>
      </figure>
    </div>
  </li>
</template>
<script setup>
import ListAnimeItem from "./ListAnimeItem.vue";
defineProps(["animes"]);
</script>

<template>
  <div class="bg-gradient-to-b from-indigo-800 to-cyan-800 rounded-md">
    <div class="p-8 pr-0">
      <!-- Ici, v-bind obligatoire à l'écriture pour destructurer anime -->
      <ListAnimeItem
        v-for="(anime, index) in animes"
        :key="index"
        v-bind="anime"
      />
    </div>
  </div>
</template>
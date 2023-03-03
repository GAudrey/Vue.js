<script setup>
import { ref } from "vue";
import FormAnime from "./components/FormAnime.vue";
import ListAnime from "./components/ListAnime.vue";

const showForm = ref(false);
const animes = ref([
  {
    title: "Demon Slayer",
    extra: "Episodes 1 à 20",
    day: "1er",
    month: "Juin",
  },
  {
    title: "Parasite",
    extra: "Saison 8",
    day: "28",
    month: "Mars",
  },
  {
    title: "One Piece",
    extra: "Arc Mano",
    day: "6",
    month: "Mars",
  },
]);

const toggleForm = () => {
  showForm.value = !showForm.value;
};

const onSubmitAnime = (anime) => {
  animes.value.push(anime);
  toggleForm();
};

const onCancelForm = () => {
  toggleForm();
};
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden"
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <ListAnime :animes="animes" />
      <FormAnime
        v-if="showForm"
        @handleSubmit="onSubmitAnime"
        @onCancel="onCancelForm"
      />
      <button
        type="button"
        class="btn primary m-8"
        v-if="!showForm"
        @click="toggleForm"
      >
        Ajouter un nouvel anime
      </button>
    </main>
  </div>
</template>

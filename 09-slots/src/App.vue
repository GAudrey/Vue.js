<script setup>
import { ref } from "vue";
import Quote from "./components/Quote.vue";
import CardFormation from "./components/CardFormation.vue";

const formations = ref([
  {
    id: 1,
    name: "Développeur affinity designer",
    imgSrc:
      "https://api.technocite.be/static/sm/1673420263606-Affinity-Photo.png",
    description: `<h2 class="text-xl">Devenez développeur de contenu pour des contenus non-autorisés</h2>`,
  },
  {
    id: 2,
    name: "Développeur gaming",
    imgSrc: "https://api.technocite.be/static/sm/1644313419821-gaming5.png",
    description: `<p class="text-red-600">Jouer en classe au lieu d'apprendre</p>`,
  },
  {
    id: 3,
    name: "JavaScript",
    imgSrc:
      "https://api.technocite.be/static/sm/1645093105204-javascript%20(2).png",
    description: `<p>Ca sert à rien. De toute façon, y a pas de boulot dans le JS.</p>`,
  },
]);
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden"
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <Quote>
        <div class="font-bold text-lg">
          "Deux tartines de confiture équivalent à une Frambush"
        </div>
      </Quote>
      <div class="grid grid-cols-2 gap-8 w-[1000px] mx-auto">
        <CardFormation
          v-for="formation in formations"
          :key="formation.id"
          :imgSrc="formation.imgSrc"
          :name="formation.name"
        >
          <template v-slot:header>
            <h2 class="title primary">{{ formation.name }}</h2>
          </template>
          <template v-slot:description>
            <div v-html="formation.description"></div>
          </template>
        </CardFormation>
      </div>
    </main>
  </div>
</template>

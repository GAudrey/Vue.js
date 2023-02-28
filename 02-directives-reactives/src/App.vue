<script setup>
import { reactive, ref } from "vue";
// reactive ne prend que des objets et des tableaux
const state = reactive({
  sound: {
    artists: "KWWMA & TurboKevin",
    title: "Get Shaky",
    duration: "3:57",
    artwork:
      "https://images-ext-1.discordapp.net/external/v4TBZ-mkHVoanu78lWw5y3swhccR6zR0mDDZc2RQKrg/https/i1.sndcdn.com/artworks-HmKFZixBlvIHwMt6-qC6j1Q-t500x500.jpg",
  },
});

const audio = new Audio("/KXXMA__TurboKevin_-_GET_SHAKY.mp3");

const showMusic = ref(false);

const toggleMusic = () => {
  showMusic.value = !showMusic.value;
  if (showMusic.value) {
    audio.play();
  } else {
    audio.pause();
  }
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
      <!-- CONTENU ICI -->
      <div class="flex items-center">
        <!-- pas obligé de rajouter un v-bind tant qu'on a les : -->
        <img
          v-bind:src="state.sound.artwork"
          :alt="state.sound.title"
          class="w-32 mr-8"
        />
        <div class="flex flex-grow">
          <button v-on:click="toggleMusic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-16 mr-4 text-orange-400"
              v-if="!showMusic"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-16 mr-4 text-orange-400"
              v-else
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div>
            <h3 class="text-sm text-gray-500">{{ state.sound.artists }}</h3>
            <h2 class="text-xl mt-1">
              {{ state.sound.title }}
              <span class="ml-16 text-xs text-gray-500">{{
                state.sound.duration
              }}</span>
            </h2>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

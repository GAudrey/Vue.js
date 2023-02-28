<script setup>
import { ref } from "vue";

const sound = ref({
  title: "",
  artist: "",
  artword: "",
  free: false,
  genres: [],
});

const onSubmit = () => {
  console.log(sound.value);
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
      <form
        class="grid grid-cols-2 gap-8 items-start"
        @submit.prevent="onSubmit"
      >
        <div class="form-control input">
          <label for="title">Titre de la musique</label>
          <input type="text" id="title" v-model="sound.title" />
        </div>
        <div class="form-control input">
          <label for="artists">Artistes</label>
          <input type="text" id="artists" v-model="sound.artist" />
        </div>
        <div class="form-control input">
          <label for="artwork">Artwork</label>
          <input type="text" id="artwork" v-model="sound.artword" />
        </div>
        <div class="form-control radio flex flex-wrap">
          <h2 class="block text-sm font-medium text-gray-700 w-full mb-2">
            Prix
          </h2>
          <div class="mr-8">
            <label for="free"> Gratuite </label>
            <input type="radio" id="free" value="true" v-model="sound.free" />
          </div>
          <div>
            <label for="notFree"> Payante </label>
            <input
              type="radio"
              id="notFree"
              value="false"
              v-model="sound.free"
            />
          </div>
        </div>
        <div class="grid grid-cols-2">
          <h2 class="block text-sm font-medium text-gray-700 col-span-2">
            Style de musique
          </h2>
          <div class="form-control checkbox">
            <label for="electro">Electro</label>
            <input
              type="checkbox"
              id="electro"
              value="electro"
              v-model="sound.genres"
            />
          </div>
          <div class="form-control checkbox">
            <label for="jazz">Jazz</label>
            <input
              type="checkbox"
              id="jazz"
              value="jazz"
              v-model="sound.genres"
            />
          </div>
          <div class="form-control checkbox">
            <label for="dubstep">Dubstep</label>
            <input
              type="checkbox"
              id="dubstep"
              value="dubstep"
              v-model="sound.genres"
            />
          </div>
          <div class="form-control checkbox">
            <label for="rocknroll">Rock & roll</label>
            <input
              type="checkbox"
              id="rocknroll"
              value="rocknroll"
              v-model="sound.genres"
            />
          </div>
        </div>
        <div class="col-span-2 flex justify-end">
          <button type="submit" class="btn primary">Ajouter</button>
        </div>
      </form>
    </main>
  </div>
</template>

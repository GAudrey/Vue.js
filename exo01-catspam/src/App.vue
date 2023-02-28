<script setup>
import { ref } from "vue";

const imgUrl = "/amory-cat.jpg";

const cptClick = ref(0);

const imgList = ref([]);

const onSpamCat = () => {
  cptClick.value++;

  for (let i = 0; i < cptClick.value; i++) {
    imgList.value.push(imgUrl);
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
      <div class="flex justify-center">
        <button type="button" class="btn warning" @click="onSpamCat">
          CAT SPAM
        </button>
      </div>
      <div class="mt-4 grid grid-cols-12 gap-4">
        <img
          v-for="(img, index) in imgList"
          :key="index"
          :src="img"
          alt="Amory's cat"
          class="w-32"
          @click="onSpamCat"
        />
      </div>
    </main>
  </div>
</template>

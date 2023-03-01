<script setup>
import { ref } from "vue";

const translateX = ref(0);
const translateY = ref(0);

const imgUrl = "/amory-cat.jpg";

const resetPosition = () => {
  translateX.value = 0;
  translateY.value = 0;
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
      <div class="flex justify-around">
        <div class="form-control input">
          <label for="translateX">X</label>
          <input
            type="number"
            step="5"
            id="translateX"
            v-model="translateX"
            :class="{ 'bg-red-500 bg-opacity-50': translateX < 0 }"
          />
        </div>
        <div class="form-control input">
          <label for="translateY">Y</label>
          <input
            type="number"
            step="5"
            id="translateY"
            v-model="translateY"
            :class="{ 'bg-red-500 bg-opacity-50': translateY < 0 }"
          />
        </div>
      </div>
      <img
        :src="imgUrl"
        :style="{ transform: `translate(${translateX}px, ${translateY}px)` }"
        alt="Amory's cat"
        class="mt-8 w-24 cursor-pointer"
        @click.shift="resetPosition"
      />
    </main>
  </div>
</template>

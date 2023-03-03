<script setup>
import { ref, onMounted, watch } from "vue";

const listCountries = ref([]);
const country = ref([]);
const selectedCountry = ref();

// fetch API in Vue.js
onMounted(async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/region/europe?fields=flag,name"
  );
  listCountries.value = await res.json();
});

watch(country, async () => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${country.value.name.common}`
  );
  const data = await res.json();
  selectedCountry.value = data[0];
});
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden"
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <div class="form-control select w-64">
        <label for="country">Choisis un pays</label>
        <select name="country" id="country" v-model="country">
          <option
            v-for="(element, index) in listCountries"
            :key="index"
            :value="element"
          >
            {{ element.flag }} {{ element.name.common }}
          </option>
        </select>
      </div>
      <div
        class="flex flex-col items-center space-y-4 mt-8"
        v-if="selectedCountry"
      >
        <img
          :src="selectedCountry.flag.svg"
          :alt="selectedCountry.name.common"
          class="w-64"
        />
        <h2 class="font-semibold text-4xl">
          {{ selectedCountry.name.common }}
        </h2>
        <h2 class="font-semibold text-2xl">
          Capital: {{ selectedCountry.capital[0] }}
        </h2>
      </div>
    </main>
  </div>
</template>

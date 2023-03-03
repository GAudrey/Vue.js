<script setup>
import Header from "./ui/Header.vue";
import { ref, provide } from "vue";

const isLogged = ref(false);
const toggleConnect = () => {
  isLogged.value = !isLogged.value;
};

provide("logginStatus", isLogged);
provide("changeLogginStatus", toggleConnect);
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <Header />
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <div class="justify-around flex">
        <button
          class="btn primary"
          type="button"
          @click="toggleConnect"
          v-if="!isLogged"
        >
          Se connecter
        </button>
        <button class="btn cancel" type="button" @click="toggleConnect" v-else>
          Se déconnecter
        </button>
      </div>
    </main>
  </div>
</template>

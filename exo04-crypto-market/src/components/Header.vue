<script setup>
import { inject } from "vue";

const toggleConnect = inject("changeLoggedStatus");
const isConnect = inject("loggedStatus");
</script>

<template>
  <header
    class="mt-6 mx-8 px-8 shadow-md rounded-md flex justify-between items-center bg-white overflow-hidden"
  >
    <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    <button
      class="btn primary"
      type="button"
      @click="toggleConnect"
      v-if="isConnect"
    >
      Se connecter
    </button>
    <button class="btn cancel" type="button" @click="toggleConnect" v-else>
      Se déconnecter
    </button>
  </header>
</template>
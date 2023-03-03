<script setup>
import { ref, provide } from "vue";
import FormCrypto from "./components/FormCrypto.vue";
import Header from "./components/Header.vue";
import CrytoElement from "./components/CryptoElement.vue";

const isLogged = ref(false);
const toggleConnect = () => {
  isLogged.value = !isLogged.value;
};

provide("loggedStatus", isLogged);
provide("changeLoggedStatus", toggleConnect);
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <Header />
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <FormCrypto />
      <CrytoElement>
        <template v-slot:cryptosvg>
          <div></div>
        </template>
      </CrytoElement>
    </main>
  </div>
</template>

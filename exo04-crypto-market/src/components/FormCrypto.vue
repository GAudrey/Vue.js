<script setup>
import { inject } from "vue";

defineProps(["newCrypto"]);

const isConnect = inject("loggedStatus");
</script>

<template>
  <form>
    <div class="form-control input">
      <label for="cryptoName">Nom de la crypto</label>
      <input
        type="text"
        name="cryptoName"
        id="cryptoName"
        :disabled="isConnect"
      />
    </div>
    <div class="form-control textarea">
      <label for="cryptoSVG">SVG</label>
      <textarea
        name="cryptoSVG"
        id="cryptoSVG"
        :disabled="isConnect"
      ></textarea>
    </div>
    <button type="submit" class="btn primary my-4" :disabled="isConnect">
      Ajouter
    </button>
  </form>
</template>
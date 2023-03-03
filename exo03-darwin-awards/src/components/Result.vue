<script setup>
defineProps(["result"]);
</script>

<template>
  <div>
    <div v-for="award in result" :key="award.id">
      <h3>{{ award.name }}</h3>
      <h2>{{ award.death }}</h2>
      <p>{{ award.description }}</p>
    </div>
    <div v-if="result.length">
      <button type="button" class="btn cancel" @click="$emit('onReset')">
        Réinitialiser
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["onCancel"]);

const anime = ref({
  title: "",
  extra: "",
  day: "",
  month: "",
});

const animeValidation = computed(() => {
  return (
    !anime.value.title ||
    !anime.value.extra ||
    !anime.value.day ||
    !anime.value.month
  );
});

const onCancelForm = () => {
  emit("onCancel");
};
</script>

<template>
  <div class="mt-4">
    <h2 class="title secondary">Ajouter un animé</h2>
    <form
      class="grid grid-cols-4 gap-8"
      @submit.prevent="$emit('handleSubmit', anime)"
    >
      <div class="form-control input">
        <label for="title">Titre de l'anime</label>
        <input type="text" id="title" v-model="anime.title" />
      </div>
      <div class="form-control input">
        <label for="extra">Information complémentaire</label>
        <input type="text" id="extra" v-model="anime.extra" />
      </div>
      <div class="form-control input">
        <label for="day">Jour</label>
        <input type="text" id="day" v-model="anime.day" />
      </div>
      <div class="form-control input">
        <label for="month">Mois</label>
        <input type="text" id="month" v-model="anime.month" />
      </div>
      <div class="col-span-4 flex jusitfy-end">
        <button type="submit" class="btn primary" :disabled="animeValidation">
          Ajouter
        </button>
        <button type="button" class="btn cancel ml-8" @click="onCancelForm">
          Annuler
        </button>
      </div>
    </form>
  </div>
</template>
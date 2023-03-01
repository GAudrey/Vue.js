<script setup>
import { ref, computed } from "vue";

const incomeList = ref([]);
const income = ref({ incomeT: "", incomeA: 0 });
const expenseList = ref([]);
const expense = ref({ expenseT: "", expenseA: 0 });

const toggleIncomeIsDisabled = computed(() => {
  return !income.value.incomeT || !income.value.incomeA;
});

const addIncome = () => {
  incomeList.value.push(income.value);
  income.value = { incomeT: "", incomeA: 0 };
};

const deleteIncome = (incomeItem) => {
  incomeList.value.splice(incomeList.value.indexOf(incomeItem), 1);
};

const toggleExpenseIsDisabled = computed(() => {
  return !expense.value.expenseT || !expense.value.expenseA;
});

const addExpense = () => {
  expenseList.value.push(expense.value);
  expense.value = { expenseT: "", expenseA: 0 };
};

const deleteExpense = (expenseItem) => {
  expenseList.value.splice(expenseList.value.indexOf(expenseItem), 1);
};

const calculateBalance = computed(() => {
  let globalIncome = incomeList.value.reduce(
    (acc, current) => acc + current.incomeA,
    0
  );

  let globalExpense = expenseList.value.reduce(
    (acc, current) => acc + current.expenseA,
    0
  );

  return globalIncome - globalExpense;
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
      <div class="grid grid-cols-2 justify-evenly p-10">
        <div class="mx-auto">
          <form class="border-b border-b-gray-300" @submit.prevent="addIncome">
            <h2 class="text-xl font-semibold">Revenus</h2>
            <div class="form-control input flex gap-x-4">
              <div>
                <label for="incomeTitle">Titre</label>
                <input
                  type="text"
                  name="incomeTitle"
                  id="incomeTitle"
                  v-model="income.incomeT"
                />
              </div>
              <div>
                <label for="incomeAmount">Montant</label>
                <input
                  type="number"
                  name="incomeAmount"
                  id="incomeAmount"
                  min="0"
                  v-model="income.incomeA"
                />
              </div>
            </div>
            <button
              type="submit"
              class="btn primary my-3"
              :disabled="toggleIncomeIsDisabled"
            >
              Ajouter
            </button>
          </form>
          <div
            class="flex"
            v-for="(incomeItem, index) in incomeList"
            :key="index"
          >
            <button type="button" @click="deleteIncome(incomeItem)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-amber-600 pr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p>{{ incomeItem.incomeT }}</p>
            <p class="ml-auto text-right font-semibold">
              {{ incomeItem.incomeA }} €
            </p>
          </div>
        </div>
        <div class="mx-auto">
          <form class="border-b border-b-gray-300" @submit.prevent="addExpense">
            <h2 class="text-xl font-semibold">Sorties</h2>
            <div class="form-control input flex gap-x-4">
              <div>
                <label for="expenseTitle">Titre</label>
                <input
                  type="text"
                  name="expenseTitle"
                  id="expenseTitle"
                  v-model="expense.expenseT"
                />
              </div>
              <div>
                <label for="expenseAmount">Montant</label>
                <input
                  type="number"
                  name="expenseAmount"
                  id="expenseAmount"
                  min="0"
                  v-model="expense.expenseA"
                />
              </div>
            </div>
            <button
              type="submit"
              class="btn primary my-3"
              :disabled="toggleExpenseIsDisabled"
            >
              Ajouter
            </button>
          </form>
          <div
            class="flex"
            v-for="(expenseItem, index) in expenseList"
            :key="index"
          >
            <button type="button" @click="deleteExpense(expenseItem)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-amber-600 pr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p>{{ expenseItem.expenseT }}</p>
            <p class="ml-auto text-right font-semibold">
              {{ expenseItem.expenseA }} €
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center border-t-2 border-t-green-600">
        <p
          class="text-2xl font-semibold my-2"
          :class="{ 'text-red-500': calculateBalance < 0 }"
        >
          {{ calculateBalance }} €
        </p>
      </div>
    </main>
  </div>
</template>

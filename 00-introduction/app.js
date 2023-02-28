// Ecriture "old school"
const { createApp } = Vue

  createApp({
    // Donnée dynamique
    data() {
      return {
        msg: 'Hello Vue world!'
      }
    },
    methods: {
        alertMsg() {
            alert(`Voici le message: ${this.msg}`)
        }
    }
  }).mount('#app')
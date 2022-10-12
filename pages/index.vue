<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-beige">
    <div class="my-12 text-center">
      <h1 class="font-brand text-uppercase font-black text-persian text-4xl my-2">Bric A Brac</h1>
      <p class="text-persian w-1/2 mx-auto">Bric à brac est un calendrier en ligne des salons d'édition. Vous pouvez y référencer vos salons de micro-édition, d'éditions indépendantes, salons anarchistes, queer fairs etc...</p>
    </div>
    <Agenda :events="events.results"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Agenda from '~/components/Agenda.vue'
  
  
  export default Vue.extend({
    name: "IndexPage",
    
    components: { Agenda },
    async asyncData({ $axios }) {
      const events = await $axios.$post("https://api.notion.com/v1/databases/f50d073e296d4013b0d91b731e3d7d25/query", {});
      return { events };
    },
  })
</script>

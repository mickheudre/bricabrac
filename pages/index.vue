<template>
  <div class="min-h-screen flex justify-center items-center bg-beige">
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

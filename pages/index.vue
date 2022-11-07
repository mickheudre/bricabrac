<template>
  <div class="">         
    <div class="w-full p-8 lg:p-16 flex flex-col">
    <h1 class="font-brand text-uppercase font-black text-persian text-2xl my-2">Bric A Brac</h1>
    <Page :page="presentation" class="text-persian lg:w-1/2 xl:w-1/3" />
  </div>
  <div class="flex flex-col  items-center bg-beige mt-4 2xl:mt-16 ">
    <Agenda class="w-full lg:w-2/3 2xl:w-1/2 px-8" :events="events.results"/>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Agenda from '~/components/Agenda.vue'
import Page from '~/components/Notion/Page.vue'

export default Vue.extend({
  name: "IndexPage",
  
  components: { Agenda, Page },
  async asyncData({ $axios }) {
    
    const data = {
      "sorts": [
      {
        "property": "Date",
        "direction": "descending"
      }
      ]
    }
    const presentation = await $axios.$get(
      'https://api.notion.com/v1/blocks/89240a605f874d829e703cb564032c25/children',
      {}
    )
    console.log(presentation)
    
    const events = await $axios.$post("https://api.notion.com/v1/databases/f50d073e296d4013b0d91b731e3d7d25/query", data );
    return { presentation, events };
  },
})
</script>

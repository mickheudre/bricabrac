<template>
    <div class="flex flex-col items-center justify-center">
        <table class="table-fixed text-persian w-full md:w-2/3 xl:w-1/3">
            <thead class="my-2">
                <tr class="text-left bg-persian text-beige mb-12">
                    <th class="px-6 py-2 uppercase text-lg" >Événement</th>
                    <th class="px-6 py-2 w-1/4 uppercase text-lg">Ville</th>
                    <th class="px-6 py-2 w-1/4 uppercase text-lg">Date</th>
                </tr>
            </thead>
            <tbody class="">
                <tr v-for="event in events" :key="event.id">
                    <td class="px-6 py-2 underline">{{ event.properties.Name.title[0].plain_text }}</td>
                    <td class="px-6 py-2">{{ event.properties.Ville.rich_text[0].plain_text }}</td>
                    <td class="px-6 py-2">{{ event.properties.Date.date.start.split('T')[0] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    
    export default Vue.extend({
        name: "Agenda",
        props: ["events"]
        
    })
</script>
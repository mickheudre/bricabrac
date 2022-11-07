<template>
    <div class="flex flex-col items-center justify-center">
        <table class="table-fixed text-persian w-full">
            <thead class="my-2">
                <tr class="text-left bg-persian text-beige mb-12">
                    <th class="px-6 py-2 uppercase text-lg font-brand font-black" >Événement</th>
                    <th class="px-6 py-2 w-1/4 uppercase text-lg font-brand font-black">Ville</th>
                    <th class="px-6 py-2 w-1/3 uppercase text-lg font-brand font-black">Date</th>
                </tr>
            </thead>
            <tbody class="">
                <tr v-for="event in events" :key="event.id">
                    <td class="px-6 py-2 underline"><a :href="event.properties.URL.url"> {{ event.properties.Name.title[0].plain_text }}</a></td>
                    <td class="px-6 py-2">{{ event.properties.Ville.rich_text[0].plain_text }}</td>
                    <td class="px-6 py-2 capitalize"> {{dateToString(event.properties.Debut.formula.date.start)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    
    export default Vue.extend({
        name: "Agenda",
        props: ["events"],
        methods: {
            dateToString(date : string) {
                const event = new Date(date)
                return event.toLocaleDateString('fr-FR', { weekday: "long", year: "numeric", month: "long", day: "numeric" })
            }
        }
        
    })
</script>
<template>
    <div class="min-h-screen flex flex-col justify-center items-center">
        <NuxtLink to="/">Retour</NuxtLink>
        <h1>{{ event.properties.Name.title[0].plain_text }}</h1>
        <p>{{ event.properties.Ville.rich_text[0].plain_text }}  {{ event.properties.Lieu.rich_text[0].plain_text }} </p>
        <p>{{ dateToString(event.properties.Date.date.start, event.properties.Date.date.end) }} </p>
        <p>{{ event.properties.Description.rich_text.length > 0 ? event.properties.Description.rich_text[0].plain_text : "" }} </p>
        <p><a :href="event.properties.URL.url">{{ event.properties.URL.url }}</a> </p>




    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    
    export default Vue.extend({
        async asyncData({ params, $axios }) {
            const slug = params.event 
            const events = await $axios.$post("https://api.notion.com/v1/databases/f50d073e296d4013b0d91b731e3d7d25/query", {});
            
            const event = events.results.find( (item : any) : boolean => {
                return item.properties.Slug.formula.string === slug
            })
            console.log((event.properties.Date.date) )
            return { slug, event }
        },
        methods: {
            dateToString(startDate : string, endDate: string) {
                const startEvent = new Date(startDate)
                const endEvent = new Date(endDate)
                
                if (!endDate) {
                    return startEvent.toLocaleDateString('fr-FR', { weekday: "long", year: "numeric", month: "long", day: "numeric" })
                }
                if (startEvent.toDateString() == endEvent.toDateString()) {
                    return startEvent.toLocaleDateString('fr-FR', { weekday: "long", year: "numeric", month: "long", day: "numeric" })
                }
                
                return `${startEvent.toLocaleDateString('fr-FR', { weekday: "long", year: "numeric", month: "long", day: "numeric" })} - ${endEvent.toLocaleDateString('fr-FR', { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`
            }
        }
    })
</script>
<template>
    <div>
        <NuxtLink to="/">Retour</NuxtLink>
        <h1>{{ event.properties.Name.title[0].plain_text }}</h1>
        <p>{{ event.properties.Ville.rich_text[0].plain_text }} </p>
        <p>{{ event.properties.Date.date.start }} </p>
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
            
            const event = events.results.find( item => {
                return item.properties.Slug.formula.string === slug
            })
            return { slug, event }
        }
    })
</script>
<template>
    <div class="flex flex-col items-center justify-center">
        <table class="table-fixed text-persian w-full">
            <thead class="my-2">
                <tr class="text-left bg-persian border-4 border-persian text-beige mb-12">
                    <th class="px-4 md:px-6 py-2 uppercase text-lg font-brand font-black md:w-1/2" >Événement</th>
                    <th class="px-4 md:px-6 py-2 uppercase text-lg font-brand font-black">Ville</th>
                    <th class="px-4 md:px-6 py-2 uppercase text-lg font-brand font-black">Date</th>
                </tr>
            </thead>
            <tbody class="">
                <tr v-for="event in data.results" :key="event.id">
                    <template v-if="!event.properties.Fini.formula.boolean">
                        <td  class="px-4 md:px-6 py-2  h-16 underline"><a target="_blank" rel="noopener" :href="event.properties.URL ? event.properties.URL.url :  '/'"> {{ event.properties.Name.title[0].plain_text }} </a> </td>
                        <td  class="px-4 md:px-6 py-2 h-16">{{ event.properties.Ville.rich_text[0].plain_text }}</td>
                        <td  class="px-4 md:px-6 py-2 capitalize h-16"> {{ dateToString(event.properties.Date.date) }} </td>
                    </template>
                </tr>
            </tbody>
        </table>
        <table class="table-fixed text-persian w-full mt-16">
            <thead class="my-2">
                <tr>
                    <th class="md:w-1/2"></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr class="text-left border-2 border-persian text-persian mb-12">
                    <th colspan=3 class="px-6 py-2 uppercase text-lg font-brand font-black text-center">Passé</th>
                </tr>                   
            </thead>
            <tbody class="">
                <tr  v-for="event in dataReverse" :key="event.id">
                    <template v-if="event.properties.Fini.formula.boolean">
                        <td  class="px-4 md:px-6 py-2 underline h-16"><a target="_blank" rel="noopener"  :href="event.properties.URL.url"> {{ event.properties.Name.title[0].plain_text }}</a></td>
                        <td  class=" w-1/4 px-4 md:px-6 py-2 h-16">{{ event.properties.Ville.rich_text[0].plain_text }}</td>
                        <td  class="w-1/3 px-4 md:px-6 py-2 capitalize h-16"> {{ dateToString(event.properties.Date.date) }}</tD>
                        </template>
                    </tr>
                </tbody>
            </table>
            
        </div>
    </template>
    
    <script setup lang="ts">
    
    const { data }  = await useFetch("https://api.notion.com/v1/databases/f50d073e296d4013b0d91b731e3d7d25/query",
    {
        body: {
            "sorts": [
            {
                "property": "Date",
                "direction": "ascending"
            }
            ]
        },
        method: "POST",
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
        }
    })
    
    const dataReverse = [...data.value.results].reverse()
    
    const dateToString = (date : any) => {
        const eventStart = new Date(date.start)
        
        if (date.end != null) {
            const eventEnd = new Date(date.end)
            if (eventStart.getMonth() === eventEnd.getMonth()) {
                
                if (eventStart.getDay() === eventEnd.getDay()) {
                    return eventStart.toLocaleDateString('fr-FR', { weekday: "short", year: "numeric", month: "long", day: "numeric" })
                }
                
                return eventStart.toLocaleDateString('fr-FR', { weekday: "short", day: "numeric" }) + " → " + eventEnd.toLocaleDateString('fr-FR', { weekday: "short", year: "numeric", month: "long", day: "numeric" }) 
                
            }
            return eventStart.toLocaleDateString('fr-FR', { weekday: "short", year: "numeric", month: "long", day: "numeric" }) + "→" + eventEnd.toLocaleDateString('fr-FR', { weekday: "short", year: "numeric", month: "long", day: "numeric" }) 
            
        }
        return eventStart.toLocaleDateString('fr-FR', { weekday: "short", year: "numeric", month: "long", day: "numeric" })
    }
    
</script>
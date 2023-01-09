<template>
    <form class="max-w-lg md:mx-auto mx-8">
        <h2 class="mb-8 pt-16 font-brand text-persian text-3xl ">Ajouter un évenement</h2>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <label class="block text-persian text-sm font-semibold mb-2" for="grid-first-name">
                    Nom de l'évenement
                </label>
                <input class="appearance-none block w-full bg-beige text-persian border border-persian rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" v-model="name" type="text">
            </div>
            <div class="w-full mb-6 px-3">
                <label class="block text-persian text-sm font-semibold mb-2" for="grid-last-name">
                    Dates
                </label>
                <div class="block w-full" >
                    <input type="date" id="start" class="appearance-none   bg-beige text-persian  border border-persian rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  v-model="start" >
                    <span class="text-persian">-</span>
                    <input type="date" id="end"  class="appearance-none  bg-beige text-persian  border border-persian rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  v-model="end" >
                </div>
            </div>
            <div class="w-full mb-6 px-3">
                <label class="block text-persian text-sm font-semibold mb-2" for="grid-last-name">
                    Ville
                </label>
                <input class="appearance-none block w-full bg-beige text-persian  border border-persian rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" v-model="city" type="text">
            </div>
            <div class="w-full mb-6 px-3">
                <label class="block text-persian text-sm font-semibold mb-2">
                    Lien 
                </label>
                <input class="appearance-none block w-full bg-beige text-persian border border-persian rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="link" v-model="link" type="text">
            </div>
            <div class="w-full mb-6 px-3">
                <label class="block text-persian text-sm font-semibold mb-2">
                    Mail des organisateur.rice.s
                </label>
                <input class="appearance-none block w-full bg-beige text-persian border border-persian rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" v-model="email" type="email">
            </div>
        </div>
        <div class="md:flex md:items-center">
            <div class="md:w-1/2">
                <button  @click="send" data-cabin-event="request-new-event" class="bg-persian text-beige font-bold pt-3 pb-4 px-4 rounded" type="button">
                    Ajouter l'évenement
                </button>
            </div>
            <div class="md:w-2/3"></div>
        </div>
    </form>
</template>

<script>
export default {
    data: function() {
        return {
            errors: [],
            name: null,
            city: null,
            start: null,
            end: null,
            email: null,
            link: null
        }
    },
    methods: {
        send() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({name: this.name, city: this.city, start: this.start, end: this.end, link: this.link, email: this.email})
            };
            fetch("/api/contribuer", requestOptions)
            .then((response) => {
                if (response.status === 200) {
                    this.$router.push({
                        path: '/success'
                    })
                }
            })
        }
    }
}
</script>
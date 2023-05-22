<template>
    <div class="h-full bg-beige">
        <div class="py-4">
            <NuxtLink to="/" class="text-persian underline mx-8 mt-12">← Retour au site</NuxtLink>
        </div>
        <form class="max-w-lg md:mx-auto mx-8">
            <h2 class="mb-8 pt-4 sm:pt-16 font-brand text-persian text-3xl ">Proposer un évènement</h2>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block text-persian text-md font-bold mb-2" for="grid-name">
                        Nom de l'événement
                    </label>
                    <input class="appearance-none block w-full bg-beige text-persian border border-persian rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" v-model="formData.name" type="text">
                </div>
                <div class="w-full mb-4 px-3">
                    <div class="flex mb-2 items-center" >
                        <label class="block text-persian text-md font-bold mr-4"  for="grid-last-name">
                            Date
                        </label>
                        <span :class="showEndDate ? 'hidden' : ''" class="italic text-persian text-sm" @click="displayEndDate()">Ajouter une date de fin</span>
                        <span :class="showEndDate ? '' : 'hidden'" class="italic text-persian text-sm" @click="showEndDate = false">Supprimer la date de fin</span>
                        
                    </div>
                    <div class="block w-full" >
                        <input type="date" ref="startDatePicker"  class="appearance-none bg-beige text-persian  border border-persian rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  v-model="formData.start" >
                        <span :class="showEndDate ? '' : 'hidden'" class="text-persian">-</span>
                        <input type="date" ref="endtDatePicker"  :class="showEndDate ? '' : 'hidden'"  class="appearance-none bg-beige text-persian  border border-persian rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  v-model="formData.end" >
                    </div>
                </div>
                <div class="w-full mb-4 px-3">
                    <label class="block text-persian text-md font-bold mb-2" for="grid-last-name">
                        Ville
                    </label>
                    <input class="appearance-none block w-full bg-beige text-persian  border border-persian rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" v-model="formData.city" type="text">
                </div>
                <div class="w-full mb-4 px-3">
                    <label class="block text-persian text-md font-bold mb-2">
                        Lien 
                    </label>
                    <input class="appearance-none block w-full bg-beige text-persian border border-persian rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="link" v-model="formData.link" type="text">
                </div>
                <div class="w-full mb-4 px-3">
                    <div>
                        <label class="block text-persian text-md font-bold mb-2">
                            Mail des organisateur.rice.s
                        </label>
                        <span></span>
                    </div>
                    <input class="appearance-none block w-full bg-beige text-persian border border-persian rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" v-model="formData.email" type="email">
                </div>
            </div>
            <div class="flex items-center">
                <button @click="send" data-cabin-event="request-new-event" 
                class="bg-persian text-beige font-bold pt-3 pb-4 px-4 mr-4 rounded"
                :class="running || !readyToSubmit ? 'opacity-50' : ''" 
                :disabled="running || !readyToSubmit"
                type="button">
                Proposer l'événement
            </button>
            <Spinner class="text-persian mx-4" :class="running ? 'block' : 'hidden'"/>
        </div>
    </form>
</div>
</template>

<script setup lang="ts">

const dateToYMD = (date : Date) => {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}
const formData = ref( {
    name: "",
    city: "",
    start: dateToYMD( new Date()),
    end: "",
    email: "",
    link: "",
})      
const errors = []

const showEndDate = ref(false)
const running = ref(false)


const readyToSubmit = computed(() => {
    return formData.value.name.length > 0 &&
    formData.value.city.length > 0 &&
    formData.value.link.length > 0 && 
    formData.value.email.length > 0
})


const displayEndDate = () =>{
    formData.value.end = formData.value.start;
    showEndDate.value = true;
}
const send = () => {
    if (running.value) {
        return;
    }
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData.value)
    };
    running.value = true;
    fetch("/api/contribuer", requestOptions)
    .then((response) => {
        if (response.status === 200) {
            running.value = false;
            useRouter().push({
                path: '/success'
            })
        }
    })
}

</script>
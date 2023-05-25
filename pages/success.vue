<template>
    <div class="h-full text-persian bg-beige max-w-screen">`

        <div class="mx-auto my-auto h-full max-w-md">
        <div class="flex flex-col justify-center content-center items-center px-4 h-screen">
            <h3 class="text-2xl my-4 font-brand">Votre demande a bien été enregistrée</h3>
            <p>Votre événement sera ajouté à l'agenda rapidement. Il peut y avoir un délai de quelques jours. N'hésitez pas à nous contacter en cas de problème.</p>
            <NuxtLink class="underline my-4" to="/">Retour au site</NuxtLink >
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">

useHead({
      meta: [
      { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }) 
</script>
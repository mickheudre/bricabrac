<template>
  <div class="bg-beige">    
      <div class="w-full p-4 md:p-8 lg:p-16 flex flex-col">
        <h1 class="font-brand text-uppercase font-black text-persian text-3xl md:my-2">Bric A Brac</h1>
        <NotionPage :page="presentation" class="text-persian lg:w-1/2 xl:w-1/3" />
      </div>
      <div class="flex flex-col  items-center bg-beige mt-4 2xl:mt-16 ">
        <Agenda class="w-full lg:w-2/3 2xl:w-1/2 px-2 md:px-8 pb-32" />
      </div>
  </div>
</template>

<script setup lang="ts">
    const {data: presentation} = await useFetch(
    'https://api.notion.com/v1/blocks/89240a605f874d829e703cb564032c25/children', {
      headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
        }
    })
</script>


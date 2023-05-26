<template>
      <footer class="w-full bg-persian flex sm:flex-row flex-col justify-between px-4 md:px-8 lg:px-16 py-4">
        <NotionPage class="text-beige text-sm md:w-1/4 lg:w-1/3" :page="presentation" />
        <NotionPage class="text-beige text-sm md:w-1/4" :page="confidentialite" />
    </footer>
</template>

<script setup lang="ts">
    const {data: presentation} = await useFetch(
    'https://api.notion.com/v1/blocks/fb1ca01e8dc74477b2d0b4b8024baeb6/children', {
      headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
        }
    })

    const {data: confidentialite} = await useFetch(
    'https://api.notion.com/v1/blocks/c2a02668237b4658a2edeca5d156b00f/children', {
      headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
        }
    })
</script>
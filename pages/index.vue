<template>
  <div class="bg-beige max-w-screen overflow-hidden">
    <div class="marquee bg-persian text-beige flex px-8 py-2  "> 
            <div class="marquee__inner" aria-hidden="true"> 
                <a  href="grenobletypoclub.bricabrac.space" class=" w-max" v-for="item in 12"> 
                    Grenoble Typo Club ouvre ses portes<span class="px-2">-</span> 
                </a> 
            </div> 
        </div> 
      <div class="w-full p-4 md:p-8 lg:p-16 flex flex-col">
        <h1 class="font-brand text-uppercase font-black text-persian text-3xl md:my-2">Bric A Brac</h1>
        <NotionPage :page="presentation" class="text-persian lg:w-1/2 xl:w-1/3" />
      </div>
      <div class="flex flex-col  items-center bg-beige mt-4 2xl:mt-16 ">
        <Agenda class="w-full lg:w-2/3 2xl:w-1/2 px-2 md:px-8 pb-32" />
      </div>
      <Footer />
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

 
<style> 
.marquee { 
    position: relative; 
    overflow: hidden; 
    @media (min-width: 768px) { 
        transform: translate(33%, 0) rotate(45deg); 
    }; 
 
    @media (min-width: 1280px) {      
        transform: translate(40%, 0) rotate(45deg); 
    }; 
    --offset: 20vw; 
    --move-initial: calc(-25% + var(--offset)); 
    --move-final: calc(-50% + var(--offset)); 
} 
 
.marquee__inner { 
    width: fit-content; 
    display: flex; 
    position: relative; 
    transform: translate3d(var(--move-initial), 0, 0); 
    animation: marquee 7s linear infinite; 
} 
 

@keyframes marquee { 
    0% { 
        transform: translate3d(var(--move-initial), 0, 0); 
    } 
     
    100% { 
        transform: translate3d(var(--move-final), 0, 0); 
    } 
} 
 
 
</style>
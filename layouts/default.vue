<template>
    <div class="bg-beige min-h-screen max-w-screen overflow-hidden">
        <div class="marquee bg-persian text-beige flex px-8 py-2  ">
            <div class="marquee__inner" aria-hidden="true">
                <a  href="grenobletypoclub.bricabrac.space" class=" w-max" v-for="item in 12">
                    Grenoble Typo Club ouvre ses portes<span class="px-2">-</span>
                </a>
            </div>
        </div>
        <Nuxt />
    </div>
    
</template>

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
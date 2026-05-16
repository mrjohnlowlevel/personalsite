<div
    id="carousel"
    class="text-4xl bg-red-400 p-1 font-mono uppercase shadow shadow-neutral-900 overflow-hidden"
>
    <div
        aria-hidden="true"
        id="group"
        class="w-max flex gap-0 animate-carousel"
    >
        {#each Array(2) as _, i}
            <span class="flex-[0_0_400px]">Hello, World!</span>
            <span class="flex-[0_0_400px]">Guten Tag, Welt!</span>
            <span class="flex-[0_0_400px]">Bonjour, le monde!</span>
        {/each}
    </div>
</div>

<style>
    #carousel {
        scrollbar-width: none;
    }

    #carousel::-webkit-scrollbar {
        display: none;
    }
</style>

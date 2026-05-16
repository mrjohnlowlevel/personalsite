<script lang="ts">
    const discord_user: string = "ushba_tesoro";
</script>

<div class="bg-crimson p-4 rounded-t"></div>
<div class="bg-[#6f0016]">
    <h1 class="pt-2 pl-2 text-2xl font-mono uppercase text-white">
        My socials
    </h1>
    <ul class="ml-2">
        <li>
            <a
                href="https://github.com/mrjohnlowlevel"
                target="_blank"
                rel="noreferrer noopener"
                ><span
                    class="text-gray-400 transition-colors duration-200 hover:text-green-200"
                    >▷ Github: mrjohnlowlevel</span
                >
            </a>
            <p
                id="dc"
                class="text-blue-800 transition-colors duration-200 hover:text-green-200"
            >
                ▷ Discord: {discord_user}
            </p>
        </li>
    </ul>

    <br />
    <a href="https://svelte.dev/" target="_blank" rel="noreferrer noopener"
        ><p
            class="font-extralight transition-colors duration-200 hover:text-orange-500"
        >
            Made with Svelte (because I'm not a coward)
        </p></a
    >
</div>

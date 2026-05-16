<script lang="ts">
    const discord_user: string = "ushba_tesoro";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(discord_user)
            .then(() => alert("Copied to clipboard!"))
            .catch((err) => alert(`Error! Reason ${err}`));
    };
</script>

<div class="bg-crimson p-4 rounded-t"></div>
<div class="bg-[#6f0016] p-4 text-white">
    <h1 class="text-2xl font-mono uppercase mb-2">
        My socials
    </h1>
    <ul class="space-y-1">
        <li>
            <a href="https://github.com/mrjohnlowlevel" target="_blank" rel="noreferrer noopener" class="text-gray-400 transition-colors duration-200 hover:text-green-200">
                ▷ Github: mrjohnlowlevel
            </a>
        </li>
        <li>
            <button onclick={copyToClipboard} class="text-blue-400 transition-colors duration-200 hover:text-green-200 text-left">
                ▷ Discord: {discord_user}
            </button>
        </li>
    </ul>

    <br />
    <a href="https://svelte.dev/" target="_blank" rel="noreferrer noopener" class="inline-block mt-4 text-sm font-extralight transition-colors duration-200 hover:text-orange-500">
        Made with Svelte (because I'm not a coward)
    </a>
</div>
<script lang="ts">
    const cards = [
        {
            title: "My Interest",
            list: ["Coding", "Cooking", "Horse Racing", "Music"],
        },
        {
            title: "Computer Langs I know",
            list: ["C", "Rust", "Typescript", "Python"],
        },
        {
            title: "Games I play",
            list: ["Uma Musume"],
        },
        {
            title: "Artist I like",
            list: ["Anzen Chitai", "Fujii Kaze", "Ken Hirai", "Anri"],
        },
    ];
</script>

<div id="background" class="bg-[#7a91b0] shadow shadow-black">
    <hr />
    <div id="interest-lists" class="ml-4 m-4 grid grid-cols-2 gap-4">
        <!--START LISTS-->

        {#each cards as card}
            <div
                class="border w-full h-full p-2 rounded bg-white shadow shadow-black hover:scale-105 transition-transform duration-300"
            >
                <h1 class="text-2xl">{card.title}</h1>
                <ul>
                    {#each card.list as item}
                        <li>- {item}</li>
                    {/each}
                </ul>
            </div>
        {/each}

        <!--END LISTS-->
    </div>
    <hr />
</div>

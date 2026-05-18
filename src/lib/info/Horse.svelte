<!-- My top 5 horses lolol -->
<script lang="ts">
    import type { HorseData } from "../../util/types";

    const horses: HorseData[] = [
        {
            name: "Forever Young",
            s: 1,
            wiki: "https://en.wikipedia.org/wiki/Forever_Young_(horse)",
            nation: "🇯🇵",
            major_wins: [
                "Zen Nippon Nisai Yushun",
                "Saudi Derby",
                "UAE Derby",
                "Japan Dirt Classic",
                "Tokyo Daishoten",
                "Saudi Cup (2x)",
                "Nippon TV Hai",
                "Breeders' Cup Classic",
            ],
        },
        {
            name: "Chrono Genesis",
            s: 0,
            wiki: "https://en.wikipedia.org/wiki/Chrono_Genesis",
            nation: "🇯🇵",
            major_wins: [
                "Ivy Stakes",
                "Queen Cup",
                "Kyoto Kinen",
                "Shuka Sho",
                "Takarazuka Kinen (2x)",
                "Arima Kinen",
            ],
        },
        {
            name: "Romantic Warrior",
            s: 0,
            wiki: "https://en.wikipedia.org/wiki/Romantic_Warrior_(horse)",
            nation: "🇭🇰",
            major_wins: [
                "Hong Kong Classic Mile",
                "Hong Kong Derby",
                "QEII Cup (4x)",
                "Jockey Club Cup (3x)",
                "Hong Kong Cup (4x)",
                "Cox Plate",
                "Hong Kong Gold Cup (2x)",
                "Yasuda Kinen",
                "Jebel Hatta",
                "Stewards' Cup",
            ],
        },
        {
            name: "White Abarrio",
            s: 0,
            wiki: "https://en.wikipedia.org/wiki/White_Abarrio",
            nation: "🇺🇸",
            major_wins: [
                "Holy Bull Stakes",
                "Florida Derby",
                "Whitney Stakes",
                "Ghostzapper Stakes",
                "Breeders' Cup Classic",
                "Pegasus World Cup",
                "Oaklawn Handicap"
            ],
        },
        {
            name: "Daryz",
            s: 0,
            wiki: "https://en.wikipedia.org/wiki/Daryz",
            nation: "🇫🇷",
            major_wins: ["Prix Eugène Adam","Prix de l'Arc De Triomphe", "Prix Ganay"],
        },
    ];
</script>

<div class="mt-10 shadow shadow-black rounded-2xl">
    <div class="bg-[#70a0e0] rounded-t-2xl p-2 border">
        <h1 class="font-bold text-2xl text-center">My Top 5 Favourite Racehorses</h1>
    </div>

    <div
        id="horses"
        class="bg-[#7a91b0] rounded-b-2xl p-5 border flex flex-col gap-5"
    >
        {#each horses as horse}
            {#if horse.s == 1}
                <a
                    href={horse.wiki}
                    target="_blank"
                    rel="noreferrer noopener"
                    class="w-full flex justify-center"
                >
                    <div
                        class="border w-full max-w-md p-4 rounded bg-white shadow shadow-black hover:scale-105 transition-transform duration-300"
                    >
                        <p class="text-center font-bold">
                            {horse.name} [{horse.nation}]
                        </p>
                        <hr class="my-2" />
                        <h2 class="font-semibold">Major Wins:</h2>
                        <ul>
                            {#each horse.major_wins as win}
                                <li class="list-disc list-inside text-sm">
                                    {win}
                                </li>
                            {/each}
                        </ul>
                    </div>
                </a>
            {/if}
        {/each}

        <div class="grid grid-cols-2 gap-5 items-stretch">
            {#each horses as horse}
                {#if horse.s != 1}
                    <a
                        href={horse.wiki}
                        target="_blank"
                        rel="noreferrer noopener"
                        class="flex h-full w-full"
                    >
                        <div
                            class="border w-full h-full p-4 rounded bg-white shadow shadow-black hover:scale-105 transition-transform duration-300 flex flex-col"
                        >
                            <p class="text-center font-bold">
                                {horse.name} [{horse.nation}]
                            </p>
                            <hr class="my-2" />
                            <h2 class="font-semibold">Major Wins:</h2>
                            <ul class="grow">
                                {#each horse.major_wins as win}
                                    <li class="list-disc list-inside text-sm">
                                        {win}
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </a>
                {/if}
            {/each}
        </div>
    </div>
</div>

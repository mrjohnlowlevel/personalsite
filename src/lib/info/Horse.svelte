<!--My top 5 horses lolol-->

<script lang="ts">
    // s = king num. 1 = top, 0 rest
    const horses = [
        {
            name: "Forever Young",
            s: 1,
            wiki: "https://en.wikipedia.org/wiki/Forever_Young_(horse)",
            nation: "🇯🇵",
            major_wins: [
                "Zen Nippon Nisai Yushun",
                "Japan Dirt Classic",
                "Tokyo Daishoten",
                "Saudi Cup (2x)",
                "Breeders' Cup Classic",
            ],
        },
        {
            name: "Chrono Genesis",
            s: 0,
            wiki: "https://en.wikipedia.org/wiki/Chrono_Genesis",
            nation: "🇯🇵",
            major_wins: [
                "Shuka Sho",
                "Takarazuka Kinen (2x)",
                "Arima Kinen)",
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
                "Florida Derby",
                "Whitney Stakes",
                "Breeders' Cup Classic",
                "Pegasus World Cup",
            ],
        },
        {
            name: "Daryz",
            s: 0,
            wiki: "https://en.wikipedia.org/wiki/Daryz",
            nation: "🇫🇷",
            major_wins: [
                "Prix de l'Arc De Triomphe",
                "Prix Ganay",
            ],
        },
    ];
</script>

<div class="mt-10 shadow shadow-black rounded-2xl">
    <div class="bg-crimson rounded-t-2xl p-2">
        <h1 class="font-bold text-2xl text-center">My Top 5 Racehorses</h1>
    </div>
    <div id="horses" class="bg-amber-900 rounded-b-2xl p-5">
        {#each horses as horse}
            {#if horse.s == 1}
                <a href={horse.wiki}>
                    <div class="flex justify-center">
                        <div
                            class="border w-fit h-fit p-4 rounded bg-white shadow shadow-black hover:scale-105 transition-transform duration-300"
                        >
                            <p class="text-center">
                                {horse.name} [{horse.nation}]
                            </p>
                            <hr />
                            <h2>Major Wins:</h2>
                            <ul>
                                {#each horse.major_wins as win}
                                    <li>- {win}</li>
                                {/each}
                            </ul>
                        </div>
                    </div></a
                >
            {/if}
        {/each}

        <div class="grid grid-cols-2 gap-5 justify-items-center">
            {#each horses as horse}
                {#if horse.s != 1}
                    <a href={horse.wiki}
                        ><div
                            class="border w-fit h-fit p-4 rounded bg-white shadow shadow-black hover:scale-105 transition-transform duration-300"
                        >
                            <p class="text-center">
                                {horse.name} [{horse.nation}]
                            </p>
                            <hr />
                            <h2>Major Wins:</h2>
                            <ul>
                                {#each horse.major_wins as win}
                                <li>- {win}</li>
                                {/each}
                            </ul>
                        </div></a
                    >
                {/if}
            {/each}
        </div>
    </div>
</div>

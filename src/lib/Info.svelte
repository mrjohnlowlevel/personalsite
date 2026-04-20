<script>
    import { fade } from "svelte/transition";

    const gifs = [
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW1mdmJwN2RjeWljaDRwY2plN3pnZDJubXA0emtubWdsdWozNmozdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dwo8ReUwBZpLekoyWl/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZqbGJhNzh2eWQ0cmFiMHhnZ3R5eW0yd2NjdHAxdTV2Z3pmd3hlZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0x4EWpH7bmpd92geYb/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG9vOXNvdTFmdXJ4cWYxZnU5Y2djOG1zc2h6b216bnd6MnJjeDB0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SgcYznFN1KpkfWS9eP/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTh1dGY2bzgweTFpdW96MWRuY3ZtOW5uZjA4enZyaTVjcXAzd3J0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aUe4b0CuV4nXq9ZpDt/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmR2b2N0ajBma3FxOXBvYzVqYmF6emxsZWhxNzhhMWZsd3V0ZWMzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1IxfBx0jyAnK3z6Ots/giphy.gif",
    ];

    const randomNumber = Math.floor(Math.random() * gifs.length);

    let selected_gif = gifs[randomNumber];
</script>

<div id="information">
    <!--START BLOCK INFO-->

    <div
        transition:fade={{ delay: 200, duration: 300 }}
        id="brief"
        class="grid grid-cols-1 md:grid-cols-3 content-stretch gap-3 mb-5 justify-items-center"
    >
        <h1 class="text-center text-[20px] md:text-[50px] font-bold">My name is Wunderbar!</h1>
        <a href="https://en.wikipedia.org/wiki/Chrono_Genesis" target="_blank" rel="noreferrer noopener">
            <img
                src={selected_gif}
                loading="eager"
                alt="Random GIF"
                class="rounded shadow shadow-black hover:scale-105 transition-transform duration-300"
            />
        </a>

        <a href="https://www.racingpost.com/results/444/del-mar/2025-11-01/906888" target="_blank" rel="noreferrer noopener">
            <img
                alt="Forever Young 2025 Breeders' Cup Classic"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElPd6htVM-0usm89ntbBQhW74qpmSN71nNA&s"
                loading="eager"
                class="rounded shadow shadow-black hover:scale-105 transition-transform duration-300"
            />
        </a>
    </div>

    <div id="background" class="bg-[#7a91b0] shadow shadow-black">
        <hr />
        <div id="interest-lists" class="ml-4 m-4 grid grid-cols-2 gap-4">
            <!--START LISTS-->

            <div id="interest" class="border w-fit p-2 rounded bg-white shadow shadow-black hover:scale-105 transition-transform duration-300">
                <h1 class="text-2xl">My Interest:</h1>
                <ul>
                    {#each ["Coding", "Cooking", "Horse Racing", "Music"] as interest}
                        <li>- {interest}</li>
                    {/each}
                </ul>
            </div>

            <div id="languages" class="border w-fit p-2 rounded bg-white shadow shadow-black hover:scale-105 transition-transform duration-300">
                <h1 class="text-2xl">Computer Languages I know:</h1>
                <ul>
                    {#each ["C", "Rust", "Typescript", "Python"] as lang}
                        <li>- {lang}</li>
                    {/each}
                </ul>
            </div>

            <div id="games" class="border w-fit p-2 rounded bg-white shadow shadow-black hover:scale-105 transition-transform duration-300">
                <h1 class="text-2xl">Games I play:</h1>
                <ul>
                    <li>- Uma Musume</li>
                </ul>
            </div>

            <div id="artist" class="border w-fit p-2 rounded bg-white shadow shadow-black hover:scale-105 transition-transform duration-300">
                <h1 class="text-2xl">Artists I listen to:</h1>
                <ul>
                    {#each ["Anzen Chitai", "Fujii Kaze", "Ken Hirai", "Anri"] as artist}
                        <li>- {artist}</li>
                    {/each}
                </ul>
            </div>

            <!--END LISTS-->
        </div>
        <hr />
    </div>

    <!--END BLOCK INFO-->
</div>

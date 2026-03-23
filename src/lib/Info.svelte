<script>
    import { fade } from "svelte/transition";

    const gifs = [
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW1mdmJwN2RjeWljaDRwY2plN3pnZDJubXA0emtubWdsdWozNmozdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dwo8ReUwBZpLekoyWl/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZqbGJhNzh2eWQ0cmFiMHhnZ3R5eW0yd2NjdHAxdTV2Z3pmd3hlZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0x4EWpH7bmpd92geYb/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG9vOXNvdTFmdXJ4cWYxZnU5Y2djOG1zc2h6b216bnd6MnJjeDB0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SgcYznFN1KpkfWS9eP/giphy.gif",
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
        <p class="text-center font-bold">My name is Wunderbar!</p>
        <a href="https://en.wikipedia.org/wiki/Chrono_Genesis">
            <img
                src={selected_gif}
                loading="eager"
                alt="Random GIF"
                class="rounded shadow shadow-black hover:scale-105 transition-transform duration-300"
            />
        </a>

        <a href="https://www.racingpost.com/results/444/del-mar/2025-11-01/906888">
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
                    <li>- Horse Racing</li>
                    <li>- Coding</li>
                    <li>- Cooking</li>
                    <li>- Music</li>
                </ul>
            </div>

            <div id="languages" class="border w-fit p-2 rounded bg-white shadow shadow-black hover:scale-105 transition-transform duration-300">
                <h1 class="text-2xl">Computer Languages I know:</h1>
                <ul>
                    <li>- Rust</li>
                    <li>- Assembly (x86-64 using NASM)</li>
                    <li>- Typescript</li>
                    <li>- Python</li>
                    <li>- C</li>
                </ul>
            </div>

            <div id="games" class="border w-fit p-2 rounded bg-white shadow shadow-black hover:scale-105 transition-transform duration-300">
                <h1 class="text-2xl">Games I play:</h1>
                <ul>
                    <li>- Uma Musume: Pretty Derby</li>
                </ul>
            </div>

            <div id="artist" class="border w-fit p-2 rounded bg-white shadow shadow-black hover:scale-105 transition-transform duration-300">
                <h1 class="text-2xl">Artists I listen to:</h1>
                <ul>
                    <li>- 安全地帯 (Anzen Chitai)</li>
                    <li>- 藤井風 (Fujii Kaze)</li>
                    <li>- Luther Vadross</li>
                    <li>- Bruno Mars</li>
                </ul>
            </div>

            <!--END LISTS-->
        </div>
        <hr />
    </div>

    <!--END BLOCK INFO-->
</div>

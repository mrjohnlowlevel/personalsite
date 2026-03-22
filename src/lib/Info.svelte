<script>
    const gifs = [
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW1mdmJwN2RjeWljaDRwY2plN3pnZDJubXA0emtubWdsdWozNmozdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dwo8ReUwBZpLekoyWl/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZqbGJhNzh2eWQ0cmFiMHhnZ3R5eW0yd2NjdHAxdTV2Z3pmd3hlZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0x4EWpH7bmpd92geYb/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG9vOXNvdTFmdXJ4cWYxZnU5Y2djOG1zc2h6b216bnd6MnJjeDB0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SgcYznFN1KpkfWS9eP/giphy.gif"
    ];

    const min = 1;
    const max = 3;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    let selected_gif = gifs[randomNumber - 1] // lazy solution to keep it 0-2
</script>

<div id="information">
    <!--START BLOCK INFO-->

    <div id="brief" class="grid grid-cols-3 content-stretch gap-3 mb-5">
        <p class="text-center">My name is Wunderbar!</p>
        <img
            src="{selected_gif}"
            alt="Random GIF"
            class="rounded"
        />
        <img
            alt="Forever Young 2025 Breeders' Cup Classic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElPd6htVM-0usm89ntbBQhW74qpmSN71nNA&s"
            class="rounded"
        />
    </div>

    <div id="background" class="bg-amber-100">
        <hr />
        <div id="interest-lists" class="ml-4 m-4 grid grid-cols-2 gap-y-2">
            <!--START LISTS-->

            <div id="interest">
                <h1 class="text-2xl">My Interest:</h1>
                <ul>
                    <li>- Horse Racing</li>
                    <li>- Coding</li>
                    <li>- Cooking</li>
                    <li>- Music</li>
                </ul>
            </div>

            <div id="languages">
                <h1 class="text-2xl">Computer Languages I know:</h1>
                <ul>
                    <li>- Rust</li>
                    <li>- Assembly (x86-64 using NASM)</li>
                    <li>- Typescript</li>
                    <li>- Python</li>
                    <li>- C</li>
                </ul>
            </div>

            <div id="games">
                <h1 class="text-2xl">Games I play:</h1>
                <ul>
                    <li>- Uma Musume: Pretty Derby</li>
                    <li>- Monster Hunter (earlier gens)</li>
                </ul>
            </div>

            <div id="artist">
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

<script lang="ts">
    import { fade } from "svelte/transition";
    import { getRandomNum } from "../../util/util";

    const gifs = [
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW1mdmJwN2RjeWljaDRwY2plN3pnZDJubXA0emtubWdsdWozNmozdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dwo8ReUwBZpLekoyWl/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZqbGJhNzh2eWQ0cmFiMHhnZ3R5eW0yd2NjdHAxdTV2Z3pmd3hlZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0x4EWpH7bmpd92geYb/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG9vOXNvdTFmdXJ4cWYxZnU5Y2djOG1zc2h6b216bnd6MnJjeDB0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SgcYznFN1KpkfWS9eP/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTh1dGY2bzgweTFpdW96MWRuY3ZtOW5uZjA4enZyaTVjcXAzd3J0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aUe4b0CuV4nXq9ZpDt/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmR2b2N0ajBma3FxOXBvYzVqYmF6emxsZWhxNzhhMWZsd3V0ZWMzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1IxfBx0jyAnK3z6Ots/giphy.gif",
    ];

    const randomGifNumber = getRandomNum(gifs.length);
    const ebayan_real_or_not = getRandomNum(2);
    console.log(ebayan_real_or_not);

    let selected_gif = gifs[randomGifNumber];
</script>

<div>
    <div
        transition:fade={{ delay: 200, duration: 300 }}
        id="brief"
        class="grid grid-cols-1 md:grid-cols-3 content-stretch gap-3 mb-5 justify-items-center"
    >
        <h1 class="text-center text-[20px] md:text-[50px] font-bold">
            My name is Wunderbar!
        </h1>
        <a
            href="https://en.wikipedia.org/wiki/Chrono_Genesis"
            target="_blank"
            rel="noreferrer noopener"
        >
            <img
                src={selected_gif}
                loading="lazy"
                alt="Random GIF"
                class="rounded shadow shadow-black hover:scale-105 transition-transform duration-300"
            />
        </a>

        {#if ebayan_real_or_not == 1}
            <a
                href="https://en.wikipedia.org/wiki/Forever_Young_(horse)"
                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                    alt="Forever Young (horse) [2026 Saudi Cup (Netkeiba)]"
                    src="https://cdn.netkeiba.com/img.en//db/show_photo.php?horse_id=2021105727&no=101673&tn=&tmp=no"
                    loading="lazy"
                    width="355px"
                    class="rounded shadow shadow-black hover:scale-105 transition-transform duration-300"
                />
            </a>
        {:else}
            <a
                href="https://umamusu.wiki/Forever_Young"
                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                    alt="Forever Young (Uma Musume) wiki page フォーエバーヤング"
                    src="/personalsite/pettheyoung.gif"
                    loading="lazy"
                    height="260px"
                    width="260px"
                    class="rounded shadow shadow-black hover:scale-105 transition-transform duration-300"
                />
            </a>
        {/if}
    </div>
</div>

<script lang="ts">
    const my_info = [
        "I like candies",
        "I'm trilingual",
        "I'm 15 years old",
        "I love musics",
    ]
</script>

<div class="mb-5">
    <div id="me" class="pl-2">
        <div class="bg-[#c73e04] p-2 rounded-t-2xl shadow shadow-black">
            <h1 class="text-center font-bold text-2xl">About Me</h1>
        </div>
        <hr />
        <div id="yaps" class="bg-[#ffbd94] pt-2 pl-2 shadow shadow-black rounded-b-2xl pb-4 text-center font-mono">
            <p>
                Hi! My name is Wunderbar/Jon Free (online name and pseudonym).
                I'm a hobbyist coder and a huge horse racing nerd.
            </p>

            <br>
            <hr>
            <h2 class="text-xl font-bold">Things about me:</h2>
            <ul>
                {#each my_info as info}
                    <li class="list-disc list-inside text-sm">{info}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>

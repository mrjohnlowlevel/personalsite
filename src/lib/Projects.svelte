<script lang="ts">
    const projects = ["Discord Duck Pet", "School gamejam (secret)", "... (not much besides that)"];
</script>

<div id="projects" class="shadow shadow-black rounded-2xl pb-2">
    <h1 class="text-center bg-[#107bba79] p-5 rounded-t-2xl">
        My Current Projects
    </h1>
    <div class="pt-2">
        <ul>
            {#each projects as pj}
                <li class="list-disc list-inside text-sm pl-4">{pj}</li>
            {/each}
        </ul>
    </div>
</div>

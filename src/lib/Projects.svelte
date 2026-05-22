<script lang="ts">
    const projects = ["Discord Duck Pet", "... (not much besides that)"]
</script>

<div id="projects" class="shadow rounded-b-2xl pb-2">
    <div class="bg-[#00a2ff9e] p-5 rounded-t-2xl">
        <h1 class="text-center">My Current Projects</h1>
    </div>
    <div class="pt-2">
        <ul>
            {#each projects as pj}
                <li class="list-disc list-inside text-sm pl-4">{pj}</li>
            {/each}
        </ul>
    </div>
</div>
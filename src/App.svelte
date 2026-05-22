<script lang="ts">
	import Header from "./lib/Header.svelte";
	import Info from "./lib/Info.svelte";
	import Footer from "./lib/Footer.svelte";
	import Projects from "./lib/Projects.svelte";

	const Components = [Header, Info, Projects, Footer];
</script>

<div>
	{#each Components as comp}
		{#if comp !== Footer}
			<div class="mb-10">
				<svelte:component this={comp} />
			</div>
		{:else}
			<div>
				<svelte:component this={comp} />
			</div>
		{/if}
	{/each}
</div>

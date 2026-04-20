<script>
	import Info from "./lib/Info.svelte";
	import Footer from "./lib/Footer.svelte";

	console.log("%c君はス・テ・キ", "color: oklch(70.4% 0.191 22.216)")
</script>

<div id="main">
	<div id="carousel" class="text-4xl bg-red-400 p-1 font-mono uppercase shadow shadow-neutral-900 overflow-hidden">
		<div aria-hidden="true" id="group" class="w-max flex gap-0 animate-carousel">
			<span class="flex-[0_0_400px]">Hello, World!</span>
			<span class="flex-[0_0_400px]">Guten Tag, Welt!</span>
			<span class="flex-[0_0_400px]">Bonjour, le monde!</span>

			<span class="flex-[0_0_400px]">Hello, World!</span>
			<span class="flex-[0_0_400px]">Guten Tag, Welt!</span>
			<span class="flex-[0_0_400px]">Bonjour, le monde!</span>
		</div>
	</div>
	<br />

	<Info />
	<br />
	<Footer />
</div>

<style>
	#carousel {
		scrollbar-width: none;
	}

	#carousel::-webkit-scrollbar {
		display: none;
	}
</style>

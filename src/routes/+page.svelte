<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Work from '$lib/components/content/Work.svelte';
	import About from '$lib/components/content/About.svelte';
	import Contact from '$lib/components/content/Contact.svelte';
</script>

<div class="da_grid">
	<h1
		class="relative col-span-4 col-start-2 mx-auto max-w-[550px] bg-gradient-to-b from-cyan-800 to-purple-700 bg-clip-text text-center font-mono text-4xl text-transparent before:absolute before:right-1 before:top-0 before:animate-glitch2 before:overflow-hidden before:text-cyan-800 before:content-[attr(data-text)] after:absolute after:left-1 after:top-0 after:animate-glitch after:overflow-hidden after:text-purple-700 after:content-[attr(data-text)] md:text-6xl lg:max-w-[1024px]"
		data-text="Open Prairie Technologies"
	>
		Open Prairie Technologies
	</h1>
	<p class="col-span-4 col-start-2 text-center font-mono text-2xl italic text-cyan-900">
		Providing Digital Products and Solutions
	</p>
</div>

<Section id="work" classes="w-full relative p-5 md:p-10 lg:p-20 ">
	<Work />
</Section>
<Section id="about" classes="w-full relative p-5 md:p-10 lg:p-20 ">
	<About />
</Section>
<Section id="contact" classes="w-full relative p-5 md:p-10 lg:p-20">
	<Contact />
</Section>

<style>
	.da_grid {
		background: conic-gradient(from 90deg at 1px 1px, transparent 90deg, #f326ac 0) 00 0/50px 50px;
	}
</style>

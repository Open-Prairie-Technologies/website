<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Work from '$lib/components/content/Work.svelte';
	import About from '$lib/components/content/About.svelte';
	import Contact from '$lib/components/content/Contact.svelte';
</script>

<h1
	class="font-mono text-center text-6xl bg-clip-text text-transparent bg-gradient-to-b from-cyan-800 to-purple-700"
>
	Open Prairie Technologies
</h1>
<p class="font-mono text-2xl text-center italic">Providing Digital Products and Solutions</p>

<Section id="work" classes="w-full relative p-10 lg:p-20 ">
	<Work />
</Section>
<Section id="about" classes="w-full relative p-10 lg:p-20 ">
	<About />
</Section>
<Section id="contact" classes="w-full relative p-10 lg:p-20">
	<Contact />
</Section>

<script lang="ts">
	import WorkItem from '$lib/components/WorkItem.svelte';
	import helth from '$lib/images/helthapp.png';
	import tempo from '$lib/images/tempo.jpg';
</script>

<a
	href="#work"
	class="before:absolute before:ml-[-20px] before:inline-block before:text-2xl before:content-[''] hover:before:content-['#']"
>
	<h2 class="text-2xl">Our Work</h2>
</a>
<p>
	We don't know who you are. We don't know what you want. If you are looking for crude work, we can
	tell you we don't have apathy, but what we do have are a very particular set of skills. Skills we
	have acquired over long careers. Skills that make us a dream(team) for people like you. If you
	leave this website now that'll be the end of it. We will not look for you, we will not pursue you,
	but if you don't, you will want to fill out our <a href="#contact">contact form</a>, we will get
	in touch, and we will help you.
</p>
<div class="my-5 flex flex-col gap-8">
	<WorkItem
		title="helth.app"
		blurb="helth.app was started as a joke blah blah blah"
		image={helth}
		link="https://helth.app"
	/>
	<WorkItem
		title="Tempo"
		blurb="So many timer apps lock great features behind a paywall but not Tempo!"
		image={tempo}
		link="https://tempo.hogoboom.dev"
	/>
</div>

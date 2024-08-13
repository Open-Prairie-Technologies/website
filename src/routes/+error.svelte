<script lang="ts">
	import { page } from '$app/stores';
	import hacker from '$lib/images/hackerman.webp';
	import Section from '$lib/components/Section.svelte';
</script>

<Section id="error" classes="">
	<h1
		class="relative mx-auto my-2 text-center font-mono text-4xl text-purple-700 md:text-6xl lg:max-w-[1024px]"
	>
		Whoops! That probably shouldn't have happened.
	</h1>
	<pre class="m-5 bg-gray-800 p-5">Error: {$page.status} - {$page?.error?.message}</pre>
	<p class="m-5">
		If you have accidentally stumbled across this error, then please let us know by filling out our <a
			href="/#contact">contact form here</a
		>. Provide any details you can and we'll look into it.
	</p>
	<div class="grid grid-cols-1 md:grid-cols-2">
		<p class="m-5">
			Now if you were goofing around, poking things, trying to figure out how it works, we love
			that! Check out the <a href="https://github.com/Open-Prairie-Technologies/website"
				>source code here</a
			>.
		</p>
		<img
			src={hacker}
			class="mx-auto max-w-[95%] md:max-w-[75%]"
			alt="Judge Judy waves her finger at you. She is an older woman with pale complexion and short brown hair. Below her is text that reads 'thats naughty'."
		/>
	</div>
</Section>

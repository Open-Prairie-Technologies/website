<script lang="ts">
	export let title: string = '';
	export let link: string = '';
	export let image: string = '';
	export let alt: string = '';
	export let blurb: string = '';
</script>

<div class="flex flex-col-reverse gap-8 md:flex-row">
	<span class="max-w-lg text-center"
		><img
			src={image}
			{alt}
			class="mx-auto inline h-auto w-auto border-2 border-slate-300 drop-shadow-xl md:min-w-80"
		/></span
	>
	<div class="flex flex-col">
		{#if link.length}
			<a href={link} class="block" target="_blank">
				<h4 class="text-xl">{title}</h4>
			</a>
		{:else}
			<h4 class="text-xl">{title}</h4>
		{/if}
		<p>{@html blurb}</p>
	</div>
</div>

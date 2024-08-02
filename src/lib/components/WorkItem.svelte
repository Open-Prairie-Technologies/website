<script lang="ts">
	export let title: string = '';
	export let link: string = '';
	export let image: string = '';
	export let alt: string = '';
	export let blurb: string = '';
</script>

<div class="grid grid-cols-2 gap-8">
	<img src={image} {alt} />
	<div class="flex flex-col">
		{#if link.length}
			<a href={link} target="_blank">
				<h4 class="text-xl">{title}</h4>
			</a>
		{:else}
			<h4 class="text-xl">{title}</h4>
		{/if}
		<p>{blurb}</p>
	</div>
</div>

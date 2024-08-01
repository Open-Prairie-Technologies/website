<script lang="ts">
	export let title: string = '';
	export let image: string = '';
	export let alt: string = '';
	export let blurb: string = '';
</script>

<div class="grid grid-cols-2">
	<img src={image} {alt} />
	<div class="flex flex-col">
		<h4 class="text-xl">{title}</h4>
		<p>{blurb}</p>
	</div>
</div>

<script lang="ts">
	export let img: string = '';
	export let alt: string = '';
	export let bio: string = '';
	export let name: string = '';
</script>

<div class="flex flex-col gap-4 py-2">
	<img
		src={img}
		class="mx-auto h-52 w-52 rounded-full object-cover object-[center_top] py-2"
		{alt}
	/>
	<span>
		<h3 class="text-xl">{name}</h3>
		<p>{bio}</p>
	</span>
</div>

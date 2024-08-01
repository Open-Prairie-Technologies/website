<script lang="ts">
	import WorkItem from '$lib/components/WorkItem.svelte';
	import helth from '$lib/images/helthapp.png';
	import tempo from '$lib/images/tempo.jpg';
</script>

<a
	href="#work"
	class="before:absolute before:ml-[-20px] before:inline-block before:text-2xl before:content-[''] hover:before:content-['#']"
	><h2 class="text-2xl">Our Work</h2></a
>
<div class="flex flex-col">
	<WorkItem
		title="helth.app"
		blurb="helth.app was started as a joke blah blah blah"
		image={helth}
	/>
	<WorkItem
		title="Tempo"
		blurb="So many timer apps lock great features behind a paywall but not Tempo!"
		image={tempo}
	/>
</div>

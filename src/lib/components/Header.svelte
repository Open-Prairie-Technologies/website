<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import logo from '$lib/images/logo.png';

	let y: number = 0;
</script>

<svelte:window bind:scrollY={y} />
<!-- Must be first element -->

<div class="flex w-full items-stretch justify-between p-5">
	<img
		src={logo}
		class="h-auto transition-all duration-200 {y > 50 ? 'max-w-14' : 'max-w-36'}"
		alt="OPT Company Logo"
	/>
	<Nav />
</div>

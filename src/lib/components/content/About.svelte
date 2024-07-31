<script>
	import Jimmy from '$lib/components/team/Jimmy.svelte';
	import Jordon from '$lib/components/team/Jordon.svelte';
	import Dylan from '$lib/components/team/Dylan.svelte';
</script>

<a
	href="#about"
	class="before:absolute before:ml-[-20px] before:inline-block before:text-2xl before:content-[''] hover:before:content-['#']"
>
	<h2 class="text-2xl">About Us</h2>
</a>
<p>
	At Open Prairie Technologies (OPT), we pride ourselves on developing highly customized solutions
	to suit the needs of our clients. We're a group of developers eager for a challenge. And with over
	45 years of combined experience, we've acquired the skills to tackle almost any technical
	challenge thrown at us.
</p>

<div class="grid grid-cols-1 items-stretch gap-x-5 md:grid-cols-3">
	<Jimmy />
	<Jordon />
	<Dylan />
</div>

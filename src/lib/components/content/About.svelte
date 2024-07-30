<script>
	import Jimmy from '$lib/components/team/Jimmy.svelte';
	import Jordon from '$lib/components/team/Jordon.svelte';
	import Dylan from '$lib/components/team/Dylan.svelte';
</script>

<h2 class="text-2xl" id="about">About Us</h2>
<p>
	At Open Prairie Technologies (OPT), we pride ourselves on developing highly customized solutions
	to suit the needs of our clients. We're a group of developers eager for a challenge. And with over
	45 years of combined experience, we've acquired the skills to tackle almost any technical
	challenge thrown at us.
</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-x-5 items-stretch">
	<Jimmy />
	<Jordon />
	<Dylan />
</div>

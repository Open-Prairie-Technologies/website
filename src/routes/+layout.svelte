<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div
	class="flex min-h-[100vh] flex-col bg-gradient-to-b from-orange-400 to-purple-700 text-slate-200"
>
	<Header />
	<div class="grow"><slot /></div>
	<Footer />
</div>

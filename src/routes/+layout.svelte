<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div
	class="flex min-h-[100vh] flex-col bg-gradient-to-b from-orange-400 to-purple-700 text-slate-200"
>
	<div class="sticky top-0 z-10 block bg-gradient-to-b from-orange-400 to-[#f48c44]">
		<Header />
	</div>
	<div class="my-5 grow"><slot /></div>
	<Footer />
</div>

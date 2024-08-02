<script lang="ts">
	import WorkItem from '$lib/components/WorkItem.svelte';
	import helth from '$lib/images/helthapp.png';
	import tempo from '$lib/images/tempo.jpg';
</script>

<a
	href="#work"
	class="before:absolute before:ml-[-20px] before:inline-block before:text-2xl before:content-[''] hover:before:content-['#']"
>
	<h2 class="text-2xl">Our Work</h2>
</a>
<p>
	We don't know who you are. We don't know what you want. If you are looking for crude work, we can
	tell you we don't have apathy, but what we do have are a very particular set of skills. Skills we
	have acquired over long careers. Skills that make us a dream(team) for people like you. If you
	leave this website now that'll be the end of it. We will not look for you, we will not pursue you,
	but if you don't, you will want to fill out our <a href="#contact">contact form</a>, we will get
	in touch, and we will help you.
</p>
<div class="my-5 flex flex-col gap-8">
	<WorkItem
		title="helth.app"
		blurb="helth.app is a <a href='https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps' target='_blank'>Progressive Web App</a> (PWA) that allows users to track calories, nutrients, and water in-take. Dylan's idea arose from the frustration of using popular apps that provide similar functionality at the cost of user privacy by including advertisements and locking previously free features behind a paywall."
		image={helth}
		link="https://helth.app"
		alt="An application with a dark green background and various text boxes allows users to enter their nutritional information. In the top right corner is a menu, in the bottom right a '+' character, and in the top left is the logo which appears to be a chicken leg with a bite taken out of it and placed in a barcode scanning viewport. "
	/>
	<WorkItem
		title="Tempo"
		blurb="After using popular <i>freemium</i> apps for tracking his time entries, Jimmy became frustrated with how the application began removing certain features. Tempo is the product of his frustration with commercially available products. Not only does it solve issues like attaching billing rates to entries but it also maintains a net-zero operating cost by running entirely on the user's device."
		image={tempo}
		link="https://tempo.hogoboom.dev"
		alt="An application with a dark background is shown with a timer  reading 02:35:47 and a bright red stop button next to it. Below are various time entries outlining the work done, the time taken, the project associated with the task, and the billing amount."
	/>
</div>

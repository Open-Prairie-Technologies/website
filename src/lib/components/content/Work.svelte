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
	While we specialize in creating web apps, we go beyond simply "creating apps". With over 45 years
	of combined experience, we’ve seen it all (okay, maybe not all but a lot). We’ve worked in nearly
	every imaginable sub-field of Information Technology (IT) including as system administrators, web
	developers, software engineers, and even PC repair technicians. And that doesn’t even include the
	various technology related hobbies we’ve picked up over the years. With a unified passion for
	using technology to solve problems, our team is determined to use the right tool for the right
	job. When it comes to programming or coding, there’s hardly a language we haven’t used.
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

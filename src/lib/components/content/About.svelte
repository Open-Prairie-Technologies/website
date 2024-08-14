<script>
	import jimmy from '$lib/images/team/jimmy.jpg';
	import jordon from '$lib/images/team/jordon.jpg';
	import dylan from '$lib/images/team/dylan.jpg';
	import Member from '$lib/components/team/Member.svelte';
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
	<Member
		img={jimmy}
		name="Jimmy Hogoboom"
		alt="Jimmy Hogoboom smiles at the camera. He has short hair, glasses, facial hair."
		bio="
A software engineer with over a decade of experience building, deploying, and maintaining secure and robust applications on the web and elsewhere. The practical knowledge he has gathered through experience is amplified by a personal interest in techniques for building correct software, like test-driven development and the wonders of functional programming.
		"
	/>
	<Member
		img={jordon}
		name="Jordon Lakoduk"
		alt="Jordon Lakoduk smiles at the camera. He is wearing a short brimmed cap and has a beard."
		bio="Taking on unique challenging IT problems is the norm for this peculiar  fellow. He started out in 2004 developing web applications utilizing the full open source LAMP (Linux, Apache, MySQL, and PHP) and he's spent the last fifteen years doing IT consulting and system administration. He likes putting together systems that aren't designed to talk, or so the vendor says...just another average day. Outside of all things tech he is an avid traveler, very amateur tennis player, and still occasionally rides a skateboard to “stay young”."
	/>
	<Member
		img={dylan}
		name="Dylan Hildenbrand"
		alt="Dylan Hildenbrand stands with his arms crossed. He wears a dark, long sleeve shirt, wears glasses, and has tossled hair."
		bio="
			Dylan is a freelance full-stack web developer with a penchant for understanding how things work. Over the past decade, that desire to know “how things work” has led Dylan to
			a robust skillset ranging from front and back-end development to database administration,
			Linux server administration, and automation of application deployments and testing procedures.
		"
	/>
</div>

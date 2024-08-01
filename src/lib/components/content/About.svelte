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
			A software developer with over a decade of experience collaborating with clients,
			stakeholders, and domain experts to design, build, deploy, and maintain secure web
			applications with a variety of languages and frameworks.
		"
	/>
	<Member
		img={jordon}
		name="Jordon Lakoduk"
		alt="Jordon Lakoduk smiles at the camera. He is wearing a short brimmed cap and has a beard."
		bio="
			A qui totam quia error ipsam ea inventore. Sed beatae consequatur officiis facilis ex animi
			id. Excepturi magni atque rerum magnam. Aut iste inventore inventore autem autem voluptatibus
			odit. Praesentium est eveniet eius nulla facere nam voluptatum possimus. Vel exercitationem et
			atque corporis quo.
		"
	/>
	<Member
		img={dylan}
		name="Dylan Hildenbrand"
		alt="Dylan Hildenbrand stands with his arms crossed. He wears a dark, long sleeve shirt, wears glasses, and has tossled hair."
		bio="
			Dylan Hildenbrand is a freelance full-stack web developer with a penchant for understanding
			how things work. Over the past decade, that desire to know “how things work” has led Dylan to
			a robust skillset ranging from front and back-end development to database administration,
			Linux server administration, and automation of application deployments and testing procedures.
		"
	/>
</div>

<ul class="flex items-center justify-start gap-5">
	<li>
		<a href="#work">Our Work</a>
	</li>
	<li><a href="#about">About Us</a></li>
	<li><a href="#contact">Contact</a></li>
</ul>

<style>
	/* TailwindCSS doesn't yet support hover on :after + :after:content  */
	a {
		display: inline-block;
		transition: 250ms;
	}
	a::after {
		display: block;
		width: 0;
		height: 1px;
		content: '';
		background-color: var(--color-green);
		transition: 250ms;
	}
	a:hover::after {
		width: 100%;
	}
</style>

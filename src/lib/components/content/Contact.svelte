<a
	href="#contact"
	class="text-orange-300 before:absolute before:ml-[-20px] before:inline-block before:text-2xl before:content-[''] hover:before:content-['#']"
	><h2 class="text-2xl">Contact</h2></a
>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
	<p>
		We've got the technical knowhow to implement highly customized applications that are tailored to
		your organizations needs. Send us a message aboout what you're looking for and we'll get back to
		you ASAP!
	</p>
	<form
		class="flex flex-col"
		method="POST"
		data-netlify="true"
		name="OPT-Contact-Form"
		data-netlify-recaptcha="true"
	>
		<input name="bait" />
		<input type="hidden" name="form-name" value="OPT-Contact-Form" />
		<input type="hidden" name="subject" value="OPT Contact Form Submission" />
		<label class="px-3 py-2" for="name">Name</label>
		<input class="text-slate-800" required type="text" id="name" name="name" />
		<label class="px-3 py-2" for="email">Email</label>
		<input type="email" required class="text-slate-800" id="email" name="email" />
		<label class="px-3 py-2" for="message">Message</label>
		<textarea id="message" required class="resize-none text-slate-800" rows="4" name="message" />
		<div data-netlify-recaptcha="true"></div>
		<button
			type="submit"
			data-text="Submit"
			class="relative my-4 border px-3 py-2 transition-all duration-200 hover:bg-cyan-700"
			>Submit</button
		>
	</form>
</div>

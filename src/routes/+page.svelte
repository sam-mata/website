<script>
	import "../global.css";
	import Footer from "$lib/Footer.svelte";
	import AttenBot from "$lib/AttenBot.svelte";
</script>

<body class="flex flex-col items-center justify-center m-4">
	<section>
		<h1>Kia Ora! I'm Sam.</h1>
		<h2>Web Developer & VUW Student</h2>
	</section>

	<section>
		<h3 class="section-title">about me</h3>
		<p>Hi! I'm Sam Mata, a developer based in Wellington, New Zealand.</p>
		<p>
			After completing my BSc in Computer Science in 2023, I'm now studing towards an honors
			degree in <a href="https://www.wgtn.ac.nz/cdsai"> AI at Victoria University</a>.
		</p>
		<p>
			At the same time I work as a full stack web developer at
			<a href="https://github.com/OrdinoNZ">Ordino</a>, where I lead development on a progress
			tracking app for dental prosthetics.
		</p>
	</section>

	<section>
		<h3 class="section-title">recent work</h3>
		<p>
			When I have time, I like to work on my own personal projects that can be found on
			<a href="https://github.com/sam-mata">my github</a>.
		</p>
		<!-- <AttenBot /> -->
	</section>

	<section class="">
		<h3 class="section-title">get in touch</h3>
		<p>If you have a project or opportunity you'd like to discuss, please get in touch.</p>
		<p>
			Email : <a type="email" href="mailto:sammatanz@gmail.com">sammatanz@gmail.com</a><br />
			Ph : <a type="tel" href="tel:0274171172">(+64) 27 417 1172</a>
		</p>
	</section>
</body>

<Footer />

<script>
	import "../global.css";
	import Footer from "$lib/Footer.svelte";
</script>

<body class="flex flex-col items-center m-16 lg:mx-auto lg:w-2/3">
	<section class="flex flex-col items-center md:flex-row">
		<h1 class="font-black font-raleway text-[150px] text-stone-800">SM.</h1>
		<div class="md:pl-6">
			<h2>About Me</h2>
			<p>Kia Ora! I'm Sam Mata, a developer based in Wellington.</p>
			<p>
				I study at
				<a href="https://www.wgtn.ac.nz/cdsai">Victoria University</a> and work at
				<a href="https://github.com/OrdinoNZ">Ordino</a>.
			</p>
		</div>
	</section>

	<div />

	<section class="pt-12 pb-24">
		<h2>My Work</h2>
		<p>
			After completing my BSc in Computer Science in 2023, I'm now studying towards a honors
			degree in artificial intelligence at Victoria University of Wellington. My coursework is
			mostly focused on machine learning, particularly with regard to natural language
			processing and computer vision.
		</p>
		<p>
			At the same time I work as a full-stack web developer at Ordino, an in-house software
			team based in Lower Hutt. In this role I lead development of a progress tracking app for
			dental technicians.
		</p>
	</section>

	<div />

	<section>
		<h2>Contact</h2>
		<p>
			While I keep busy with study and work, If you have a project or opportunity you'd like
			to discuss, please get in touch at <a href="mailto:sammatanz@gmail.com"
				>sammatanz@gmail.com</a
			>.
		</p>
	</section>
</body>

<Footer />

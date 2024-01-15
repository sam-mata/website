<script>
	import "../global.css";
	import Footer from "$lib/Footer.svelte";
	import AttenBot from "$lib/AttenBot.svelte";
</script>

<body class="flex flex-col items-center m-4 lg:mx-auto lg:w-2/3">
	<section class="flex flex-col items-center py-0 md:flex-row">
		<h1 class="font-black font-raleway text-[150px] text-stone-800">SM.</h1>
		<div class="md:pl-6">
			<h2>Kia Ora!</h2>
			<p>I'm Sam Mata, a developer based in Wellington.</p>
			<p>AI Student at VUW & Web Dev at Ordino</p>
		</div>
	</section>

	<section>
		<h2>About Me</h2>
		<p>
			After completing my <a
				href="https://www.wgtn.ac.nz/explore/degrees/science/overview?major=computer-science"
				>BSc in Computer Science</a
			>
			in 2023, I'm now studying towards an
			<a
				href="https://www.wgtn.ac.nz/explore/postgraduate-programmes/bachelor-of-science-with-honours/requirements?subject=artificial-intelligence-bsc-hons"
			>
				honors degree in artificial intelligence</a
			> at Victoria University of Wellington. My coursework is mostly focused on machine learning,
			particularly with regard to natural language processing and computer vision.
		</p>
		<p>
			While studying, I work as a full-stack web developer at <a
				href="https://github.com/OrdinoNZ">Ordino</a
			>, an in-house software team based in Lower Hutt. In this role I lead development of a
			progress tracking app for dental technicians. This role encompasses many
			responsibilities, including project management, design, and development.
		</p>
	</section>

	<section>
		<h2>Recent Work</h2>
		<p>
			Occassionally I tinker with side projects, these can be found on
			<a href="https://github.com/sam-mata">my github portfolio</a>. Most recently, I made
			<a href="https://twitter.com/charliebholtz/status/1724815159590293764">my very own</a>
			<i>"david attenbot"</i> - a webcam narrator in the style of a certain nature documentary
			presenter.
			<AttenBot />
		</p>
	</section>

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

<script>
	import "../global.css";
	import Footer from "$lib/Footer.svelte";
</script>

<body class="flex flex-col items-center m-8 lg:mx-auto lg:w-2/3">
	<section class="flex flex-col items-center md:flex-row">
		<h1 class="font-black font-raleway text-[150px] text-stone-800">SM.</h1>
		<div class="md:pl-6">
			<h2>Kia Ora!</h2>
			<p>I'm Sam Mata, a developer based in Wellington.</p>
			<p>AI Student at VUW & Web Dev at Ordino</p>
		</div>
	</section>

	<div />

	<section class="py-12">
		<h2>My Studies</h2>
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
			> at Victoria University of Wellington.
		</p>
		<p>
			<a href="https://github.com/sam-mata/SeaLevelAI">My research project</a> is focused on
			utilizing evolutionary machine learning algorithms to more efficiently predict changes
			in ice sheets. In this project I work with Victoria University's
			<a href="https://www.wgtn.ac.nz/cdsai"
				>Centre for Data Science and Artificial Intelligence (CDSAI)</a
			>
			and the <a href="https://www.wgtn.ac.nz/antarctic">Antarctic Research Centre (ARC)</a>.
		</p>
		<p>
			Meanwhile, my coursework is mostly focused on machine learning, particularly with regard
			to natural language processing, classification, and computer vision.
		</p>
	</section>

	<div />

	<section class="pb-12">
		<h2>My Work</h2>
		<p>
			I currently tutor two courses at Victoria University, <a
				href="https://www.wgtn.ac.nz/courses/comp/261/2021/offering?crn=18314"
				>Algorithms and Data Structures (COMP-261)</a
			>
			and
			<a href="https://www.wgtn.ac.nz/courses/swen/326/2022/offering?crn=30042"
				>Safety Critical Systems (SWEN-326)</a
			>. These each involve leading tutorials for students, running helpdesk sessions, and
			marking assignments with feedback.
		</p>
		<p>
			At the same time I work as a full-stack web developer at <a
				href="https://github.com/OrdinoNZ">Ordino</a
			>, an in-house software team based in Lower Hutt. In this role I lead development of a
			progress tracking app for dental technicians.
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

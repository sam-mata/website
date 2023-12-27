<script>
	import "../global.css";
	import "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<body class="flex flex-col items-center justify-center m-4">
	<section>
		<h1>Kia Ora! I'm Sam.</h1>
		<h2>Web Developer & VUW Student</h2>
	</section>

	<section>
		<h3 class="section-title">About me</h3>
		<p>Hi! I'm Sam, a developer based in Wellington, New Zealand.</p>
		<p>
			I'm currently studying AI at Victoria University, while I work as a full stack web
			developer at Ordino.
		</p>
	</section>

	<section>
		<h3 class="section-title">Projects</h3>
		<p>
			For some christmas laughs, I made <a
				href="https://twitter.com/charliebholtz/status/1724815159590293764">my very own</a
			>
			"david attenbot" -
			<i>a webcam narrator in the style of a certain nature documentary presenter</i>.
		</p>
		<p>Want some david attenbot in your life?</p>
		<button class="rounded bg-zinc-800 px-1 text-zinc-50">Start attenbot</button>
	</section>

	<section class="">
		<h3 class="section-title">Contact</h3>
		<p>If you have a project or opportunity you'd like to discuss, please get in touch.</p>
		<p>
			Email : <a type="email" href="mailto:sammatanz@gmail.com">sammatanz@gmail.com</a><br />
			Ph : <a type="tel" href="tel:0274171172">(+64) 27 417 1172</a>
		</p>
	</section>
</body>

<Footer />

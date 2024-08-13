<script>
	import {tocCrawler } from '@skeletonlabs/skeleton';
</script>

<div class="container flex items-center justify-center h-full mx-auto">
	<div class="space-y-5">
		<article class="prose dark:prose-invert lg:prose-lg">
			<h1 class="h1">Who's Watching?</h1>
			<h2 class="h2">What Big Tech Knows About You</h2>
			<p>Intro</p>

			<div use:tocCrawler={{ mode: 'generate' }}>
				<h2 class="h2">1. Data Collection in Aotearoa</h2>
				<ul>
					<li>Netsafe</li>
					<li>Privacy Commission</li>
					<li>Privacy Laws</li>
				</ul>

				<h2 class="h2">2. How Exposed Am I?</h2>
				<form>
					<label for="email">Email address</label>
					<input type="email" class="form" placeholder="john@example.com">
					<label for="phone">Phone Number</label>
					<input type="number" class="form" placeholder="0123456789">
					<label for="user">Usernames</label>
					<input type="email" class="form" placeholder="john@example.com">
				</form>
				<ul>
					<li>Pipl Search</li>
					<li>Google People API</li>
					<li>Google Takeout API</li>
					<li>Meta Graph API</li>
					<li>Full Contact</li>
					<li>Have I been pwned</li>
					<li>Have i been trained</li>
				</ul>

				<h2 class="h2">3. What Can I Do?</h2>
				<ul>
					<li>Tools</li>
				</ul>

				<h2 class="h2">4. A Model for the Future</h2>
				<ul>
					<li>Te Hiku Media</li>
				</ul>
			</div>
		</article>
	</div>
</div>

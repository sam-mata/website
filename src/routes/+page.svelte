<script>
	import Card from '../components/Card.svelte';
</script>

<div class="w-3/4 mx-auto my-24 lg:w-5/12">
	<!-- Intro -->
	<section class="my-12">
		<h1 class="font-bold text-7xl">Kia Ora! I'm Sam.</h1>
		<h2 class="text-xl text-surface-500-400-token">
			Student & Developer based in Wellington.
		</h2>
	</section>

	<!-- Study -->
	<section class="my-12">
		<h2
			class="my-2 text-2xl font-medium underline decoration-[3px] decoration-primary-600"
		>
			My Study
		</h2>
		<p
			class="text-lg leading-tight tracking-tight text-surface-500-400-token"
		>
			I have studied at Victoria University since 2021, originally
			studying software engineering before pursueing research in AI, for
			which I am now completing postgraduate research. I am fortunate to
			study and work with the
			<a
				href="https://www.wgtn.ac.nz/cdsai"
				class="font-medium underline decoration-2 text-surface-600-300-token decoration-primary-600"
				>Center for Data Science and Artificial Intelligence (CDSAI)</a
			>.
		</p>
		<dl class="w-11/12 mx-auto list-dl">
			<div class="my-6">
				<span class="flex-auto">
					<div>
						<dt class="-mx-2 font-medium ">
							Bachelor of Science - Computer Science
						</dt>
						<p class="text-sm font-semibold text-surface-500-400-token"
							>Feb 2021 - Jan 2024</p
						>
					</div>

					<dd
						class="leading-normal tracking-tight text-surface-500-400-token"
					>
						I have completed a 3 year Bachelor of Science in
						Computer Science, with courses focusing on software
						development, programming, network engineering, and
						cybersecurity.
					</dd>
				</span>
			</div>
			<div class="my-2">
				<span class="flex-auto">
					<div>
						<dt class="-mx-2 font-medium">
							Bachelor of Science (Honours) - Artificial
							Intelligence
						</dt>
						<span class="text-sm font-semibold text-surface-500-400-token"
							>Feb 2024 - Nov 2024</span
						>
					</div>

					<dd
						class="leading-normal tracking-tight text-surface-500-400-token"
					>
						My postgraduate study is focused on AI, with courses on
						machine learning, data science, and AI applications. <a
							class="font-medium underline decoration-2 text-surface-600-300-token decoration-primary-600"
							href="https://github.com/sam-mata/evolution-antarctica"
							>My research project</a
						>
						uses evolutionary learning technique to improve long-term
						forecasting for changes in the Antarctic ice sheets. This
						project is run in collaboration with the
						<a
							href="https://www.wgtn.ac.nz/antarctic"
							class="font-medium underline decoration-2 text-surface-600-300-token decoration-primary-600"
						>
							Antarctic Research Center (ARC)
						</a>.
					</dd>
				</span>
			</div>
		</dl>
	</section>

	<!-- Gallery -->
	<section class="my-12">
		<h2
			class="my-2 text-2xl font-medium underline decoration-[3px] decoration-secondary-600"
		>
			Project Gallery
		</h2>
		<p
			class="text-lg leading-tight tracking-tight text-surface-500-400-token"
		>
			While most of my work is either not public or still in development,
			here are a few projects you can check out:
		</p>
		<div
			class="previewer-preview flex justify-center items-center my-6 mx-auto transition-[width] duration-200 w-full"
		>
			<div class="grid w-full gap-4 grid-cols- text-token md:grid-cols-2">
				<Card
					title="Big Data in NZ"
					subtitle="Web Article"
					descriptionText="An online article discussing data collection policies in New Zealand, with tools to view and manage your data."
					badges={[
						{ text: 'Web-App', color: 'blue' },
						{ text: 'Article', color: 'purple' },
					]}
					link="https://sammata.shinyapps.io/f1-app/"
					date="August 2024"
				/>
				<Card
					title="Ice Sheet Modelling"
					coverPhoto="src\lib\Antarctic-Modelling.png"
					subtitle="Research Project"
					descriptionText="Using evolutionary learning techniques to improve long-term forecasting for changes in the Antarctic ice sheets."
					badges={[
						{ text: 'Machine Learning', color: 'yellow' },
						{ text: 'Data Visualisation', color: 'green' },
					]}
					link="https://github.com/sam-mata/evolution-antarctica"
					date="2024"
				/>
				<Card
					title="Covid Heatmaps"
					coverPhoto="src\lib\Covid-Heatmap.png"
					subtitle="Interactive Web-App"
					descriptionText="An online tool for visualising data of the SARS-CoV-2 (Covid-19) virus through interactive global heatmaps."
					badges={[
						{ text: 'Web-App', color: 'blue' },
						{ text: 'Data Visualisation', color: 'green' },
					]}
					link="https://covid-visualiser.vercel.app/"
					date="June 2024"
				/>
				<Card
					title="F1 Graphing"
					coverPhoto="src\lib\F1-Analysis.png"
					subtitle="Interactive Web-App"
					descriptionText="An interactive online tool allowing customised user analysis of Formula-1 (F1) data."
					badges={[
						{ text: 'Web-App', color: 'blue' },
						{ text: 'Data Visualisation', color: 'green' },
					]}
					link="https://sammata.shinyapps.io/f1-app/"
					date="June 2024"
				/>
			</div>
		</div>
	</section>

	<!-- Work -->
	<section class="my-12">
		<h2
			class="my-2 text-2xl font-medium underline decoration-[3px] decoration-tertiary-600"
		>
			My Work
		</h2>
		<p
			class="text-lg leading-tight tracking-tight text-surface-500-400-token"
		>
			I have worked in a variety of technical roles:
		</p>
		<dl class="w-11/12 mx-auto list-dl">
			<div class="my-6">
				<span class="flex-auto">
					<div>
						<dt class="-mx-2 font-medium">
							Academic Tutor - Victoria University of Wellington
						</dt>
						<span class="text-sm font-semibold text-surface-500-400-token"
							>Feb 2024 - Present</span
						>
					</div>

					<dd
						class="leading-normal tracking-tight text-surface-500-400-token"
					>
						I have tutored three courses at Victoria University:
						Programming for the Natural and Social Sciences
						<a
							class="font-medium underline decoration-2 decoration-tertiary-600"
							href="https://www.wgtn.ac.nz/courses/comp/132/2021/offering?crn=30095"
							>(COMP-132)</a
						>, Algorithms and Data Structures
						<a
							class="font-medium underline decoration-2 decoration-tertiary-600"
							href="https://www.wgtn.ac.nz/courses/comp/261/2024/offering?crn=18314"
							>(COMP-261)</a
						>
						and Safety Critical Systems
						<a
							class="font-medium underline decoration-2 decoration-tertiary-600"
							href="https://www.wgtn.ac.nz/courses/swen/326/2022/offering?crn=30042"
							>(SWEN-326)</a
						>. Each of these involve running tutorials, labs, and
						helpdesk sessions for students to learn course content,
						as well as marking assignments and exams with feedback.
					</dd>
				</span>
			</div>
			<div class="my-2">
				<span class="flex-auto">
					<div>
						<dt class="-mx-2 font-medium">
							Full Stack Web Developer - Ordino
						</dt>
						<span class="text-sm font-semibold text-surface-500-400-token"
							>Feb 2022 - Present</span
						>
					</div>

					<dd
						class="leading-normal tracking-tight text-surface-500-400-token"
					>
						In this role I plan, design, and implement web and
						mobile interfaces for a progress tracking system for
						dental technicians. Primarily this involves using React,
						Tailwind, and Firebase.
					</dd>
				</span>
			</div>
		</dl>
	</section>

	<!-- Contact -->
	<section class="mt-12 -mb-8">
		<h2
			class="my-2 text-2xl font-medium underline decoration-[3px] decoration-surface-500-400-token"
		>
			Contact
		</h2>
		<p
			class="text-lg leading-tight tracking-tight text-surface-500-400-token"
		>
			While I tend to keep busy with study and work, If you have a project
			or opportunity you'd like to discuss, please get in touch at <a
				class="font-medium underline decoration-2 decoration-surface-500-400-token"
				href="mailto:sammatanz@gmail.com">sammatanz@gmail.com</a
			>.
		</p>
	</section>
</div>

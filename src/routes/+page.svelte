<script>
	import Card from '../components/Card.svelte';
	import IceSheetModelling from '$lib/assets/Antarctic-Modelling_R.avif';
	import CovidHeatmaps from '$lib/assets/Covid-Heatmap_R.avif';
	import F1Analysis from '$lib/assets/F1-Analysis_R.avif';
	import BigData from '$lib/assets/Big-Data.avif';
</script>

<div class="w-3/4 mx-auto my-24 lg:w-5/12">
	<!-- Intro -->
	<section class="my-12">
		<h1 class="font-bold dark:text-surface-50 text-7xl">
			Kia Ora! I'm Sam.
		</h1>
		<h2 class="text-xl text-surface-700 dark:text-surface-600">
			Student & Developer based in Wellington.
		</h2>
	</section>

	<!-- Study -->
	<section class="my-12">
		<h2 class="section-title decoration-primary-600">My Study</h2>
		<p class="section-content">
			I have studied at Victoria University since 2021, originally
			studying engineering before pursueing research in AI, for which I am
			now completing postgraduate research. I am fortunate to study and
			work with the
			<a
				href="https://www.wgtn.ac.nz/cdsai"
				class="link decoration-primary-600"
			>
				Center for Data Science and Artificial Intelligence (CDSAI)
			</a>.
		</p>
		<dl class="w-11/12 mx-auto list-dl">
			<div class="list-item">
				<span class="flex-auto">
					<div>
						<dt class="list-item-title">
							Bachelor of Science - Computer Science
						</dt>
						<p class="list-item-subtitle">Feb 2021 - Jan 2024</p>
					</div>

					<dd class="list-item-content">
						My undergraduate studies started with a Bachelor of
						Engineering, majoring in Software Engineering. After 3
						years I transferred to instead complete a Bachelor of
						Science in Computer Science so I could pursue further
						study in artificial intelligence. My coursework focused
						on software development, programming, network
						engineering, statistics, computer graphics, and
						cybersecurity.
					</dd>
				</span>
			</div>
			<div class="list-item">
				<span class="flex-auto">
					<div>
						<dt class="list-item-title">
							Bachelor of Science (Honours) - Artificial
							Intelligence
						</dt>
						<span class="list-item-subtitle"
							>Feb 2024 - Nov 2024</span
						>
					</div>

					<dd class="list-item-content">
						My postgraduate study is focused on AI, with courses on
						machine learning, data science, and AI applications. <a
							class="link decoration-primary-600"
							href="https://github.com/sam-mata/evolution-antarctica"
							>My research project</a
						>
						uses evolutionary learning technique to improve long-term
						forecasting for changes in the Antarctic ice sheets. This
						project is run in collaboration with the
						<a
							href="https://www.wgtn.ac.nz/antarctic"
							class="link decoration-primary-600"
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
		<h2 class="section-title decoration-secondary-600">Project Gallery</h2>
		<p class="section-content">
			While most of my work is either not public or still in development,
			here are a few projects you can check out:
		</p>
		<div
			class="flex justify-center items-center my-6 mx-auto transition-[width] duration-200 w-full"
		>
			<div
				class="grid w-full gap-4 mx-auto grid-cols- text-token md:grid-cols-2"
			>
				<!-- <Card
					title="Big Data in NZ"
					coverPhoto={BigData}
					subtitle="Web Article"
					descriptionText="An online article discussing data collection policies in New Zealand, with tools to view and manage your data."
					badges={[
						{ text: 'Web-App', color: 'blue' },
						{ text: 'Article', color: 'purple' },
					]}
					link="https://sammata.shinyapps.io/f1-app/"
					date="August 2024"
				/> -->
				<Card
					title="Ice Sheet Modelling"
					coverPhoto={IceSheetModelling}
					subtitle="Research Project"
					descriptionText="Using evolutionary learning techniques to improve long-term forecasting for changes in the Antarctic ice sheets."
					badges={[
						{ text: 'Machine Learning', color: 'yellow' },
						{ text: 'Research', color: 'purple' },
					]}
					link="https://github.com/sam-mata/evolution-antarctica"
					date="2024"
				/>
				<Card
					title="Covid Heatmaps"
					coverPhoto={CovidHeatmaps}
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
					coverPhoto={F1Analysis}
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
		<p class="section-content">
			Currently I'm focused on continuing my research, as well as making a tool for
			examining data collection in New Zealand. For more projects, check
			out
			<a class="link decoration-secondary-600" href="/projects"
				>my GitHub portfolio</a
			>.
		</p>
	</section>

	<!-- Work -->
	<section class="my-12">
		<h2 class="section-title decoration-tertiary-600">My Work</h2>
		<p class="section-content">
			I have worked in a variety of technical roles:
		</p>
		<dl class="w-11/12 mx-auto list-dl">
			<div class="list-item">
				<span class="flex-auto">
					<div>
						<dt class="list-item-title">
							Academic Tutor - Victoria University of Wellington
						</dt>
						<span class="list-item-subtitle"
							>Feb 2024 - Present</span
						>
					</div>

					<dd class="list-item-content">
						I have tutored three courses at Victoria University:
						Programming for the Natural and Social Sciences
						<a
							class="link decoration-tertiary-600"
							href="https://www.wgtn.ac.nz/courses/comp/132/2021/offering?crn=30095"
							>(COMP-132)</a
						>, Algorithms and Data Structures
						<a
							class="link decoration-tertiary-600"
							href="https://www.wgtn.ac.nz/courses/comp/261/2024/offering?crn=18314"
							>(COMP-261)</a
						>
						and Safety Critical Systems
						<a
							class="link decoration-tertiary-600"
							href="https://www.wgtn.ac.nz/courses/swen/326/2022/offering?crn=30042"
							>(SWEN-326)</a
						>. Each of these involve running tutorials, labs, and
						helpdesk sessions for students to learn course content,
						as well as marking assignments and exams with feedback.
					</dd>
				</span>
			</div>
			<div class="list-item">
				<span class="flex-auto">
					<div>
						<dt class="list-item-title">
							Full Stack Web Developer - Ordino
						</dt>
						<span class="list-item-subtitle"
							>Feb 2022 - Present</span
						>
					</div>

					<dd class="list-item-content">
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
			class="section-title decoration-surface-500 dark:decoration-surface-400"
		>
			Contact
		</h2>
		<p class="section-content">
			While I tend to keep busy with study and work, If you have a project
			or opportunity you'd like to discuss, please get in touch at <a
				class="link decoration-surface-500 dark:decoration-surface-400"
				href="mailto:sammatanz@gmail.com">sammatanz@gmail.com</a
			>, or through one of the platforms below.
		</p>
	</section>
</div>

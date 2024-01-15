<script>
	// Imports
	import { onMount } from "svelte";
	import { OpenAI } from "openai";
	import wait from "$lib/assets/wait.mp3";

	// Environment Variables
	import.meta.env.OPENAI_API_KEY;
	import.meta.env.ELEVENLABS_API_KEY;
	import.meta.env.ELEVENLABS_VOICE;
	const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

	// Get Photo From Webcam
	let videoStream,
		status = "Awaiting Webcam Access... ⌛",
		image,
		script = "No Script Generated",
		audio = wait;

	onMount(async () => {
		try {
			videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
			const videoElement = document.querySelector("#webcam");
			videoElement.srcObject = videoStream;
			status = "Awaiting Image... 📷";
		} catch (error) {
			status = "Webcam Permissions Failed ❌";
			console.error("Error accessing the webcam", error);
		}
	});

	function takePhoto() {
		const videoElement = document.querySelector("#webcam");
		const canvas = document.createElement("canvas");
		canvas.width = 500;
		canvas.height = 500;
		canvas.getContext("2d").drawImage(videoElement, 0, 0, canvas.width, canvas.height);
		let photo = canvas.toDataURL("image/png");
		status = "Image Taken 📸";
		status = "Generating Script... 📝";
		summarise(photo);
	}

	async function summarise(photo) {
		try {
			status = "Sending image to OpenAI... 🔄";

			const response = await fetch("/api/openai", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ photo }),
			});

			if (response.ok) {
				const data = await response.json();
				script = data.choices[0].text.trim();
				status = "Script Generated 💬";
			} else {
				status = "Failed to generate script ❌";
				console.error("Error from OpenAI API:", await response.text());
			}
		} catch (error) {
			status = "Error processing the image ❌";
			console.error("Error:", error);
		} finally {
			status = "Synthesising Speech... 🗣️";
			synthesise(script);
		}
	}

	function synthesise(script) {
		status = "Done ✅";
		status = script;
	}
</script>

<div class="pt-12">
	<h3>My (Slightly Snarky) David AttenBot:</h3>
	<div class="flex flex-col py-4 md:flex-row">
		<div class="w-full md:w-2/5">
			<video id="webcam" class="w-full aspect-square bg-stone-800" autoplay
				><track kind="captions" label="No captions available" default /></video
			>
			<div class="flex items-center justify-center mt-4">
				<button
					class="px-4 pt-1 text-lg rounded bg-stone-800 text-stone-200 hover:scale-105"
					on:click={takePhoto}
				>
					Start AttenBot
				</button>
			</div>
		</div>
		<div class="flex flex-col items-center w-full px-4 pt-4 md:w-3/5">
			<h3 class="pt-4">How does it work?</h3>
			<div class="py-4">
				<div class="flex">
					<h2 class="pr-2">1.</h2>
					<p>
						David first analyses and summarises the photo with
						<a href="https://platform.openai.com/docs/guides/vision"
							>OpenAI's GPT-4 Vision
						</a>
						to generate a script in the style of a BBC earth nature documentary.
					</p>
				</div>
			</div>
			<div class="py-4">
				<div class="flex">
					<h2 class="pr-2">2.</h2>
					<p>
						Then, this script is fed to an
						<a href="https://elevenlabs.io/">ElevenLabs</a>
						model which I trained to synthesise an audio transcript in a lovingly familiar
						tone.
					</p>
				</div>
			</div>
			<i>This can take some time, please be patient.</i>
		</div>
	</div>
	<div
		class="flex flex-col items-center justify-center mt-8 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4"
	>
		<p class="p-4 rounded bg-stone-800 text-stone-300">
			Status: {status}
		</p>
		<audio controls>
			<source src={audio} type="audio/mpeg" />
		</audio>
	</div>
</div>

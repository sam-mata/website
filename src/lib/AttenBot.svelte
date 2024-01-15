<script>
	// Imports
	import { onMount } from "svelte";
	import { OpenAI } from "openai";
	import wait from "$lib/assets/wait.mp3";

	// Environment Variables
	import.meta.env.OPENAI_API_KEY;
	import.meta.env.ELEVENLABS_API_KEY;
	import.meta.env.ELEVENLABS_VOICE;
	const openaiApiKey = import.meta.env.OPENAI_API_KEY;
	const elevenLabsApiKey = import.meta.env.ELEVENLABS_API_KEY;
	const elevenLabsVoice = import.meta.env.ELEVENLABS_VOICE;

	// Get Photo From Webcam
	let videoStream,
		status = "Awaiting Image...",
		photo,
		script = "No Script Generated.",
		audio = wait;

	onMount(async () => {
		try {
			videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
			const videoElement = document.querySelector("#webcam");
			videoElement.srcObject = videoStream;
		} catch (error) {
			console.error("Error accessing the webcam", error);
		}
	});

	function takePhoto() {
		const videoElement = document.querySelector("#webcam");
		const canvas = document.createElement("canvas");
		canvas.width = videoElement.videoWidth;
		canvas.height = videoElement.videoHeight;
		canvas.getContext("2d").drawImage(videoElement, 0, 0, canvas.width, canvas.height);
		photo = canvas.toDataURL("image/png");
		summarise();
	}

	// Get Summary From Photo

	// Get Script From Summary

	// Get Audio From Script
</script>

<div class="pt-12">
	<h3>A (Slightly Snarky) David AttenBot:</h3>
	<div class="flex flex-col py-4 md:flex-row">
		<div class="w-full md:w-2/5">
			<video id="webcam" class="w-full aspect-square bg-stone-800" autoplay
				><track kind="captions" label="No captions available" default /></video
			>
			<div class="flex justify-center mt-4">
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
						model to synthesise an audio transcript in a lovingly familiar tone.
					</p>
				</div>
			</div>
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

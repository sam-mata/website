<script>
	// Imports
	import { onMount } from "svelte";
	import { OpenAI } from "openai";

	// Environment Variables
	import.meta.env.OPENAI_API_KEY;
	import.meta.env.ELEVENLABS_API_KEY;
	import.meta.env.ELEVENLABS_VOICE;
	const openaiApiKey = import.meta.env.OPENAI_API_KEY;
	const elevenLabsApiKey = import.meta.env.ELEVENLABS_API_KEY;
	const elevenLabsVoice = import.meta.env.ELEVENLABS_VOICE;

	// Get Photo From Webcam
	let videoStream, photo, summary, script, audio;

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

<div class="pt-6">
	<p>
		Most recently, I made <a href="https://twitter.com/charliebholtz/status/1724815159590293764"
			>my very own</a
		>
		<i>"david attenbot"</i> - a webcam narrator in the style of a certain nature documentary presenter.
	</p>

	<div class="flex">
		<div class="w-2/5">
			<video id="webcam" class="w-full aspect-square bg-zinc-800" autoplay
				><track kind="captions" label="No captions available" default /></video
			>
			<button
				class="px-2 mt-8 text-lg rounded bg-zinc-800 text-zinc-50 hover:scale-105"
				on:click={takePhoto}
			>
				Take Photo
			</button>
			{#if photo}
				<img src={photo} alt="AttenBot View" class="w-full mt-4 aspect-square" />
			{/if}
		</div>
		<div class="flex flex-col items-center w-3/5">
			<p>{summary}</p>
			<p>{script}</p>
			<p>{audio}</p>
		</div>
	</div>
</div>

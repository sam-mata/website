<script>
	import '../app.postcss';
	// import { TableOfContents } from '@skeletonlabs/skeleton';
	import { autoModeWatcher } from '@skeletonlabs/skeleton';
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>
<!-- <TableOfContents /> -->
<slot />
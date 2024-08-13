<script>
    import '../app.postcss';
    import { autoModeWatcher } from '@skeletonlabs/skeleton';
</script>

<title>Sam Mata</title>
<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>
<slot />
<script lang="ts">
	import favicon from '$lib/assets/favicon.ico'
	import { PERSONAL_DESCRIPTION } from '$lib/constants';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Yael Chavoya</title>
	<link rel="icon" href={favicon} type="image/x-icon" />
	<meta name="description" content={PERSONAL_DESCRIPTION} />
</svelte:head>

{@render children?.()}
<Footer />

<style>
	:root {
		--primary-color: #117100;
		--primary-text: #0a4200;
		--primary-light: #c8d1c7;
		--background-light: #fbfffa;
	}

	:global(body) {
		margin: 0;
		background-color: var(--background-light);
	}

	:global(p) {
		font-family: 'Lato', sans-serif;
		font-weight: 400;
		font-size: 1.3rem;
		line-height: 1.3;
	}

	:global(h1, h2, h3, h4, h5, h6, p) {
		margin-block: 0;
	}
</style>

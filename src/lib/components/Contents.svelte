<script lang="ts">
	import MenuIcon from '$lib/assets/MenuIcon.svelte';
	import { onMount } from 'svelte';

	let showContents = $state(false);

	const menuItems = [
		{ label: 'About Me', href: '/#' },
		{ label: 'Skills', href: '/#skills' },
		{ label: 'Experience', href: '/#experience' },
		{ label: 'Certifications', href: '/#certifications' },
	];

	onMount(() => {
		if (window.innerWidth > 1200) {
			showContents = true;
		}
	});

	const handleToggle = () => {
		showContents = !showContents;
	};
</script>

<div id="contents">
	<button
		class="toggler"
		onclick={handleToggle}
		title="{showContents ? 'Hide' : 'Show'} table of contents"
	>
		<MenuIcon />
	</button>
	<div class="menu {showContents ? 'shown' : ''}">
		{#each menuItems as item}
			<a class="item" href={item.href}>{item.label}</a>
		{/each}
	</div>
</div>

<style lang="scss">
	#contents {
		position: fixed;
		top: 5%;
		right: 0;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		z-index: 20;

		.toggler {
			border: 3px solid var(--primary-text);
			border-top-left-radius: 10px;
			border-bottom-left-radius: 10px;
			border-inline-end: 0;
			padding: 0.5rem 0.5rem 0.5rem 1rem;
			background-color: var(--background-light);
			cursor: pointer;
			margin-right: -3px;
			z-index: 22;
			:global(svg) {
				width: 2rem;
				fill: var(--primary-text);
			}

			&:hover {
				padding-inline-end: 1rem;
			}
		}

		.menu {
			width: 0;
			padding: 0;
			border: 3px solid var(--primary-text);
			border-inline-end: 0;
			background-color: var(--background-light);
			z-index: 21;
			display: flex;
			flex-direction: column;
			transition: width 0.3s ease-in-out;

			&.shown {
				width: 12rem;
			}

			.item {
				padding: 0.65rem 1.25rem;
				cursor: pointer;
				text-decoration: none;
				text-align: center;
				font-family: 'Lato', sans-serif;
				font-size: 1.2rem;

				&:hover {
					scale: 1.1;
					color: var(--accent);
					transition: 0.1s ease-in-out;
				}
			}
		}
	}
</style>

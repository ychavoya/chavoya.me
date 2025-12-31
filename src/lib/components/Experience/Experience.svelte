<script>
	import experience from '$lib/experience';
	import ExperienceComponent from '$lib/components/Experience/ExperienceComponent.svelte';
</script>

<section id="experience">
	<div class="triangles">
		<div class="triangle"></div>
		<div class="triangle"></div>
	</div>
	<div class="content">
		<h1>Experience</h1>
		{#each experience as item (item)}
			<ExperienceComponent {item} />
		{/each}
	</div>
</section>

<style lang="scss">
	#experience {
		background-color: var(--background-light);
		background-image: url('$lib/assets/squares-bottom.svg');
		background-repeat: repeat-x;
		background-position-y: bottom;
		--bottom-margin: 4rem;
		background-size: auto var(--bottom-margin);
		padding-bottom: var(--bottom-margin);
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		max-width: 1920px;
		margin: 0 auto;

		h1 {
			color: var(--primary-text);
			margin-bottom: 1rem;
		}
	}

	.triangles {
		margin-top: -8rem;
		position: relative;
		height: 8rem;

		.triangle {
			z-index: 2;
			width: 0;
			height: 0;
			border-style: solid;
			position: absolute;
			bottom: 0;
			&:nth-of-type(1) {
				border-width: 8rem 0 0 50vw;
				border-color: transparent transparent transparent var(--background-light);
				left: 0;
			}
			&:nth-of-type(2) {
				border-width: 0 0 8rem 50vw;
				border-color: transparent transparent var(--background-light) transparent;
				right: 0;
			}
		}
	}
</style>

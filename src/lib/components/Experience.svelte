<script>
	import Wip from '$lib/assets/Wip.svelte';
</script>

<section id="experience">
	<div class="triangles">
		<div class="triangle"></div>
		<div class="triangle"></div>
	</div>
	<div class="content">
		<h1>Experience</h1>
		<div class="wip">
			<Wip />
			<p>Oops, I am still working on this part 😅.</p>
			<p>
				In the meantime, you can check this out on my <a href="https://linkedin.com/in/yael-chavoya"
					>LinkedIn</a
				>
			</p>
		</div>
	</div>
</section>

<style lang="scss">
	#experience {
		background-color: var(--background-light);
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
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

	.wip {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		:global(svg) {
			width: 25rem;
			height: auto;
			margin-bottom: 2rem;
		}
	}
</style>
